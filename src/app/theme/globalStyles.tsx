import { GlobalStyles } from '@mui/material';

export const AppGlobalStyles = () => (
  <GlobalStyles
    styles={{
      '::selection': {
        backgroundColor: '#b53a32',
        color: '#ffffff',
      },
      body: {
        backgroundColor: '#f6f4ef',
      },
      '#root': {
        minHeight: '100vh',
        display: 'flex',
        width: '100%',
      },
      a: {
        textDecoration: 'none',
      },
      '.leaflet-container': {
        position: 'relative',
        width: '100%',
        height: '100%',
        borderRadius: 16,
        overflow: 'hidden',
        boxShadow: '0 20px 50px rgba(0,0,0,0.08)',
      },
      '.leaflet-pane': {
        zIndex: 1,
      },
      '.leaflet-tile': {
        position: 'absolute',
        top: 0,
        left: 0,
      },
      '.leaflet-top, .leaflet-bottom': {
        position: 'absolute',
        zIndex: 1000,
        pointerEvents: 'none',
      },
      '.leaflet-top': {
        top: 0,
      },
      '.leaflet-bottom': {
        bottom: 0,
      },
      '.leaflet-left': {
        left: 0,
      },
      '.leaflet-right': {
        right: 0,
      },
      '.leaflet-control': {
        pointerEvents: 'auto',
      },
      '.leaflet-control-zoom, .leaflet-bar': {
        borderRadius: 12,
        overflow: 'hidden',
        boxShadow: '0 10px 20px rgba(0,0,0,0.12)',
      },
      '.leaflet-bar a, .leaflet-bar a:hover': {
        backgroundColor: '#ffffff',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        color: '#222',
      },
    }}
  />
);
