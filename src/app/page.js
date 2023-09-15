'use client';
import React, { useEffect } from 'react';
import { redirect, usePathname, useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    if (pathname === '/') {
      router.push('en');
    }
  }, []);
  return <div></div>;
}
