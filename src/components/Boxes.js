import { Stack } from '@mui/material';
import Image from 'next/image';
import React from 'react';

export default function Boxes() {
  return (
    <Stack direction={{ sm: 'column', md: 'row' }} gap='10px' mt={20}>
      <Stack maxWidth={'100%'}>
        <Image
          src='/images/1.png'
          maxWidth='100%'
          width={575}
          height={611}
          objectFit='cover'
          alt=''
        />
      </Stack>
      <Stack gap='20px' maxWidth={'100%'}>
        <Image
          src='/images/2.png'
          maxWidth='100%'
          width={575}
          height={295}
          objectFit='cover'
          alt=''
        />
        <Image
          src='/images/3.png'
          maxWidth='100%'
          width={575}
          height={295}
          objectFit='cover'
          alt=''
        />
      </Stack>
    </Stack>
  );
}
