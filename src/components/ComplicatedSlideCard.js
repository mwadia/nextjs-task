import React from 'react';
import Image from 'next/image';
import { Stack } from '@mui/material';

const ComplicatedSlideCard = ({ pic }) => {
  return (
    <Stack className='slide-complicated'>
      <Image src={pic} alt='' width={971} height={472} />
    </Stack>
  );
};

export default ComplicatedSlideCard;
