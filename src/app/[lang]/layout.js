import { Nav, NavLinks } from '@/components';
import { Box, Container, Divider, Stack } from '@mui/material';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import { dir } from 'i18next';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children, params }) {
  const { lang } = params;

  return (
    <html dir={dir(lang)} lang={lang}>
      <body dir={dir(lang)} className={inter.className}>
        <Nav lang={lang} />
        <Box sx={{ paddingX: '240px' }}>
          <Divider variant='middle' />
        </Box>

        <NavLinks lang={lang} />
        {children}
      </body>
    </html>
  );
}