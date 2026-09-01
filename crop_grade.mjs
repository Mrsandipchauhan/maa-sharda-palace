import sharp from 'sharp';

async function processHeroImage() {
  const inputPath = 'C:\\Users\\Hp\\Desktop\\maa sharda\\photos\\Front View\\Day\\IMG_5446.jpg';
  const outputPath = 'public/images/hero-exterior.webp';
  
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // We want to crop the bottom part which shows the wall and water.
    // Let's remove the bottom 25% of the image.
    const cropHeight = Math.floor(metadata.height * 0.75);
    
    await image
      .extract({ 
        left: 0, 
        top: 0, 
        width: metadata.width, 
        height: cropHeight 
      })
      .resize({ width: 1920, withoutEnlargement: true })
      // Color grading: increase brightness slightly, boost saturation for that "new" premium look
      .modulate({
        brightness: 1.05,
        saturation: 1.3,
      })
      // Slight contrast boost
      .linear(1.1, -(1.1 - 1) * 128)
      .webp({ quality: 85 })
      .toFile(outputPath);
      
    console.log('Successfully cropped and color graded the hero image!');
  } catch (err) {
    console.error('Error processing image:', err);
  }
}

processHeroImage();
