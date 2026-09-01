'use client';

import { useEffect, useRef } from 'react';

export default function DamruCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.parentElement?.clientWidth || window.innerWidth;
    let height = canvas.parentElement?.clientHeight || window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Generate particles for the Damru (hourglass/double-cone shape)
    const particles: {x: number, y: number, z: number, size: number, color: string, speedY: number}[] = [];
    const numParticles = 1800; // Dense enough for shape, light enough for performance
    
    const H = 200; // Half height of the damru
    const R_max = 160; // Max radius at the outer ends
    const R_min = 15; // Min radius at the center (the pinch)

    // Generate points
    for (let i = 0; i < numParticles; i++) {
      // Y goes from -H to H
      // We use a slight cubic bias to put more particles near the ends where radius is larger
      const t = (Math.random() * 2 - 1); 
      const y = Math.pow(Math.abs(t), 0.8) * Math.sign(t) * H; 
      
      const absY = Math.abs(y);
      const r = R_min + (R_max - R_min) * (absY / H); // Radius at this Y
      
      const theta = Math.random() * Math.PI * 2;
      
      const x = r * Math.cos(theta);
      const z = r * Math.sin(theta);
      
      // Random surface noise
      const noise = (Math.random() - 0.5) * 8;
      
      // Some particles will be gold to simulate strings/accents
      const isGold = Math.random() > 0.85;
      
      particles.push({
        x: x + noise,
        y: y,
        z: z + noise,
        size: isGold ? Math.random() * 2 + 1 : Math.random() * 1.5 + 0.5,
        color: isGold ? '#D4AF37' : 'rgba(255, 255, 255, 0.7)',
        speedY: (Math.random() - 0.5) * 0.5 // Slight floating
      });
    }

    let angleX = 0.15; // Tilted slightly forward
    let angleY = 0;
    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // Rotate slowly around Y axis
      angleY += 0.003; 

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      // Project and sort particles
      const projected = particles.map(p => {
        // Floating effect
        p.y += p.speedY;
        if (p.y > H || p.y < -H) p.speedY *= -1;

        // Rotate Y
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.z * cosY + p.x * sinY;
        
        // Rotate X
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.y * sinX;

        // 3D Perspective Projection
        const fov = 600;
        const scale = fov / (fov + z2 + 300);

        return {
          px: cx + x1 * scale * 1.5, 
          py: cy + y2 * scale * 1.5,
          scale: scale,
          z: z2,
          color: p.color,
          size: p.size,
          isGold: p.color === '#D4AF37'
        };
      });

      // Painter's algorithm (draw back to front)
      projected.sort((a, b) => b.z - a.z);

      for (const p of projected) {
        // Depth-based opacity
        const alpha = Math.max(0.05, Math.min(1, p.scale * 1.2));
        
        ctx.beginPath();
        ctx.arc(p.px, p.py, p.size * p.scale, 0, Math.PI * 2);
        
        if (p.isGold) {
          ctx.fillStyle = `rgba(212, 175, 55, ${alpha})`;
          ctx.shadowBlur = 8;
          ctx.shadowColor = `rgba(212, 175, 55, ${alpha * 0.8})`;
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.5})`;
          ctx.shadowBlur = 2;
          ctx.shadowColor = `rgba(255, 255, 255, ${alpha * 0.2})`;
        }
        
        ctx.fill();
        ctx.shadowBlur = 0; // Reset
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.parentElement?.clientHeight || window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0, // Behind the hero content
        pointerEvents: 'none',
        opacity: 0.85
      }}
    />
  );
}
