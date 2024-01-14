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
  const playwright = useRef(null);
  const isPlaywrightView = useInView(playwright);

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
            커스텀 훅을 분리하고 공통 컴포넌트를 통해 코드의 재사용성을 높힐 수
            있습니다
            <br />
            웹표준을 준수하여 코드를 작성하며 Lighthouse 점수를 고려합니다
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
            SEO 최적화와 서버컴포넌트를 사용하기 위해 App Router를 사용헀습니다
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
            컴파일 과정에서 타입을 확인하고 에러를 미리 확인할 수 있어 코드의
            안정성을 높일 수 있습니다
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
          <h1 className='text-6xl font-bold leading-normal mb:text-2xl text-center'>
            React
            <br />
            Native
          </h1>
          <h2 className='text-gray-500 text-xl leading-normal mb:text-sm'>
            JSX 문법을 기반으로 크로스 플랫폼 개발을 쉽게 시작할 수 있어
            채택했습니다
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
      <div className='w-screen h-screen flex flex-col justify-center gap-6 items-center'>
        <motion.div
          ref={playwright}
          animate={{
            translateY: isPlaywrightView ? ['-200px', '10px', '0px'] : 'none',
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
            크로스 브라우징에 대한 병렬 테스트를 간단히 수행할 수 있고
            <br />
            웹접근성에 대한 테스트를 수행할 수 있어서 사용했습니다
          </h2>
        </div>
      </div>
    </>
  );
}

export default StackInfo;
