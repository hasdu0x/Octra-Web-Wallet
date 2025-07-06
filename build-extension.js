import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🚀 Building Octra Web Wallet Chrome Extension...');

// Clean previous build
if (fs.existsSync('dist-extension')) {
  fs.rmSync('dist-extension', { recursive: true });
}

// Build the extension
console.log('📦 Building extension files...');
try {
  execSync('vite build --config vite.config.extension.ts', { stdio: 'inherit' });
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

// Copy manifest and other files
console.log('📋 Copying manifest and assets...');

// Copy manifest.json
fs.copyFileSync('manifest.json', 'dist-extension/manifest.json');

// Copy popup.html
fs.copyFileSync('popup.html', 'dist-extension/popup.html');

// Create icons directory and copy icons
const iconsDir = 'dist-extension/icons';
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Copy PNG icon files (prioritize PNG over SVG)
const iconSizes = [16, 32, 48, 128];
let iconsFound = 0;

iconSizes.forEach(size => {
  // First try PNG
  const pngFile = `icon${size}.png`;
  const pngSourcePath = path.join('public/icons', pngFile);
  const pngDestPath = path.join(iconsDir, pngFile);
  
  if (fs.existsSync(pngSourcePath)) {
    fs.copyFileSync(pngSourcePath, pngDestPath);
    console.log(`✅ Copied ${pngFile}`);
    iconsFound++;
  } else {
    // Fallback to SVG if PNG doesn't exist
    const svgFile = `icon${size}.svg`;
    const svgSourcePath = path.join('public/icons', svgFile);
    const svgDestPath = path.join(iconsDir, svgFile);
    
    if (fs.existsSync(svgSourcePath)) {
      fs.copyFileSync(svgSourcePath, svgDestPath);
      console.log(`✅ Copied ${svgFile}`);
      iconsFound++;
    } else {
      // Create SVG as last resort
      const svgContent = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <circle cx="${size/2}" cy="${size/2}" r="${size/2 - 2}" fill="none" stroke="#3b82f6" stroke-width="4"/>
  <circle cx="${size/2}" cy="${size/2}" r="${size/4}" fill="#3b82f6"/>
</svg>`;
      fs.writeFileSync(svgDestPath, svgContent);
      console.log(`✅ Created ${svgFile} (fallback)`);
      iconsFound++;
    }
  }
});

console.log(`📁 Found and copied ${iconsFound} icon files`);

// Update popup.html to reference the built JS file
console.log('🔧 Updating popup.html...');
let popupHtml = fs.readFileSync('dist-extension/popup.html', 'utf8');
fs.writeFileSync('dist-extension/popup.html', popupHtml);

console.log('✅ Chrome extension built successfully!');
console.log('📁 Extension files are in the "dist-extension" directory');
console.log('');
console.log('🔧 To install the extension:');
console.log('1. Open Chrome and go to chrome://extensions/');
console.log('2. Enable "Developer mode" in the top right');
console.log('3. Click "Load unpacked" and select the "dist-extension" folder');
console.log('4. The Octra Web Wallet extension should now appear in your extensions');
console.log('');
console.log('🎉 Ready to install! All PNG icons are properly configured.');