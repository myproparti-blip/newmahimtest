#!/usr/bin/env node

/**
 * Image Optimization Script
 * Converts JPG images to WebP and AVIF formats
 * Run with: node scripts/optimize-images.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const FOLDERS = [
  { src: 'public/images/portfolio', quality: 75, maxWidth: 1200 },
  { src: 'public/images/Virtual Tour', quality: 75, maxWidth: 800 },
  { src: 'public/images/homepageimges', quality: 75, maxWidth: 1200 },
  { src: 'public/images/Bank logo', quality: 80, maxWidth: 300 },
  { src: 'public/images/admin', quality: 80, maxWidth: 800 },
];

async function optimizeFolder(folderConfig) {
  const { src, quality, maxWidth } = folderConfig;
  
  if (!fs.existsSync(src)) {
    console.log(`⏭️  Skipping ${src} (folder not found)`);
    return;
  }

  const files = fs.readdirSync(src).filter(f => /\.(jpg|jpeg|png)$/i.test(f));
  
  console.log(`\n📁 Processing ${src} (${files.length} files)...`);

  for (const file of files) {
    const filePath = path.join(src, file);
    const fileNameNoExt = path.basename(file, path.extname(file));
    const webpPath = path.join(src, `${fileNameNoExt}.webp`);
    const avifPath = path.join(src, `${fileNameNoExt}.avif`);

    try {
      // Skip if already converted
      if (fs.existsSync(webpPath)) {
        console.log(`  ✅ ${file} (WebP exists)`);
        continue;
      }

      // Get original size
      const originalStats = fs.statSync(filePath);
      const originalSizeKB = (originalStats.size / 1024).toFixed(2);

      // Convert to WebP
      const webpBuffer = await sharp(filePath)
        .resize(maxWidth, undefined, { withoutEnlargement: true })
        .webp({ quality })
        .toBuffer();

      fs.writeFileSync(webpPath, webpBuffer);
      const webpSizeKB = (webpBuffer.length / 1024).toFixed(2);

      // Convert to AVIF (optional - can skip for faster processing)
      try {
        const avifBuffer = await sharp(filePath)
          .resize(maxWidth, undefined, { withoutEnlargement: true })
          .avif({ quality: quality - 5 })
          .toBuffer();

        fs.writeFileSync(avifPath, avifBuffer);
        const avifSizeKB = (avifBuffer.length / 1024).toFixed(2);

        const savings = (((originalStats.size - webpBuffer.length) / originalStats.size) * 100).toFixed(1);
        console.log(`  ✅ ${file}: ${originalSizeKB}KB → ${webpSizeKB}KB WebP (${savings}% smaller) + AVIF`);
      } catch (err) {
        const savings = (((originalStats.size - webpBuffer.length) / originalStats.size) * 100).toFixed(1);
        console.log(`  ✅ ${file}: ${originalSizeKB}KB → ${webpSizeKB}KB WebP (${savings}% smaller)`);
      }
    } catch (error) {
      console.error(`  ❌ Error processing ${file}:`, error.message);
    }
  }
}

async function main() {
  console.log('🚀 Starting image optimization...\n');

  try {
    for (const folderConfig of FOLDERS) {
      await optimizeFolder(folderConfig);
    }

    console.log('\n✨ Image optimization complete!');
    console.log('\n📋 Next steps:');
    console.log('   1. Update Image components to use .webp files');
    console.log('   2. Use <picture> elements for fallbacks: <source srcSet="image.webp" type="image/webp">');
    console.log('   3. Run: npm run build');
    console.log('   4. Test on GTmetrix again\n');
  } catch (error) {
    console.error('Fatal error:', error);
    process.exit(1);
  }
}

main();
