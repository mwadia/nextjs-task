import { Container } from '@mui/material';
import React from 'react';

export default function ContainerBox({ children }) {
  return (
    <Container sx={{ padding: '24px' }} maxWidth='lg'>
      {children}
    </Container>
  );
}
