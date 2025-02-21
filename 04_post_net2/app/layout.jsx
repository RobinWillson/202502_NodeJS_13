import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/theme/theme';
import Navbar from './components/Navbar';
import React from 'react';
import { Box, Container } from '@mui/material';

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
              <Box sx={ {
                display: 'flex',
                flexDirection: 'column',
                // justifyContent: "center",
                // justifyContent: "space-between",
                alignItems: 'center',
                height: '100vh',
              } }>
                <Navbar />
                { children }
              </Box>
            </AppRouterCacheProvider>
          </body >
        </html>
      </>
    </ThemeProvider>
  );
}
