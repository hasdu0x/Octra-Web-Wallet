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

console.log('📋 Post-build processing...');

// List all files in dist-extension to debug
console.log('📁 Files in dist-extension:');
function listFiles(dir, prefix = '') {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      console.log(`${prefix}📁 ${file}/`);
      listFiles(filePath, prefix + '  ');
    } else {
      console.log(`${prefix}📄 ${file} (${stat.size} bytes)`);
    }
  });
}
listFiles('dist-extension');

// Copy manifest.json
fs.copyFileSync('manifest.json', 'dist-extension/manifest.json');
console.log('✅ Copied manifest.json');

// Create icons directory and copy icons
const iconsDir = 'dist-extension/icons';
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

const iconSizes = [16, 32, 48, 128];
iconSizes.forEach(size => {
  const pngFile = `icon${size}.png`;
  const pngSourcePath = path.join('public/icons', pngFile);
  const pngDestPath = path.join(iconsDir, pngFile);
  
  if (fs.existsSync(pngSourcePath)) {
    fs.copyFileSync(pngSourcePath, pngDestPath);
    console.log(`✅ Copied ${pngFile}`);
  }
});

// Find and process CSS file
console.log('🎨 Processing CSS...');
let cssContent = '';
let cssFound = false;

// Look for CSS files
const possibleCssFiles = [
  'dist-extension/styles.css',
  'dist-extension/popup.css',
  'dist-extension/assets/styles.css',
  'dist-extension/assets/popup.css'
];

// Also check for any CSS file in the directory
const allFiles = fs.readdirSync('dist-extension');
const cssFiles = allFiles.filter(file => file.endsWith('.css'));

if (cssFiles.length > 0) {
  const cssFile = cssFiles[0];
  cssContent = fs.readFileSync(path.join('dist-extension', cssFile), 'utf8');
  cssFound = true;
  console.log(`✅ Found CSS file: ${cssFile} (${cssContent.length} chars)`);
  
  // Ensure it's named styles.css
  if (cssFile !== 'styles.css') {
    fs.writeFileSync('dist-extension/styles.css', cssContent);
    fs.unlinkSync(path.join('dist-extension', cssFile));
    console.log(`✅ Renamed ${cssFile} to styles.css`);
  }
} else {
  // Check assets directory
  const assetsDir = 'dist-extension/assets';
  if (fs.existsSync(assetsDir)) {
    const assetFiles = fs.readdirSync(assetsDir);
    const assetCssFiles = assetFiles.filter(file => file.endsWith('.css'));
    
    if (assetCssFiles.length > 0) {
      const cssFile = assetCssFiles[0];
      cssContent = fs.readFileSync(path.join(assetsDir, cssFile), 'utf8');
      cssFound = true;
      console.log(`✅ Found CSS in assets: ${cssFile} (${cssContent.length} chars)`);
      
      // Copy to root as styles.css
      fs.writeFileSync('dist-extension/styles.css', cssContent);
      console.log('✅ Copied CSS to root as styles.css');
    }
  }
}

// Create comprehensive CSS if none found
if (!cssFound || cssContent.length < 1000) {
  console.log('⚠️ Creating comprehensive CSS...');
  
  const comprehensiveCSS = `
/* Octra Web Wallet Extension Styles */
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
  --card: 222.2 84% 6%;
  --card-foreground: 210 40% 98%;
  --popover: 222.2 84% 6%;
  --popover-foreground: 210 40% 98%;
  --primary: 217.2 91% 59.8%;
  --primary-foreground: 222.2 84% 4.9%;
  --secondary: 217.2 32.6% 17.5%;
  --secondary-foreground: 210 40% 98%;
  --muted: 217.2 32.6% 15%;
  --muted-foreground: 215 20.2% 65.1%;
  --accent: 217.2 32.6% 15%;
  --accent-foreground: 210 40% 98%;
  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 210 40% 98%;
  --border: 217.2 32.6% 20%;
  --input: 217.2 32.6% 20%;
  --ring: 224.3 76.3% 94.1%;
}

/* Base styles */
*, *::before, *::after {
  box-sizing: border-box;
  border-color: hsl(var(--border));
}

* {
  margin: 0;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  background: hsl(var(--background));
  color: hsl(var(--foreground));
  width: 400px;
  height: 600px;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

#root {
  width: 100%;
  height: 100%;
}

/* Tailwind-like utilities */
.min-h-screen { min-height: 100vh; }
.w-full { width: 100%; }
.h-full { height: 100%; }
.h-6 { height: 1.5rem; }
.h-8 { height: 2rem; }
.w-6 { width: 1.5rem; }
.w-8 { width: 2rem; }
.flex { display: flex; }
.grid { display: grid; }
.hidden { display: none; }
.items-center { align-items: center; }
.items-start { align-items: flex-start; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.flex-col { flex-direction: column; }
.flex-1 { flex: 1 1 0%; }
.flex-shrink-0 { flex-shrink: 0; }

/* Spacing */
.space-x-1 > * + * { margin-left: 0.25rem; }
.space-x-2 > * + * { margin-left: 0.5rem; }
.space-x-3 > * + * { margin-left: 0.75rem; }
.space-y-2 > * + * { margin-top: 0.5rem; }
.space-y-3 > * + * { margin-top: 0.75rem; }
.space-y-4 > * + * { margin-top: 1rem; }
.gap-1 { gap: 0.25rem; }
.gap-2 { gap: 0.5rem; }
.gap-3 { gap: 0.75rem; }

.p-1 { padding: 0.25rem; }
.p-2 { padding: 0.5rem; }
.p-3 { padding: 0.75rem; }
.p-4 { padding: 1rem; }
.px-2 { padding-left: 0.5rem; padding-right: 0.5rem; }
.px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
.py-1 { padding-top: 0.25rem; padding-bottom: 0.25rem; }
.py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
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
.font-mono { font-family: ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace; }
.break-all { word-break: break-all; }

/* Backgrounds */
.bg-white { background-color: rgb(255 255 255); }
.bg-muted { background-color: hsl(var(--muted)); }
.bg-primary { background-color: hsl(var(--primary)); }
.bg-gradient-to-br { background-image: linear-gradient(to bottom right, var(--tw-gradient-stops)); }
.from-slate-50 { --tw-gradient-from: #f8fafc; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(248, 250, 252, 0)); }
.to-slate-100 { --tw-gradient-to: #f1f5f9; }
.dark .from-slate-900 { --tw-gradient-from: #0f172a; }
.dark .to-slate-800 { --tw-gradient-to: #1e293b; }
.backdrop-blur-sm { backdrop-filter: blur(4px); }

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
  background: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
}

button:disabled {
  pointer-events: none;
  opacity: 0.5;
}

button:hover {
  background: hsl(var(--primary) / 0.9);
}

/* Button variants */
.btn-outline {
  border: 1px solid hsl(var(--input));
  background: hsl(var(--background));
  color: hsl(var(--foreground));
}

.btn-outline:hover {
  background: hsl(var(--accent));
  color: hsl(var(--accent-foreground));
}

.btn-ghost {
  background: transparent;
  color: hsl(var(--foreground));
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
  height: 2rem;
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
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  transition: all 0.2s;
  cursor: pointer;
  border: none;
  background: transparent;
  color: inherit;
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
  height: 2rem;
  width: 2rem;
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
  background: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
}

/* Badge */
.badge {
  display: inline-flex;
  align-items: center;
  border-radius: calc(var(--radius) - 2px);
  border: 1px solid transparent;
  padding: 0.125rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  transition: all 0.2s;
  background: hsl(var(--secondary));
  color: hsl(var(--secondary-foreground));
}

/* Grid layouts */
.grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }

/* Overflow */
.overflow-hidden { overflow: hidden; }
.overflow-y-auto { overflow-y: auto; }
.overflow-auto { overflow: auto; }

/* Max height */
.max-h-40 { max-height: 10rem; }

/* Positioning */
.sticky { position: sticky; }
.top-0 { top: 0; }
.z-50 { z-index: 50; }

/* Transitions */
.transition-colors { transition: color 0.2s, background-color 0.2s, border-color 0.2s; }

/* Loading state */
.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 0.875rem;
  color: hsl(var(--muted-foreground));
}

/* Dark mode specific */
.dark .bg-white { background-color: hsl(var(--card)); }
.dark .text-muted-foreground { color: hsl(var(--muted-foreground)); }

/* Responsive utilities */
@media (max-width: 640px) {
  .sm\\:inline-flex { display: inline-flex; }
}

/* Focus and hover states */
.hover\\:bg-accent:hover { background-color: hsl(var(--accent)); }
.hover\\:text-accent-foreground:hover { color: hsl(var(--accent-foreground)); }
.focus-visible\\:outline-none:focus-visible { outline: 2px solid transparent; outline-offset: 2px; }
.focus-visible\\:ring-1:focus-visible { box-shadow: 0 0 0 1px hsl(var(--ring)); }

/* Additional component styles */
input, textarea {
  display: flex;
  height: 2.25rem;
  width: 100%;
  border-radius: calc(var(--radius) - 2px);
  border: 1px solid hsl(var(--input));
  background: transparent;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  transition: all 0.2s;
}

input:focus, textarea:focus {
  outline: none;
  box-shadow: 0 0 0 1px hsl(var(--ring));
}

/* Scrollbar styling */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: hsl(var(--muted));
}

::-webkit-scrollbar-thumb {
  background: hsl(var(--border));
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: hsl(var(--muted-foreground));
}
`;

  fs.writeFileSync('dist-extension/styles.css', comprehensiveCSS);
  console.log(`✅ Created comprehensive CSS (${comprehensiveCSS.length} chars)`);
  cssFound = true;
}

// Create optimized popup.html
console.log('🔧 Creating optimized popup.html...');
const popupHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Octra Web Wallet</title>
    <link rel="stylesheet" href="styles.css">
    <style>
      /* Critical inline styles for immediate loading */
      body {
        width: 400px !important;
        height: 600px !important;
        margin: 0 !important;
        padding: 0 !important;
        overflow: hidden !important;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif !important;
      }
      
      #root {
        width: 100% !important;
        height: 100% !important;
      }
      
      .loading {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        height: 100vh !important;
        font-size: 14px !important;
        background: #f8fafc !important;
        color: #1e293b !important;
      }
      
      .dark .loading {
        background: #0f172a !important;
        color: #f8fafc !important;
      }
    </style>
  </head>
  <body>
    <div id="root">
      <div class="loading">Loading Octra Wallet...</div>
    </div>
    <script type="module" src="popup.js"></script>
  </body>
</html>`;

fs.writeFileSync('dist-extension/popup.html', popupHtml);
console.log('✅ Created optimized popup.html');

// Verify final structure
console.log('\n📁 Final extension structure:');
listFiles('dist-extension');

console.log('\n✅ Chrome extension built successfully!');
console.log('📁 Extension files are in the "dist-extension" directory');
console.log('');
console.log('🔧 To install the extension:');
console.log('1. Open Chrome and go to chrome://extensions/');
console.log('2. Enable "Developer mode" in the top right');
console.log('3. Click "Load unpacked" and select the "dist-extension" folder');
console.log('4. The Octra Web Wallet extension should now appear in your extensions');
console.log('');
console.log('🎉 CSS loading has been optimized and should work now!');