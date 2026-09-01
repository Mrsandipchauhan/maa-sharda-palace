const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, 'public', 'logo.png');
const outputPath = path.join(__dirname, 'public', 'logo-transparent.png');

async function processImage() {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // We will extract the alpha channel if any, or create one.
    // If it's a black logo on white background:
    // We can convert to greyscale, invert it (so logo is white, bg is black),
    // and use that as the alpha channel over a solid white image!
    // Or simpler: just threshold.
    
    const { data, info } = await image.raw().ensureAlpha().toBuffer({ resolveWithObject: true });
    
    // Check corner pixel to see if it's white or black
    const r = data[0];
    const g = data[1];
    const b = data[2];
    
    const isWhiteBg = (r > 200 && g > 200 && b > 200);
    const isBlackBg = (r < 50 && g < 50 && b < 50);

    for (let i = 0; i < data.length; i += 4) {
      const pr = data[i];
      const pg = data[i+1];
      const pb = data[i+2];
      
      if (isWhiteBg) {
        // If white bg, make white pixels transparent
        if (pr > 200 && pg > 200 && pb > 200) {
          data[i+3] = 0; // Alpha 0
        }
      } else if (isBlackBg) {
        // If black bg, make black pixels transparent
        if (pr < 50 && pg < 50 && pb < 50) {
          data[i+3] = 0; // Alpha 0
        }
      }
    }
    
    await sharp(data, {
      raw: { width: info.width, height: info.height, channels: 4 }
    }).toFile(outputPath);
    
    console.log("Processed successfully: " + (isWhiteBg ? "Removed White BG" : "Removed Black BG"));
  } catch (e) {
    console.error(e);
  }
}

processImage();
