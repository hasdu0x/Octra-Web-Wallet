import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './polyfills';
import PopupApp from './PopupApp';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PopupApp />
  </StrictMode>
);