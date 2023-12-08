import Link from 'next/link';
import React from 'react';

import { dateFunc } from '@/utils/date';

function Footer() {
  return (
    <footer className='w-screen flex flex-row p-6 justify-between h-20 '>
      <p className='text-[14px]'>©{dateFunc.thisYear()} DEVSTEP</p>
      <Link href='/' className='text-[14px]'>
        HOME
      </Link>
    </footer>
  );
}

export default Footer;
