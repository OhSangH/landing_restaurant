import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#b53a32',
    },
    secondary: {
      main: '#f0a202',
    },
    background: {
      default: '#f6f4ef',
      paper: '#ffffff',
    },
    text: {
      primary: '#222222',
      secondary: '#4a4a4a',
    },
  },
  typography: {
    fontFamily: '"Pretendard", "Noto Sans KR", "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontSize: '2.75rem',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '2.1rem',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontSize: '1.6rem',
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: '1.05rem',
      lineHeight: 1.5,
      color: '#4a4a4a',
    },
    button: {
      fontWeight: 700,
      textTransform: 'none',
      letterSpacing: 0,
    },
  },
  shape: {
    borderRadius: 14,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 999,
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'xl',
      },
    },
  },
});

export default theme;
