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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ExtensionApp />
  </StrictMode>
);

// Remove loading indicator after a short delay
setTimeout(removeLoading, 100);