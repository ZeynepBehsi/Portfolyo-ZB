import { createTheme } from '@mui/material/styles';

const SR = "'Sora', sans-serif";

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1a152e',
      light: '#2d2840',
      dark: '#13102a',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#82b440',
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#1a152e',
      secondary: '#6b6880',
    },
    divider: '#e4e4ea',
  },
  typography: {
    fontFamily: SR,
    fontSize: 16,
    h1: { fontFamily: SR, fontWeight: 800, letterSpacing: '-0.03em' },
    h2: { fontFamily: SR, fontWeight: 700, letterSpacing: '-0.02em' },
    h3: { fontFamily: SR, fontWeight: 700, letterSpacing: '-0.01em' },
    h4: { fontFamily: SR, fontWeight: 600 },
    h5: { fontFamily: SR, fontWeight: 600 },
    h6: { fontFamily: SR, fontWeight: 600 },
    subtitle1: { fontFamily: SR, fontSize: '1.05rem',  lineHeight: 1.65 },
    subtitle2: { fontFamily: SR, fontSize: '0.95rem',  lineHeight: 1.6, fontWeight: 600 },
    body1:     { fontFamily: SR, fontSize: '1rem',     lineHeight: 1.85, fontWeight: 400 },
    body2:     { fontFamily: SR, fontSize: '0.9rem',   lineHeight: 1.75, fontWeight: 400 },
    caption:   { fontFamily: SR, fontSize: '0.8rem',   lineHeight: 1.55 },
    overline:  { fontFamily: SR, fontSize: '0.72rem',  letterSpacing: '0.14em', fontWeight: 600 },
    button:    { fontFamily: SR, fontWeight: 600, letterSpacing: '0.02em' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
          borderRadius: 9999,
          fontWeight: 600,
          fontFamily: SR,
          padding: '12px 32px',
          letterSpacing: '0.06em',
          fontSize: '0.8rem',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': { boxShadow: 'none' },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          boxShadow: '0 2px 12px rgba(26, 21, 46, 0.07)',
          backgroundColor: '#ffffff',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: { boxShadow: 'none' },
      },
    },
  },
});

export default theme;
