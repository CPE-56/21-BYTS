import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: './src/presentation',
  base: './',
  build: {
    outDir: '../../dist',
    emptyOutDir: true,
    target: 'chrome106',
    rollupOptions: {
      input: path.resolve(__dirname, './src/presentation/renderer.js')
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  define: {
    'process.env': process.env
  }
});
