'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link href="/" className="site-title" style={{ display: 'flex', alignItems: 'center' }} onClick={closeMenu}>
          <img src="/logo-transparent.png" alt="Maa Sharda Palace Logo" style={{ height: '55px', width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.9 }} />
        </Link>
        
        {/* Mobile Menu Toggle */}
        <button 
          className={`mobile-menu-toggle ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`site-nav ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><Link href="/" onClick={closeMenu}>Home</Link></li>
            <li><Link href="/rooms" onClick={closeMenu}>Accommodations</Link></li>
            <li><Link href="/banquet-halls" onClick={closeMenu}>Weddings</Link></li>
            <li><Link href="/amenities" onClick={closeMenu}>Experience</Link></li>
            <li><Link href="/gallery" onClick={closeMenu}>Gallery</Link></li>
            <li><Link href="/blog" onClick={closeMenu}>Blog</Link></li>
            <li><Link href="/contact" onClick={closeMenu}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
