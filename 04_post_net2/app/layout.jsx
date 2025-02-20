import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/theme/theme';
import Navbar from './components/Navbar';
import React from 'react';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});


export default function RootLayout(props) {
  const { children } = props;
  return (
    <ThemeProvider theme={ theme }>

      <>
        <html lang="en">
          <body style={ { margin: 0, padding: 0 } }>
            <AppRouterCacheProvider options={ { enableCssLayer: true } }>
              <Navbar />
              { children }
            </AppRouterCacheProvider>
          </body >
        </html>
      </>
    </ThemeProvider>
  );
}
