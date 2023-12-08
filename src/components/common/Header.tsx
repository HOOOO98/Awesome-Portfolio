'use client';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <>
      <AnimatePresence>
        <motion.div
          className='w-screen flex flex-row justify-between p-6 items-baseline'
          initial={{
            transform: 'translateY(-80px)',
            opacity: 0,
          }}
          animate={{
            transform: 'translateY(0px)',
            opacity: [0, 0.5, 1],
          }}
          transition={{
            duration: 2,
            delay: 1,
            ease: 'easeInOut',
          }}
        >
          <Link href='/'>
            <Image
              src='/images/loadingLogo.jpeg'
              width={50}
              height={50}
              className='w-[50px] h-[50px] rounded'
              alt='DevStep Logo'
            />
          </Link>
          <ul className='flex flex-row gap-6'>
            <li>
              <a
                href='https://github.com/HOOOO98'
                target='_blank'
                rel='noreferrer'
              >
                <Image
                  src='/images/githubLogo.png'
                  width={30}
                  height={30}
                  className='w-[30px] h-[30px]'
                  alt='Github Logo'
                />
              </a>
            </li>
            <li>
              <a
                href='https://0and1.tistory.com/'
                target='_blank'
                rel='noreferrer'
              >
                <Image
                  src='/images/blogLogo.png'
                  width={30}
                  height={30}
                  className='w-[30px] h-[30px]'
                  alt='Blog Logo'
                />
              </a>
            </li>
          </ul>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default Header;
