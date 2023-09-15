import React from 'react';
import Links from './Links';
import ContainerBox from '../../Continer';
import Icons from './Icons';
import { Stack } from '@mui/material';

export default function NavLinks({ lang }) {
  return (
    <ContainerBox>
      <Stack display={{ xs: 'none', md: 'block' }}>
        <Stack
          alignItems={'center'}
          padding='24px'
          justifyContent={'space-between'}
          direction={'row'}
        >
          <Links lang={lang} />
          <Icons />
        </Stack>
      </Stack>
    </ContainerBox>
  );
}
