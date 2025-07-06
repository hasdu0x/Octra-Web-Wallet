import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../polyfills';
import ExtensionApp from './ExtensionApp';

// Import CSS directly in the component
const cssContent = `
/* Octra Web Wallet Extension Styles */
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
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
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

/* Utility classes */
.min-h-screen { min-height: 100vh; }
.w-full { width: 100%; }
.h-full { height: 100%; }
.h-3 { height: 0.75rem; }
.h-4 { height: 1rem; }
.h-6 { height: 1.5rem; }
.h-8 { height: 2rem; }
.w-3 { width: 0.75rem; }
.w-4 { width: 1rem; }
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

.space-x-1 > * + * { margin-left: 0.25rem; }
.space-x-2 > * + * { margin-left: 0.5rem; }
.space-y-2 > * + * { margin-top: 0.5rem; }
.space-y-3 > * + * { margin-top: 0.75rem; }
.gap-1 { gap: 0.25rem; }
.gap-2 { gap: 0.5rem; }

.p-1 { padding: 0.25rem; }
.p-2 { padding: 0.5rem; }
.p-3 { padding: 0.75rem; }
.px-2 { padding-left: 0.5rem; padding-right: 0.5rem; }
.py-1 { padding-top: 0.25rem; padding-bottom: 0.25rem; }
.mt-2 { margin-top: 0.5rem; }
.mt-3 { margin-top: 0.75rem; }
.mr-1 { margin-right: 0.25rem; }

.text-xs { font-size: 0.75rem; line-height: 1rem; }
.text-sm { font-size: 0.875rem; line-height: 1.25rem; }
.text-2xl { font-size: 1.5rem; line-height: 2rem; }
.font-medium { font-weight: 500; }
.font-bold { font-weight: 700; }
.text-center { text-align: center; }
.text-muted-foreground { color: hsl(var(--muted-foreground)); }
.text-primary { color: hsl(var(--primary)); }
.text-red-600 { color: rgb(220 38 38); }

.bg-white { background-color: hsl(var(--background)); }
.bg-muted { background-color: hsl(var(--muted)); }
.bg-primary { background-color: hsl(var(--primary)); }
.bg-gradient-to-br { background-image: linear-gradient(to bottom right, var(--tw-gradient-stops)); }
.from-slate-50 { --tw-gradient-from: #f8fafc; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(248, 250, 252, 0)); }
.to-slate-100 { --tw-gradient-to: #f1f5f9; }
.dark .from-slate-900 { --tw-gradient-from: #0f172a; }
.dark .to-slate-800 { --tw-gradient-to: #1e293b; }
.backdrop-blur-sm { backdrop-filter: blur(4px); }

.border { border-width: 1px; border-style: solid; }
.border-b { border-bottom-width: 1px; border-bottom-style: solid; }
.rounded { border-radius: 0.25rem; }
.rounded-md { border-radius: calc(var(--radius) - 2px); }

/* Cards */
.card {
  background: hsl(var(--card));
  color: hsl(var(--card-foreground));
  border-radius: var(--radius);
  border: 1px solid hsl(var(--border));
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
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

/* Input styles */
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

/* Dark mode adjustments */
.dark .bg-white { background-color: hsl(var(--card)); }
.dark .text-muted-foreground { color: hsl(var(--muted-foreground)); }

/* Focus states */
.hover\\:bg-accent:hover { background-color: hsl(var(--accent)); }
.hover\\:text-accent-foreground:hover { color: hsl(var(--accent-foreground)); }
.focus-visible\\:outline-none:focus-visible { outline: 2px solid transparent; outline-offset: 2px; }
.focus-visible\\:ring-1:focus-visible { box-shadow: 0 0 0 1px hsl(var(--ring)); }
`;

// Inject CSS directly into the document
const injectCSS = () => {
  const style = document.createElement('style');
  style.textContent = cssContent;
  document.head.appendChild(style);
  console.log('✅ CSS injected directly into document');
};

// Remove loading indicator
const removeLoading = () => {
  const loadingEl = document.querySelector('.loading');
  if (loadingEl) {
    loadingEl.remove();
    console.log('✅ Loading indicator removed');
  }
};

// Initialize the app
const initApp = () => {
  console.log('🚀 Initializing extension app...');
  
  // Inject CSS first
  injectCSS();
  
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error('❌ Root element not found');
    return;
  }

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
    setTimeout(removeLoading, 100);
    
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

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}