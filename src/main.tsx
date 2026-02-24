/* eslint-disable @typescript-eslint/no-explicit-any */
// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// import axios from 'axios';
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// const _Ltracker:any[]=(window as any)._Ltracker||[];
// _Ltracker.push({
//     logglyKey:"3ccb1e03-2f39-4472-b3b2-84c06fd02f66",
//     tag:"tv-app"
// });
// (window as any)._Ltracker.push({
//   level:"info",
//   event:"smoke_test"
// })
createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <App />
  // </StrictMode>,
)
