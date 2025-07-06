import fs from 'fs';
import path from 'path';

// Create public/icons directory if it doesn't exist
const iconsDir = 'public/icons';
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Icon sizes for Chrome extension
const sizes = [16, 32, 48, 128];

// Create SVG icons for each size
sizes.forEach(size => {
  const svgContent = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <circle cx="${size/2}" cy="${size/2}" r="${size/2 - 2}" fill="none" stroke="#3b82f6" stroke-width="4"/>
  <circle cx="${size/2}" cy="${size/2}" r="${size/4}" fill="#3b82f6"/>
</svg>`;
  
  const filePath = path.join(iconsDir, `icon${size}.svg`);
  fs.writeFileSync(filePath, svgContent);
  console.log(`✅ Created icon${size}.svg`);
});

console.log('🎨 All extension icons created successfully!');