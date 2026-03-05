// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import babel from "vite-plugin-babel";
// import legacy from "@vitejs/plugin-legacy";

// export default defineConfig({
//   base: "./",
//   plugins: [
//     react(),
//     babel({
//       babelConfig: {
//         presets: [["@babel/preset-env", { modules: false }]],
//         plugins: ["babel-plugin-react-compiler"],
//       },
//     }),
//     legacy({
//       renderModernChunks: false,
//       targets: ["chrome >= 53", "not dead"],
//       modernPolyfills: true,
//       renderLegacyChunks: true,
//       additionalLegacyPolyfills: [
//         "regenerator-runtime/runtime",
//         "core-js/modules/es.promise.js",
//         "core-js/modules/es.object.assign.js",
//         "core-js/modules/es.symbol.js",
//         "whatwg-fetch",
//       ],
//     }),
//   ],
//   build: {
//     outDir: "dist",
//     emptyOutDir: true,
//     sourcemap: "inline",
//     target: "es2015",
//     minify: "terser",
//     cssMinify: false,
//     cssCodeSplit: true,
//     rollupOptions: {
//       output: {
//         entryFileNames: "assets/[name].js",
//         chunkFileNames: "assets/[name]-[hash].js",
//         assetFileNames: `assets/styles.css`,
//       },
//     },
//   },
// });


// 
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
    minify: "terser",
  
    cssMinify: true,
    cssCodeSplit: true,
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