import React from 'react';

import { dateFunc } from '@/utils/date';

function Footer() {
  return (
    <footer className='w-screen flex p-6 justify-center h-20 '>
      <p className='text-[14px]'>©{dateFunc.thisYear()} DEVSTEP</p>
    </footer>
  );
}

export default Footer;
