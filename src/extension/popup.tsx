import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../polyfills';
import ExtensionApp from './ExtensionApp';
import '../index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ExtensionApp />
  </StrictMode>
);