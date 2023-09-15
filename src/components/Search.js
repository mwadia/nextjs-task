import { Box, TextField } from '@mui/material';
import React from 'react';
import { Search } from '../icons';
export default function SearchInput() {
  return (
    <Box
      position={'relative'}
      sx={{
        borderRadius: '25px',
        border: ' 1px solid rgba(114, 107, 207, 0.20)',
        width: ' 344px',
        height: '40px',
      }}
    >
      {' '}
      <input
        style={{
          borderRadius: '25px',
          border: ' 1px solid rgba(114, 107, 207, 0.20)',
          width: ' 344px',
          height: '40px',
          padding: '0',
        }}
        type='text'
      />
      <Box sx={{ right: '10px', top: '11px' }} position={'absolute'}>
        <Search />
      </Box>
    </Box>
  );
}
