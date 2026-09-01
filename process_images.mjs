import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import sharp from 'sharp';
import heicConvert from 'heic-convert';

const readFile = promisify(fs.readFile);

const imagesToProcess = [
  {
    src: 'C:\\Users\\Hp\\Desktop\\maa sharda\\photos\\Executive - 321\\IMG_7817.HEIC',
    dest: 'public/images/room-deluxe-double.webp'
  }
];

async function processImages() {
  if (!fs.existsSync('public/images')) {
    fs.mkdirSync('public/images', { recursive: true });
  }

  for (const img of imagesToProcess) {
    try {
      console.log(`Processing: ${img.src}`);
      const inputBuffer = await readFile(img.src);
      
      let processedBuffer = inputBuffer;
      
      // Convert HEIC to JPEG buffer first if necessary
      if (img.src.toLowerCase().endsWith('.heic')) {
        console.log('  Converting HEIC to JPEG buffer first...');
        processedBuffer = await heicConvert({
          buffer: inputBuffer,
          format: 'JPEG',
          quality: 1
        });
      }

      // Use sharp to convert to WEBP and resize for web
      await sharp(processedBuffer)
        .resize({ width: 1920, withoutEnlargement: true }) // Max width 1920px for web
        .webp({ quality: 80 })
        .toFile(img.dest);
        
      console.log(`  Saved to: ${img.dest}`);
    } catch (err) {
      console.error(`  Error processing ${img.src}:`, err.message);
    }
  }
}

processImages().then(() => console.log('Done!'));
