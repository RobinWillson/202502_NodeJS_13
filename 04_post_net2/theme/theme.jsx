'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff8fab',
    },
  },
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
});

export default theme;
