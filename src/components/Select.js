'use client';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Link from 'next/link';
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';

export default function SelectVariants({
  option,
  defValue,
  value,
  setValue,
  isLang,
}) {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
        <Select
          labelId='demo-simple-select-standard-label'
          id='demo-simple-select-standard'
          value={value}
          onChange={handleChange}
          defaultValue={defValue}
        >
          {isLang
            ? option.map((item, index) => (
                <MenuItem key={index} value={item.value}>
                  <Link style={{ width: '100%' }} href={`/${item.value}`}>
                    <Stack gap='10px' direction={'row'}>
                      <img
                        style={{ width: '32px', height: '22px' }}
                        src={item.flag}
                        alt='flag'
                      />
                      <Typography>{item.name}</Typography>
                    </Stack>
                  </Link>
                </MenuItem>
              ))
            : option.map((item, index) => (
                <MenuItem key={index} value={item.value}>
                  {item.name}
                </MenuItem>
              ))}
        </Select>
      </FormControl>
    </div>
  );
}
