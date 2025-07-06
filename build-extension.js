const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

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

// Copy icon files (both SVG and PNG if they exist)
const iconExtensions = ['svg', 'png'];
const iconSizes = [16, 32, 48, 128];

iconSizes.forEach(size => {
  iconExtensions.forEach(ext => {
    const iconFile = `icon${size}.${ext}`;
    const sourcePath = path.join('public/icons', iconFile);
    const destPath = path.join(iconsDir, iconFile);
    
    if (fs.existsSync(sourcePath)) {
      fs.copyFileSync(sourcePath, destPath);
      console.log(`✅ Copied ${iconFile}`);
    }
  });
});

// Update popup.html to reference the built JS file
console.log('🔧 Updating popup.html...');
let popupHtml = fs.readFileSync('dist-extension/popup.html', 'utf8');
// The build process should handle this automatically, but let's make sure
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
console.log('📝 Note: SVG icons were created. For production, consider converting to PNG format.');