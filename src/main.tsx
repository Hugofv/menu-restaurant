import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './i18n.ts'
import "react-responsive-modal/styles.css";
import RouteProvider from './providers/RouteProvider/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouteProvider>
      <App />
    </RouteProvider>
  </React.StrictMode>
)
