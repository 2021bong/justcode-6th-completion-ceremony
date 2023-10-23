import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/justcode-6th-completion-ceremony/',
  build: {
    chunkSizeWarningLimit: 1600,
    build: {
      outDir: '../dist',
    },
  },
});
