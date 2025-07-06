import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../polyfills';
import ExtensionApp from './ExtensionApp';
import '../index.css';

// Remove loading indicator once React app is ready
const removeLoading = () => {
  const loadingEl = document.querySelector('.loading');
  if (loadingEl) {
    loadingEl.remove();
  }
};

// Ensure DOM is ready
const initApp = () => {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error('Root element not found');
    return;
  }

  // Clear any existing content
  rootElement.innerHTML = '';

  // Create React root and render app
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <ExtensionApp />
    </StrictMode>
  );

  // Remove loading indicator after a short delay
  setTimeout(removeLoading, 100);
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}