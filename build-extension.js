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
execSync('vite build --config vite.config.extension.ts', { stdio: 'inherit' });

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

// Copy icon files
const iconFiles = ['icon16.png', 'icon32.png', 'icon48.png', 'icon128.png'];
iconFiles.forEach(iconFile => {
  const sourcePath = path.join('public/icons', iconFile);
  const destPath = path.join(iconsDir, iconFile);
  
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, destPath);
    console.log(`✅ Copied ${iconFile}`);
  } else {
    console.warn(`⚠️  Icon file not found: ${sourcePath}`);
  }
});

// Update popup.html to reference the built JS file
console.log('🔧 Updating popup.html...');
let popupHtml = fs.readFileSync('dist-extension/popup.html', 'utf8');
popupHtml = popupHtml.replace(
  '<script type="module" src="popup.js"></script>',
  '<script type="module" src="popup.js"></script>'
);
fs.writeFileSync('dist-extension/popup.html', popupHtml);

console.log('✅ Chrome extension built successfully!');
console.log('📁 Extension files are in the "dist-extension" directory');
console.log('');
console.log('🔧 To install the extension:');
console.log('1. Open Chrome and go to chrome://extensions/');
console.log('2. Enable "Developer mode" in the top right');
console.log('3. Click "Load unpacked" and select the "dist-extension" folder');
console.log('4. The Octra Web Wallet extension should now appear in your extensions');