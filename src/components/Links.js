import { Stack } from '@mui/material';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';

export default function Links({ lang }) {
  const links = [
    { name: 'Home', val: `/${lang}` },
    { name: 'Products', val: `/${lang}/Products` },
    { name: 'Categories', val: `/${lang}/Categories` },
    { name: 'Offers', val: `/${lang}/Offers` },
    { name: 'Contact Us', val: `/${lang}/Contact-Us` },
  ];
  return (
    <Stack gap={{ xs: '20px', md: '10px' }} direction={{ md: 'row' }}>
      {links.map((item, index) => (
        <Link key={index} href={item.val}>
          {item.name}
        </Link>
      ))}
    </Stack>
  );
}
