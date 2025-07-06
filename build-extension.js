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

// Fix CSS loading - ensure CSS is properly linked
console.log('🎨 Fixing CSS loading...');

// Check if CSS file exists in root
const rootCssPath = 'dist-extension/popup.css';
const assetsCssPath = 'dist-extension/assets/popup.css';

let cssFound = false;
let cssFileName = 'popup.css';

if (fs.existsSync(rootCssPath)) {
  cssFound = true;
  cssFileName = 'popup.css';
  console.log('✅ Found popup.css in root');
} else if (fs.existsSync(assetsCssPath)) {
  // Move CSS from assets to root for easier loading
  fs.copyFileSync(assetsCssPath, rootCssPath);
  cssFound = true;
  cssFileName = 'popup.css';
  console.log('✅ Moved popup.css from assets to root');
} else {
  // Look for any CSS file in assets directory
  const assetsDir = 'dist-extension/assets';
  if (fs.existsSync(assetsDir)) {
    const files = fs.readdirSync(assetsDir);
    const cssFile = files.find(file => file.endsWith('.css'));
    
    if (cssFile) {
      const sourcePath = path.join(assetsDir, cssFile);
      fs.copyFileSync(sourcePath, rootCssPath);
      cssFound = true;
      cssFileName = 'popup.css';
      console.log(`✅ Found and moved ${cssFile} to popup.css`);
    }
  }
}

// Update popup.html to ensure CSS is loaded correctly
console.log('🔧 Updating popup.html...');
let popupHtml = fs.readFileSync('dist-extension/popup.html', 'utf8');

// Remove any existing CSS links
popupHtml = popupHtml.replace(/<link[^>]*rel="stylesheet"[^>]*>/g, '');

// Add CSS link before closing head tag
if (cssFound) {
  popupHtml = popupHtml.replace(
    '</head>',
    `    <link rel="stylesheet" href="${cssFileName}">\n  </head>`
  );
  console.log(`✅ Added CSS link: ${cssFileName}`);
} else {
  console.log('⚠️ No CSS file found, using inline styles only');
}

fs.writeFileSync('dist-extension/popup.html', popupHtml);

// Create a comprehensive fallback CSS if main CSS is missing
if (!cssFound) {
  console.log('⚠️ Main CSS not found, creating comprehensive fallback...');
  
  const fallbackCSS = `
/* Comprehensive Fallback CSS for Octra Web Wallet Extension */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

/* CSS Variables */
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  --card: 0 0% 100%;
  --card-foreground: 0 0% 3.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 0 0% 3.9%;
  --primary: 0 0% 9%;
  --primary-foreground: 0 0% 98%;
  --secondary: 0 0% 96.1%;
  --secondary-foreground: 0 0% 9%;
  --muted: 0 0% 96.1%;
  --muted-foreground: 0 0% 45.1%;
  --accent: 0 0% 96.1%;
  --accent-foreground: 0 0% 9%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 98%;
  --border: 0 0% 89.8%;
  --input: 0 0% 89.8%;
  --ring: 0 0% 3.9%;
  --radius: 0.5rem;
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --card: 222.2 84% 4.9%;
  --card-foreground: 210 40% 98%;
  --popover: 222.2 84% 4.9%;
  --popover-foreground: 210 40% 98%;
  --primary: 217.2 91% 59.8%;
  --primary-foreground: 222.2 84% 4.9%;
  --secondary: 217.2 32.6% 17.5%;
  --secondary-foreground: 210 40% 98%;
  --muted: 217.2 32.6% 17.5%;
  --muted-foreground: 215 20.2% 65.1%;
  --accent: 217.2 32.6% 17.5%;
  --accent-foreground: 210 40% 98%;
  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 210 40% 98%;
  --border: 217.2 32.6% 17.5%;
  --input: 217.2 32.6% 17.5%;
  --ring: 224.3 76.3% 94.1%;
}

/* Base styles */
* {
  box-sizing: border-box;
  border-color: hsl(var(--border));
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  background: hsl(var(--background));
  color: hsl(var(--foreground));
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#root {
  width: 100%;
  height: 100%;
}

/* Layout utilities */
.min-h-screen { min-height: 100vh; }
.w-full { width: 100%; }
.h-full { height: 100%; }
.flex { display: flex; }
.grid { display: grid; }
.hidden { display: none; }
.items-center { align-items: center; }
.items-start { align-items: flex-start; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.flex-col { flex-direction: column; }
.space-x-1 > * + * { margin-left: 0.25rem; }
.space-x-2 > * + * { margin-left: 0.5rem; }
.space-x-3 > * + * { margin-left: 0.75rem; }
.space-y-2 > * + * { margin-top: 0.5rem; }
.space-y-3 > * + * { margin-top: 0.75rem; }
.space-y-4 > * + * { margin-top: 1rem; }
.gap-1 { gap: 0.25rem; }
.gap-2 { gap: 0.5rem; }
.gap-3 { gap: 0.75rem; }

/* Spacing */
.p-1 { padding: 0.25rem; }
.p-2 { padding: 0.5rem; }
.p-3 { padding: 0.75rem; }
.p-4 { padding: 1rem; }
.px-2 { padding-left: 0.5rem; padding-right: 0.5rem; }
.px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
.py-1 { padding-top: 0.25rem; padding-bottom: 0.25rem; }
.py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
.m-0 { margin: 0; }
.mt-2 { margin-top: 0.5rem; }
.mt-3 { margin-top: 0.75rem; }
.mb-2 { margin-bottom: 0.5rem; }
.mr-1 { margin-right: 0.25rem; }
.mr-2 { margin-right: 0.5rem; }

/* Typography */
.text-xs { font-size: 0.75rem; line-height: 1rem; }
.text-sm { font-size: 0.875rem; line-height: 1.25rem; }
.text-base { font-size: 1rem; line-height: 1.5rem; }
.text-lg { font-size: 1.125rem; line-height: 1.75rem; }
.text-xl { font-size: 1.25rem; line-height: 1.75rem; }
.text-2xl { font-size: 1.5rem; line-height: 2rem; }
.font-medium { font-weight: 500; }
.font-bold { font-weight: 700; }
.text-center { text-align: center; }
.text-muted-foreground { color: hsl(var(--muted-foreground)); }
.text-primary { color: hsl(var(--primary)); }
.text-red-500 { color: rgb(239 68 68); }
.text-green-500 { color: rgb(34 197 94); }
.text-red-600 { color: rgb(220 38 38); }

/* Backgrounds */
.bg-white { background-color: rgb(255 255 255); }
.bg-muted { background-color: hsl(var(--muted)); }
.bg-primary { background-color: hsl(var(--primary)); }
.bg-gradient-to-br { background-image: linear-gradient(to bottom right, var(--tw-gradient-stops)); }
.from-slate-50 { --tw-gradient-from: #f8fafc; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(248, 250, 252, 0)); }
.to-slate-100 { --tw-gradient-to: #f1f5f9; }
.dark .from-slate-900 { --tw-gradient-from: #0f172a; }
.dark .to-slate-800 { --tw-gradient-to: #1e293b; }

/* Borders */
.border { border-width: 1px; border-style: solid; }
.border-b { border-bottom-width: 1px; border-bottom-style: solid; }
.rounded { border-radius: 0.25rem; }
.rounded-md { border-radius: calc(var(--radius) - 2px); }
.rounded-lg { border-radius: var(--radius); }

/* Cards */
.card {
  background: hsl(var(--card));
  color: hsl(var(--card-foreground));
  border-radius: var(--radius);
  border: 1px solid hsl(var(--border));
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

/* Buttons */
button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: calc(var(--radius) - 2px);
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s;
  cursor: pointer;
  border: 1px solid transparent;
  padding: 0.5rem 1rem;
  height: 2.25rem;
}

button:disabled {
  pointer-events: none;
  opacity: 0.5;
}

/* Button variants */
.btn-default {
  background: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.btn-default:hover {
  background: hsl(var(--primary) / 0.9);
}

.btn-outline {
  border: 1px solid hsl(var(--input));
  background: hsl(var(--background));
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.btn-outline:hover {
  background: hsl(var(--accent));
  color: hsl(var(--accent-foreground));
}

.btn-ghost:hover {
  background: hsl(var(--accent));
  color: hsl(var(--accent-foreground));
}

.btn-sm {
  height: 2rem;
  padding: 0 0.75rem;
  font-size: 0.75rem;
}

/* Tabs */
.tabs-list {
  display: inline-flex;
  height: 2.25rem;
  align-items: center;
  justify-content: center;
  border-radius: calc(var(--radius) + 2px);
  background: hsl(var(--muted));
  padding: 0.25rem;
  color: hsl(var(--muted-foreground));
}

.tabs-trigger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: calc(var(--radius) - 2px);
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s;
  cursor: pointer;
  border: none;
  background: transparent;
}

.tabs-trigger[data-state="active"] {
  background: hsl(var(--background));
  color: hsl(var(--foreground));
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
}

/* Avatar */
.avatar {
  position: relative;
  display: flex;
  height: 2.5rem;
  width: 2.5rem;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 50%;
}

.avatar-fallback {
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: hsl(var(--muted));
}

/* Badge */
.badge {
  display: inline-flex;
  align-items: center;
  border-radius: calc(var(--radius) - 2px);
  border: 1px solid transparent;
  padding: 0.125rem 0.625rem;
  font-size: 0.75rem;
  font-weight: 600;
  transition: all 0.2s;
}

.badge-default {
  border: transparent;
  background: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.badge-secondary {
  border: transparent;
  background: hsl(var(--secondary));
  color: hsl(var(--secondary-foreground));
}

/* Grid layouts */
.grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }

/* Overflow */
.overflow-hidden { overflow: hidden; }
.overflow-y-auto { overflow-y: auto; }

/* Max height */
.max-h-40 { max-height: 10rem; }

/* Loading state */
.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 0.875rem;
  color: hsl(var(--muted-foreground));
}

/* Backdrop blur */
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}

/* Sticky positioning */
.sticky { position: sticky; }
.top-0 { top: 0; }

/* Z-index */
.z-50 { z-index: 50; }

/* Responsive utilities */
@media (max-width: 640px) {
  .sm\\:inline-flex { display: inline-flex; }
}

/* Dark mode adjustments */
.dark .bg-white { background-color: hsl(var(--card)); }
.dark .text-muted-foreground { color: hsl(var(--muted-foreground)); }

/* Font mono for addresses and keys */
.font-mono {
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace;
}

/* Break all for long text */
.break-all {
  word-break: break-all;
}

/* Flex-1 */
.flex-1 { flex: 1 1 0%; }

/* Flex-shrink-0 */
.flex-shrink-0 { flex-shrink: 0; }

/* Transitions */
.transition-colors { transition: color 0.2s, background-color 0.2s, border-color 0.2s; }

/* Hover states */
.hover\\:bg-accent:hover { background-color: hsl(var(--accent)); }
.hover\\:text-accent-foreground:hover { color: hsl(var(--accent-foreground)); }

/* Focus states */
.focus-visible\\:outline-none:focus-visible { outline: 2px solid transparent; outline-offset: 2px; }
.focus-visible\\:ring-1:focus-visible { box-shadow: 0 0 0 1px hsl(var(--ring)); }

/* Container max width */
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 640px) {
  .container { max-width: 640px; }
}

@media (min-width: 768px) {
  .container { max-width: 768px; }
}

@media (min-width: 1024px) {
  .container { max-width: 1024px; }
}

@media (min-width: 1280px) {
  .container { max-width: 1280px; }
}

@media (min-width: 1536px) {
  .container { max-width: 1536px; }
}
`;

  fs.writeFileSync(rootCssPath, fallbackCSS);
  console.log('✅ Created comprehensive fallback CSS');
  
  // Update HTML to include the fallback CSS
  popupHtml = popupHtml.replace(
    '</head>',
    `    <link rel="stylesheet" href="popup.css">\n  </head>`
  );
  fs.writeFileSync('dist-extension/popup.html', popupHtml);
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