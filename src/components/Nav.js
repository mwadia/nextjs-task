'use client';

import { Divider, Stack } from '@mui/material';
import React from 'react';
import Logo from './Logo';
import Search from './Search';
import ContainerBox from '../../Continer';
import SelectVariants from './Select';
import TemporaryDrawer from './Drower';

export default function Nav({ lang }) {
  const langs = [
    {
      name: 'English',
      value: 'en',
      flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png',
    },
    {
      name: 'Arabic',
      value: 'ar',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Palestine.svg/1200px-Flag_of_Palestine.svg.png',
    },
  ];
  const carenses = [
    { name: 'USD', value: 'USD' },
    { name: 'UORO', value: 'OR' },
  ];
  const [value, setValue] = React.useState(lang);
  const [carensy, setCarensy] = React.useState('USD');
  lang = 'de';
  return (
    <ContainerBox>
      <Stack justifyContent={'space-between'} direction={'row'}>
        <Stack
          gap='10px'
          justifyContent={'space-between'}
          alignItems={'center'}
          direction={'row'}
          flexWrap={'wrap'}
          width={'100%'}
        >
          <Logo />
          <Search />
          <Stack direction={'row'}>
            <SelectVariants
              value={value}
              isLang
              setValue={setValue}
              defValue={lang}
              option={langs}
            />
            <SelectVariants
              value={carensy}
              setValue={setCarensy}
              defValue={'USD'}
              option={carenses}
            />
          </Stack>
        </Stack>
        <Stack mt='8px' display={{ xs: 'block', md: 'none' }}>
          <TemporaryDrawer />
        </Stack>
      </Stack>
    </ContainerBox>
  );
}
