'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

interface LanguageButtonProps {
  lang: string;
}

function LanguageButton({ lang }: LanguageButtonProps) {
  const router = useRouter();

  const routeJa = () => {
    router.push('/ja');
  };

  const routeEn = () => {
    router.push('/');
  };

  return (
    <button
      onClick={lang === 'ja' ? routeEn : routeJa}
      className='fixed right-12 bottom-12 z-50 text-xl font-bold text-gray-500'
    >
      {lang === 'ja' ? '한국어' : 'JAPANESE'}
    </button>
  );
}

export default LanguageButton;
