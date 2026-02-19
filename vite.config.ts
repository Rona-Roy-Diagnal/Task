import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server:{
  //   proxy:{
  //     "/api":{
  //       target:"https://api-entertainment-v1.enlight.diagnal.com",
  //       changeOrigin:true,
  //       secure:true,
  //       rewrite:(path)=>path.replace(/^\/api/,""),
  //     },
  //   },
  // },
})
