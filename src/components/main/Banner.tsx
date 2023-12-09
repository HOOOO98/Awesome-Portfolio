'use client';
import { motion } from 'framer-motion';
import React from 'react';

function Banner() {
  return (
    <div className='relative h-[100vh-7rem]'>
      <section
        className='flex justify-center items-center w-screen z-10'
        style={{ height: 'calc(100vh - 7rem)' }}
      >
        <motion.div
          className='text-[11rem] font-black tracking-wider z-10'
          initial={{
            transform: 'scale(10)',
            opacity: 0,
          }}
          animate={{
            transform: 'scale(1)',
            opacity: [0, 0.5, 1],
          }}
          transition={{
            duration: 3,
            ease: 'easeInOut',
          }}
        >
          DEVSTEP
        </motion.div>
      </section>
      <div className='w-screen absolute top-0 left-0 flex flex-col h-full z-0'>
        <motion.div
          className='text-white text-[6rem] font-black tracking-wider drop-shadow-lg absolute top-[10%] left-[5%]'
          initial={{
            transform: 'translateX(-200px)',
            opacity: 0,
          }}
          animate={{
            transform: 'translateX(0px)',
            opacity: 1,
          }}
          transition={{
            duration: 4.5,
            delay: 1.5,
            ease: 'easeInOut',
          }}
        >
          MAKE SOMETHING GOOD
        </motion.div>
        <motion.div
          className='text-white text-[6rem] font-black tracking-wider absolute right-[5%] bottom-[15%] drop-shadow-lg'
          initial={{
            transform: 'translateX(200px)',
            opacity: 0,
          }}
          animate={{
            transform: 'translateX(0px)',
            opacity: 1,
          }}
          transition={{
            duration: 4.5,
            delay: 1.5,
            ease: 'easeInOut',
          }}
        >
          DAY BY DAY
        </motion.div>
      </div>
    </div>
  );
}

export default Banner;
