import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use relative base path so the build works anywhere (e.g. GitHub Pages, custom domain, subpaths)
  base: './',
  server: {
    port: 3000,
    open: true
  }
});
