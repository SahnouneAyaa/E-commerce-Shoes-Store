import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Specify the output directory
    assetsInlineLimit: 0, // Disable asset size limit (to inline all assets)
    cssCodeSplit: true, // Enable CSS code splitting
    sourcemap: true, // Generate source maps
    minify: 'terser', // Minify code using Terser
  },
});
