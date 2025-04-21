const https = require('https');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }

      const chunks = [];
      response.on('data', (chunk) => chunks.push(chunk));
      response.on('end', () => resolve(Buffer.concat(chunks)));
      response.on('error', reject);
    }).on('error', reject);
  });
};

const optimizeImage = async (buffer, filename, width) => {
  const outputPath = path.join(__dirname, '../public/images', filename);
  
  await sharp(buffer)
    .resize(width, null, { fit: 'contain' })
    .jpeg({ quality: 80 })
    .toFile(outputPath);
  
  console.log(`Optimized and saved ${filename}`);
};

const images = [
  {
    url: 'https://source.unsplash.com/random/1920x1080/?misty+forest',
    filename: 'forest-bg.jpg',
    width: 1920
  },
  {
    url: 'https://source.unsplash.com/random/1920x1080/?forest+path',
    filename: 'forest-path.jpg',
    width: 1920
  },
  {
    url: 'https://source.unsplash.com/random/1920x1080/?mountain+landscape',
    filename: 'mountain-landscape.jpg',
    width: 1920
  },
  {
    url: 'https://source.unsplash.com/random/800x1000/?professional+man',
    filename: 'therapist-portrait.jpg',
    width: 800
  },
  {
    url: 'https://source.unsplash.com/random/1200x800/?group+therapy',
    filename: 'group-therapy.jpg',
    width: 1200
  },
  {
    url: 'https://source.unsplash.com/random/1200x800/?counseling+session',
    filename: 'individual-therapy.jpg',
    width: 1200
  }
];

async function main() {
  try {
    // Create images directory if it doesn't exist
    const imagesDir = path.join(__dirname, '../public/images');
    if (!fs.existsSync(imagesDir)) {
      fs.mkdirSync(imagesDir, { recursive: true });
    }

    // Download and optimize each image
    for (const image of images) {
      console.log(`Downloading ${image.filename}...`);
      const buffer = await downloadImage(image.url);
      await optimizeImage(buffer, image.filename, image.width);
    }

    console.log('All images downloaded and optimized successfully!');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main(); 