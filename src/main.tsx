import App from '@/App.tsx';
import { DarkModeContextProvider } from '@/context/DarkModeContext';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </React.StrictMode>,
);
