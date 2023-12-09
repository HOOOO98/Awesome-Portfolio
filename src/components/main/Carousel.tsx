import Image from 'next/image';
import React, { useMemo } from 'react';
import Marquee from 'react-fast-marquee';

function Carousel() {
  const images = useMemo(
    () => [
      {
        title: 'AZKABAN',
        description: 'Practicing HTML, CSS, JS with Firebase',
        href: 'https://azkaban-bef73.firebaseapp.com/',
        src: '/images/azkabanThumbnail.png',
        alt: 'azkaban site Screenshot',
      },
      {
        title: 'SKIPAD',
        description: 'This app makes you FREE!! from youtube ADs',
        href: 'https://chromewebstore.google.com/detail/skipad/ilobgbpbfgcffkblhhekdnigpainilnj?hl=ko',
        src: '/images/skipadThumbnail.png',
        alt: 'Azkaban site Screenshot',
      },
      {
        title: 'FASTUDY',
        description: 'Join or build your dream team today!',
        href: 'https://2weeks-team-mzbe-c7xmzksqc-2weeks.vercel.app/',
        src: '/images/fastudyThumbnail.png',
        alt: 'Toy project 2 site Screenshot',
      },
      {
        title: 'Sweety',
        description: 'make your day more sweet!',
        href: 'https://sweety-pink.vercel.app/',
        src: '/images/sweetyThumbnail.png',
        alt: 'Toy project 1 site Screenshot',
      },
      {
        title: 'STAYINN',
        description: 'Discover and Reserve Your Stay',
        href: 'https://www.stayinn.site/',
        src: '/images/stayinnThumbnail.png',
        alt: 'Mini project site Screenshot',
      },
    ],
    [],
  );

  return (
    <div className='w-screen h-screen overflow-hidden flex items-center justify-center flex-col gap-12 bg-zinc-100 '>
      <div className='flex items-center justify-start flex-col gap-12'>
        <h1 className='text-6xl font-bold'>Inspire</h1>
        <h2 className='text-3xl font-bold text-gray-400'>
          All that surrounds me is a wellspring of inspiration.
        </h2>
      </div>
      <Marquee className='flex' pauseOnHover={true} direction='left' speed={40}>
        {images.map((image, index) => (
          <a
            key={index}
            href={image.href}
            className='flex-shrink-0 relative'
            target='_blank'
            rel='noopener noreferrer'
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
              className='rounded-2xl mr-12 w-[450px] h-[270px] object-cover'
            />
          </a>
        ))}
      </Marquee>
    </div>
  );
}

export default Carousel;
