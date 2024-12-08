import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Relative paths for assets
  server: {
    host: '0.0.0.0', 
  },
});