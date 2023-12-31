'use client';
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';

function StackInfo() {
  const react = useRef(null);
  const isReactView = useInView(react);
  const next = useRef(null);
  const isNextView = useInView(next);
  const typescript = useRef(null);
  const isTypescriptView = useInView(typescript);
  const reactnative = useRef(null);
  const isReactnativeView = useInView(reactnative);
  const python = useRef(null);
  const isPythonView = useInView(python);
  const cypress = useRef(null);
  const isCypressView = useInView(cypress);

  const { scrollYProgress } = useScroll();
  const rotation = useTransform(scrollYProgress, (val) => val * 360);
  const smoothRotation = useSpring(rotation, { stiffness: 400, damping: 90 });

  return (
    <>
      <div className='w-screen h-screen flex flex-row items-center justify-evenly'>
        <motion.div
          ref={react}
          style={{ rotate: isReactView ? smoothRotation : 'none' }}
          className='w-[250px] h-[250px] mb:w-[150px] mb:h-[150px]'
        >
          <Image
            src='/images/reactIcon.png'
            alt='React Icon'
            width={250}
            height={250}
            className='w-[250px] h-[250px] mb:w-[150px] mb:h-[150px]'
          />
        </motion.div>
        <div className='w-[300px] mb:w-[170px]'>
          <h1 className='text-6xl font-bold leading-normal mb:text-2xl'>
            React
          </h1>
          <h2 className='text-gray-500 text-xl leading-normal mb:text-sm'>
            Utilizing the features of the virtual DOM, I harness the benefits of
            efficient rendering.
          </h2>
          <h2 className='text-gray-500 text-xl leading-normal mb:text-sm'>
            Additionally, leveraging the extensive ecosystem, I am able to
            extend projects seamlessly.
          </h2>
        </div>
      </div>
      <div className='w-screen h-screen  flex flex-col gap-6 items-center'>
        <motion.div
          ref={next}
          animate={{ scale: isNextView ? [0, 0.5, 1] : 'none' }}
          className='w-[250px] h-[250px] mb:w-[200px] mb:h-[200px]'
        >
          <Image
            src='/images/nextIcon.png'
            alt='Next Icon'
            width={250}
            height={250}
            className='w-[250px] h-[250px] mb:w-[200px] mb:h-[200px]'
          />
        </motion.div>
        <div className='w-[300px] text-center'>
          <h1 className='text-6xl font-bold leading-normal mb:text-4xl'>
            Next
          </h1>
          <h2 className='text-gray-500 text-xl leading-normal mb:text-lg'>
            Dynamic routing allows for straightforward implementation of pages,
            and it enables the differentiation and utilization of server
            components and client components.
          </h2>
        </div>
      </div>
      <div className='w-screen h-screen flex flex-row items-center justify-evenly'>
        <motion.div
          ref={typescript}
          animate={{
            translateX: isTypescriptView ? ['-100px', '10px', '0px'] : 'none',
          }}
          className='w-[250px] h-[250px] mb:w-[100px] mb:h-[100px]'
        >
          <Image
            src='/images/typescriptIcon.png'
            alt='Typescript Icon'
            width={250}
            height={250}
            className='w-[250px] h-[250px]  mb:w-[100px] mb:h-[100px]'
          />
        </motion.div>
        <div className='w-[300px] mb:w-[170px]'>
          <h1 className='text-6xl font-bold leading-normal mb:text-2xl'>
            Typescript
          </h1>
          <h2 className='text-gray-500 text-xl leading-normal mb:text-sm'>
            Enhancing clarity in API communication, I've reduced errors by
            enforcing precise data type specifications.
          </h2>
          <h2 className='text-gray-500 text-xl leading-normal mb:text-sm'>
            Additionally, I've improved transparency by explicitly declaring
            data types for data transfers between components.
          </h2>
        </div>
      </div>
      <div className='w-screen h-screen flex flex-row items-center justify-evenly'>
        <motion.div
          ref={reactnative}
          animate={{
            translateX: isReactnativeView ? ['-100px', '10px', '0px'] : 'none',
          }}
          className='w-[250px] h-[250px] mb:w-[80px] mb:h-[80px]'
        >
          <Image
            src='/images/androidIcon.png'
            alt='Android Icon'
            width={250}
            height={250}
            className='w-[250px] h-[250px] mb:w-[80px] mb:h-[80px]'
          />
        </motion.div>
        <div className='w-[300px] mb:w-[160px]'>
          <h1 className='text-6xl font-bold leading-normal mb:text-2xl'>
            React Native
          </h1>
          <h2 className='text-gray-500 text-xl leading-normal mb:text-sm'>
            Utilizing React syntax, it's possible to extend the service into a
            mobile app.
          </h2>
        </div>
        <motion.div
          ref={reactnative}
          animate={{
            translateX: isReactnativeView ? ['100px', '-10px', '0px'] : 'none',
          }}
          className='w-[250px] h-[250px] mb:w-[80px] mb:h-[80px]'
        >
          <Image
            src='/images/swiftIcon.png'
            alt='Android Icon'
            width={250}
            height={250}
            className='w-[250px] h-[250px] mb:w-[80px] mb:h-[80px]'
          />
        </motion.div>
      </div>
      <div className='w-screen h-screen flex flex-row justify-evenly items-center'>
        <div className='w-[300px] mb:w-[170px]'>
          <h1 className='text-6xl font-bold leading-normal  mb:text-2xl'>
            Python
          </h1>
          <h2 className='text-gray-500 text-xl leading-normal  mb:text-sm'>
            I can quickly approach solutions to algorithmic problems by
            leveraging Python libraries.
          </h2>
        </div>
        <motion.div
          ref={python}
          animate={{
            translateX: isPythonView ? ['100px', '-10px', '0px'] : 'none',
          }}
          className='w-[250px] h-[250px] mb:w-[100px] mb:h-[100px]'
        >
          <Image
            src='/images/pythonIcon.png'
            alt='React Icon'
            width={250}
            height={250}
            className='w-[250px] h-[250px] mb:w-[100px] mb:h-[100px]'
          />
        </motion.div>
      </div>
      <div className='w-screen h-screen flex flex-col justify-center gap-6 items-center'>
        <motion.div
          ref={cypress}
          animate={{
            translateY: isCypressView ? ['-200px', '10px', '0px'] : 'none',
          }}
          className='w-[250px] h-[250px]  mb:w-[150px] mb:h-[150px]'
        >
          <Image
            src='/images/playwrightIcon.png'
            alt='Cypress Icon'
            width={250}
            height={250}
            className='w-[250px] h-[250px]  mb:w-[150px] mb:h-[150px]'
          />
        </motion.div>
        <div className='w-[300px] text-center'>
          <h1 className='text-6xl font-bold leading-normal mb:text-4xl'>
            Playwright
          </h1>
          <h2 className='text-gray-500 text-xl leading-normal mb:text-lg'>
            Using Playwright, I can conduct precise verification of each
            function and feature through testing.
          </h2>
        </div>
      </div>
    </>
  );
}

export default StackInfo;
