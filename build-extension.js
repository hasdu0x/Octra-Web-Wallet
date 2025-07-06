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

// Fix CSS loading - rename the CSS file to popup.css
console.log('🎨 Fixing CSS loading...');
const assetsDir = 'dist-extension/assets';
if (fs.existsSync(assetsDir)) {
  const files = fs.readdirSync(assetsDir);
  const cssFile = files.find(file => file.endsWith('.css'));
  
  if (cssFile) {
    const oldPath = path.join(assetsDir, cssFile);
    const newPath = path.join(assetsDir, 'popup.css');
    fs.renameSync(oldPath, newPath);
    console.log(`✅ Renamed ${cssFile} to popup.css`);
  }
}

// Update popup.html to ensure CSS is loaded
console.log('🔧 Updating popup.html...');
let popupHtml = fs.readFileSync('dist-extension/popup.html', 'utf8');

// Ensure CSS link is present and correct
if (!popupHtml.includes('assets/popup.css')) {
  popupHtml = popupHtml.replace(
    '<link rel="stylesheet" href="assets/popup.css">',
    '<link rel="stylesheet" href="assets/popup.css">'
  );
}

fs.writeFileSync('dist-extension/popup.html', popupHtml);

// Create a simple CSS fallback if main CSS is missing
const cssPath = 'dist-extension/assets/popup.css';
if (!fs.existsSync(cssPath)) {
  console.log('⚠️ Main CSS not found, creating fallback...');
  
  const fallbackCSS = `
/* Fallback CSS for Octra Web Wallet Extension */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  background: #f8fafc;
  color: #1e293b;
}

.dark body {
  background: #0f172a;
  color: #f8fafc;
}

#root {
  width: 100%;
  height: 100%;
}

/* Basic utility classes */
.flex { display: flex; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.space-x-2 > * + * { margin-left: 0.5rem; }
.space-y-2 > * + * { margin-top: 0.5rem; }
.p-3 { padding: 0.75rem; }
.text-sm { font-size: 0.875rem; }
.text-xs { font-size: 0.75rem; }
.font-bold { font-weight: 700; }
.font-medium { font-weight: 500; }
.rounded { border-radius: 0.25rem; }
.border { border: 1px solid #e2e8f0; }
.bg-white { background-color: white; }
.text-center { text-align: center; }

/* Button styles */
button {
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  border: 1px solid #d1d5db;
  background: white;
  cursor: pointer;
  font-size: 0.875rem;
}

button:hover {
  background: #f9fafb;
}

.dark button {
  background: #374151;
  border-color: #4b5563;
  color: #f9fafb;
}

.dark button:hover {
  background: #4b5563;
}

/* Card styles */
.card {
  background: white;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
}

.dark .card {
  background: #1f2937;
  border-color: #374151;
}

/* Loading state */
.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 0.875rem;
}
`;

  if (!fs.existsSync('dist-extension/assets')) {
    fs.mkdirSync('dist-extension/assets', { recursive: true });
  }
  
  fs.writeFileSync(cssPath, fallbackCSS);
  console.log('✅ Created fallback CSS');
}

console.log('✅ Chrome extension built successfully!');
console.log('📁 Extension files are in the "dist-extension" directory');
console.log('');
console.log('🔧 To install the extension:');
console.log('1. Open Chrome and go to chrome://extensions/');
console.log('2. Enable "Developer mode" in the top right');
console.log('3. Click "Load unpacked" and select the "dist-extension" folder');
console.log('4. The Octra Web Wallet extension should now appear in your extensions');
console.log('');
console.log('🎉 Ready to install! CSS loading has been fixed.');