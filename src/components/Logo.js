import { Avatar, Stack, Typography } from '@mui/material';
import React from 'react';

export default function Logo() {
  return (
    <Stack gap='10px' direction={'row'}>
      <Avatar
        sx={{ width: '48px', height: '48px' }}
        src='./images/logo.png'
        alt='logo'
      />
      <Typography
        sx={{
          color: ' #121212',
          fontSize: '32px',
          fontWeight: '500',
          letterspacing: '0.169px',
        }}
      >
        K STORE
      </Typography>
    </Stack>
  );
}
