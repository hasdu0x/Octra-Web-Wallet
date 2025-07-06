import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      buffer: 'buffer/',
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
          process: true,
        }),
      ],
    },
  },
  build: {
    outDir: 'dist-extension',
    rollupOptions: {
      input: {
        popup: path.resolve(__dirname, 'src/extension/popup.tsx'),
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: (assetInfo) => {
          // Ensure CSS files have predictable names
          if (assetInfo.name?.endsWith('.css')) {
            return 'popup.css'; // Put CSS directly in root, not in assets folder
          }
          return 'assets/[name].[ext]';
        },
      },
    },
    target: 'esnext',
    minify: false,
    cssCodeSplit: false, // Keep all CSS in one file
    assetsInlineLimit: 0, // Don't inline any assets
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  css: {
    postcss: {
      plugins: [],
    },
  },
});