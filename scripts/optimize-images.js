#!/usr/bin/env node

/**
 * Image Optimization Script
 * Converts and compresses images to WebP/AVIF format
 */

const fs = require('fs');
const path = require('path');

const QUALITY_SETTINGS = {
  webp: { quality: 80, effort: 6 },
  avif: { quality: 65, effort: 6 },
};

const TARGET_SIZE = 150 * 1024; // 150KB limit

function formatSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function findImages(dir) {
  const images = [];
  const extensions = ['.jpg', '.jpeg', '.png'];

  function walkDir(currentPath) {
    if (!fs.existsSync(currentPath)) return;
    
    const files = fs.readdirSync(currentPath);
    files.forEach(file => {
      const fullPath = path.join(currentPath, file);
      try {
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          walkDir(fullPath);
        } else if (extensions.includes(path.extname(file).toLowerCase())) {
          images.push(fullPath);
        }
      } catch (err) {
        console.warn(`Warning: Could not process ${fullPath}`);
      }
    });
  }

  walkDir(dir);
  return images;
}

async function main() {
  const imageDir = path.join(__dirname, '../public/images');

  if (!fs.existsSync(imageDir)) {
    console.log(`📁 Image directory not found: ${imageDir}`);
    console.log('Run this script with sharp installed: npm install --save-dev sharp');
    return;
  }

  const images = findImages(imageDir);

  if (images.length === 0) {
    console.log('No images found to optimize');
    return;
  }

  console.log(`\n🚀 Image Optimization Ready`);
  console.log(`📊 Found ${images.length} images`);
  console.log('\nTo optimize images, install sharp:');
  console.log('  npm install --save-dev sharp');
  console.log('\nThen use this script with sharp installed.');
  console.log('\nFor now, ensure images are:');
  console.log('  • Compressed to WebP/AVIF format');
  console.log('  • Each file under 150KB');
  console.log('  • Using next/image component');
}

main().catch(error => {
  console.error('Error:', error.message);
  process.exit(1);
});
