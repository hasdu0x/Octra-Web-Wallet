import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../polyfills';
import ExtensionApp from './ExtensionApp';
import '../index.css';

// Debug function to check CSS loading
const debugCSS = () => {
  console.log('🔍 Debugging CSS loading...');
  
  // Check if CSS file is loaded
  const cssLinks = document.querySelectorAll('link[rel="stylesheet"]');
  console.log('CSS links found:', cssLinks.length);
  cssLinks.forEach((link, index) => {
    console.log(`CSS ${index + 1}:`, link.getAttribute('href'));
  });
  
  // Check if styles are applied
  const body = document.body;
  const computedStyle = window.getComputedStyle(body);
  console.log('Body background:', computedStyle.backgroundColor);
  console.log('Body font-family:', computedStyle.fontFamily);
  
  // Check if CSS variables are available
  const rootStyle = window.getComputedStyle(document.documentElement);
  console.log('CSS variable --background:', rootStyle.getPropertyValue('--background'));
};

// Remove loading indicator once React app is ready
const removeLoading = () => {
  const loadingEl = document.querySelector('.loading');
  if (loadingEl) {
    loadingEl.remove();
    console.log('✅ Loading indicator removed');
  }
};

// Ensure DOM is ready and CSS is loaded
const initApp = () => {
  console.log('🚀 Initializing extension app...');
  
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error('❌ Root element not found');
    return;
  }

  // Debug CSS loading
  debugCSS();

  // Clear any existing content
  rootElement.innerHTML = '';

  try {
    // Create React root and render app
    const root = createRoot(rootElement);
    root.render(
      <StrictMode>
        <ExtensionApp />
      </StrictMode>
    );
    
    console.log('✅ React app rendered');

    // Remove loading indicator after a short delay
    setTimeout(() => {
      removeLoading();
      // Debug again after React renders
      setTimeout(debugCSS, 100);
    }, 100);
    
  } catch (error) {
    console.error('❌ Error rendering React app:', error);
    
    // Fallback: show error message
    rootElement.innerHTML = `
      <div style="padding: 20px; text-align: center; font-family: Arial, sans-serif;">
        <h3 style="color: #dc2626;">Extension Error</h3>
        <p>Failed to load the wallet interface.</p>
        <p style="font-size: 12px; color: #666;">${error.message}</p>
      </div>
    `;
  }
};

// Wait for CSS to load before initializing
const waitForCSS = () => {
  const cssLink = document.querySelector('link[href="styles.css"]');
  
  if (cssLink) {
    cssLink.addEventListener('load', () => {
      console.log('✅ CSS loaded successfully');
      initApp();
    });
    
    cssLink.addEventListener('error', () => {
      console.warn('⚠️ CSS failed to load, proceeding anyway');
      initApp();
    });
    
    // Fallback timeout
    setTimeout(() => {
      console.log('⏰ CSS load timeout, proceeding anyway');
      initApp();
    }, 2000);
  } else {
    console.warn('⚠️ CSS link not found, proceeding anyway');
    initApp();
  }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', waitForCSS);
} else {
  waitForCSS();
}