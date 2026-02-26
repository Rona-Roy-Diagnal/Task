import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import babel from 'vite-plugin-babel';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  babel({
    babelConfig: {
      plugins: ['babel-plugin-react-compiler'],
    },
  }),],
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: 'inline',
    minify: true,
    cssMinify: true,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
        inlineDynamicImports: true,
        entryFileNames: `assets/scripts.js`,
        assetFileNames: `assets/styles.css`,
      },

    }
  }
})