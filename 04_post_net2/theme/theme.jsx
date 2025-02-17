'use client';
import { createTheme, alpha, getContrastRatio } from '@mui/material/styles';
const salmonBase = '#c5040d';
const theme = createTheme({
  palette: {
    // 修改預設顏色
    primary: {
      main: '#ff8fab',
    },
    // 自行客製化的顏色
    ochre: {
      main: '#E3D026',
      light: '#E9DB5D',
      dark: '#A29415',
      contrastText: '#242105',
    },
    // 設定一個主色調
    salmon: {
      main: alpha(salmonBase, 0.7),
      light: alpha(salmonBase, 0.5),
      dark: alpha(salmonBase, 0.9),
      contrastText: getContrastRatio(salmonBase, '#fff') > 4.5 ? '#fff' : '#111'
    },
  },
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
});

export default theme;
