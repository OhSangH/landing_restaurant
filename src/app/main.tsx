import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import theme from './theme/theme';
import { AppGlobalStyles } from './theme/globalStyles';
import '../styles/reset.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppGlobalStyles />
        <App />
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>,
);
