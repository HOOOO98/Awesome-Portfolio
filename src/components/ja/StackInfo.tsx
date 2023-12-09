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
          className='w-[250px] h-[250px]'
        >
          <Image
            src='/images/reactIcon.png'
            alt='React Icon'
            width={250}
            height={250}
            className='w-[250px] h-[250px]'
          />
        </motion.div>
        <div className='w-[300px]'>
          <h1 className='text-6xl font-bold leading-normal'>React</h1>
          <h2 className='text-gray-500 text-xl leading-normal'>
            仮想 DOM の機能を利用して、次のメリットを活用します
            効率的なレンダリング。
          </h2>
          <h2 className='text-gray-500 text-xl leading-normal'>
            さらに、広範囲なエコシステムを活用することで
            プロジェクトをシームレスに拡張する。
          </h2>
        </div>
      </div>
      <div className='w-screen h-screen  flex flex-col gap-6 items-center'>
        <motion.div
          ref={next}
          animate={{ scale: isNextView ? [0, 0.5, 1] : 'none' }}
          className='w-[250px] h-[250px]'
        >
          <Image
            src='/images/nextIcon.png'
            alt='Next Icon'
            width={250}
            height={250}
            className='w-[250px] h-[250px]'
          />
        </motion.div>
        <div className='w-[300px]'>
          <h1 className='text-6xl font-bold leading-normal'>Next</h1>
          <h2 className='text-gray-500 text-xl leading-normal'>
            動的ルーティングにより、ページを簡単に実装できます、
            サーバの差別化と利用を可能にします
            コンポーネントとクライアントコンポーネント。
          </h2>
        </div>
      </div>
      <div className='w-screen h-screen flex flex-row items-center justify-evenly'>
        <motion.div
          ref={typescript}
          animate={{
            translateX: isTypescriptView ? ['-400px', '10px', '0px'] : 'none',
          }}
          className='w-[250px] h-[250px]'
        >
          <Image
            src='/images/typescriptIcon.png'
            alt='Typescript Icon'
            width={250}
            height={250}
            className='w-[250px] h-[250px]'
          />
        </motion.div>
        <div className='w-[300px]'>
          <h1 className='text-6xl font-bold leading-normal'>Typescript</h1>
          <h2 className='text-gray-500 text-xl leading-normal'>
            API通信の明瞭性を高め、エラーを削減しました
            正確なデータ型の仕様を適用する。
          </h2>
          <h2 className='text-gray-500 text-xl leading-normal'>
            さらに、明示的に宣言することで透明性を向上させました
            コンポーネント間のデータ転送のためのデータ型。
          </h2>
        </div>
      </div>
      <div className='w-screen h-screen flex flex-row items-center justify-evenly'>
        <motion.div
          ref={reactnative}
          animate={{
            translateX: isReactnativeView ? ['-400px', '10px', '0px'] : 'none',
          }}
          className='w-[250px] h-[250px]'
        >
          <Image
            src='/images/androidIcon.png'
            alt='Android Icon'
            width={250}
            height={250}
            className='w-[250px] h-[250px]'
          />
        </motion.div>
        <div className='w-[300px] '>
          <h1 className='text-6xl font-bold leading-normal'>React Native</h1>
          <h2 className='text-gray-500 text-xl leading-normal'>
            React 構文を使用して、サービスを に拡張できます モバイルアプリ。
          </h2>
        </div>
        <motion.div
          ref={reactnative}
          animate={{
            translateX: isReactnativeView ? ['400px', '-10px', '0px'] : 'none',
          }}
          className='w-[250px] h-[250px]'
        >
          <Image
            src='/images/swiftIcon.png'
            alt='Android Icon'
            width={250}
            height={250}
            className='w-[250px] h-[250px]'
          />
        </motion.div>
      </div>
      <div className='w-screen h-screen flex flex-row justify-evenly items-center'>
        <div className='w-[300px]'>
          <h1 className='text-6xl font-bold leading-normal'>Python</h1>
          <h2 className='text-gray-500 text-xl leading-normal'>
            アルゴリズムの問題に対する解決策に素早くアプローチするには Python
            ライブラリの活用。
          </h2>
        </div>
        <motion.div
          ref={python}
          animate={{
            translateX: isPythonView ? ['200px', '-10px', '0px'] : 'none',
          }}
          className='w-[250px] h-[250px]'
        >
          <Image
            src='/images/pythonIcon.png'
            alt='React Icon'
            width={250}
            height={250}
            className='w-[250px] h-[250px]'
          />
        </motion.div>
      </div>
      <div className='w-screen h-screen flex flex-col justify-center gap-6 items-center'>
        <motion.div
          ref={cypress}
          animate={{
            translateY: isCypressView ? ['-200px', '10px', '0px'] : 'none',
          }}
          className='w-[250px] h-[250px]'
        >
          <Image
            src='/images/cypressIcon.png'
            alt='Cypress Icon'
            width={250}
            height={250}
            className='w-[250px] h-[250px]'
          />
        </motion.div>
        <div className='w-[300px]'>
          <h1 className='text-6xl font-bold leading-normal'>Cypress</h1>
          <h2 className='text-gray-500 text-xl leading-normal'>
            Cypressを使用して、各機能の正確な検証を行うこと
            そして、テストを通しての特徴。
          </h2>
        </div>
      </div>
    </>
  );
}

export default StackInfo;
