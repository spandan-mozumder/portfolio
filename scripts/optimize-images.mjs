import sharp from 'sharp';
import { readdirSync, statSync } from 'fs';
import { join } from 'path';

const assetsDir = './assets';

console.log('🖼️  Image Optimization Tool\n');
console.log('Analyzing images in ./assets directory...\n');

const files = readdirSync(assetsDir);
let totalOriginalSize = 0;
let totalOptimizedSize = 0;

for (const file of files) {
  if (file.match(/\.(jpg|jpeg|png)$/i)) {
    const input = join(assetsDir, file);
    const originalSize = statSync(input).size;
    totalOriginalSize += originalSize;
    
    let maxWidth = 2560;
    if (file.includes('profile')) {
      maxWidth = 800;
    } else if (file.includes('banner')) {
      maxWidth = 2560;
    } else {
      maxWidth = 1920;
    }
    
    const webpOutput = join(assetsDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
    
    try {
      await sharp(input)
        .resize(maxWidth, maxWidth, { 
          fit: 'inside', 
          withoutEnlargement: true 
        })
        .webp({ 
          quality: file.includes('banner') ? 85 : 80,
          effort: 6 
        })
        .toFile(webpOutput);
      
      const optimizedSize = statSync(webpOutput).size;
      totalOptimizedSize += optimizedSize;
      
      const savings = ((1 - optimizedSize / originalSize) * 100).toFixed(1);
      
      console.log(`✅ ${file}`);
      console.log(`   ${(originalSize / 1024 / 1024).toFixed(2)} MB → ${(optimizedSize / 1024 / 1024).toFixed(2)} MB`);
      console.log(`   💾 Saved ${savings}%\n`);
    } catch (error) {
      console.error(`❌ Failed to optimize ${file}:`, error.message);
    }
  }
}

console.log('\n📊 Summary:');
console.log(`   Original total: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
console.log(`   Optimized total: ${(totalOptimizedSize / 1024 / 1024).toFixed(2)} MB`);
console.log(`   Total savings: ${((1 - totalOptimizedSize / totalOriginalSize) * 100).toFixed(1)}%`);
console.log(`   Size reduction: ${((totalOriginalSize - totalOptimizedSize) / 1024 / 1024).toFixed(2)} MB`);
console.log('\n✨ Next steps:');
console.log('   1. Update your imports to use .webp files');
console.log('   2. Keep original files as fallback for older browsers');
console.log('   3. Consider using <picture> element for better compatibility');
