import React from 'react';
import { Bag, Massage, Notification, Profile } from '@/icons';
import { IconButton, Stack } from '@mui/material';
export default function Icons() {
  const icons = [
    {
      icon: <Bag />,
    },
    {
      icon: <Massage />,
    },
    {
      icon: <Notification />,
    },
    {
      icon: <Profile />,
    },
  ];
  return (
    <Stack
      flexWrap={'wrap'}
      justifyContent={'center'}
      alignItems={'center'}
      gap='32px'
      direction={'row'}
    >
      {icons.map((item, index) => (
        <IconButton key={index}>{item.icon}</IconButton>
      ))}
    </Stack>
  );
}
