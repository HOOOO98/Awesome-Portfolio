import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

import { images } from '@/utils/portfolioData';

function Carousel() {
  return (
    <div className='w-screen h-screen overflow-hidden flex items-center justify-center flex-col gap-12 bg-zinc-100 '>
      <div className='flex items-center justify-start flex-col gap-12'>
        <h1 className='text-6xl font-bold'>프로젝트</h1>
        <h2 className='text-3xl font-bold text-gray-400 mb:text-xl mb:text-center'>
          재밌어 보이는 것들을 하나씩 만들고 있습니다.
        </h2>
      </div>
      <Marquee className='flex' pauseOnHover={true} direction='left' speed={90}>
        {images.map((image, index) => (
          <a
            key={index}
            href={image.href}
            className='flex-shrink-0 relative'
            target='_blank'
            rel='noopener noreferrer '
          >
            <div className='w-[450px] h-[270px] bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0)] absolute flex flex-col justify-end items-start p-6 rounded-2xl'>
              <p className='text-gray-300 text-xs'>{image.title}</p>
              <p className='text-white font-bold'>{image.description}</p>
            </div>
            <Image
              alt={image.alt}
              width={450}
              height={270}
              src={image.src}
              className='rounded-2xl mr-12 w-[450px] h-[270px] object-cover '
            />
          </a>
        ))}
      </Marquee>
    </div>
  );
}

export default Carousel;
