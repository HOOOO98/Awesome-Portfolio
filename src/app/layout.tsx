import type { Metadata } from 'next';

import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'DEVSTEP',
  description: '프론트엔드 개발자 성장과정을 담은 포트폴리오',
  icons: {
    apple: '/images/apple-touch-icon.png',
  },
  openGraph: {
    images:
      'https://github.com/HOOOO98/7777/assets/120024673/edfc6514-c1c6-44fe-9464-ebf83dc8e293',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      style={{
        overflowX: 'hidden',
      }}
    >
      <body className='bg-[rgba(220,220,220,.2)]'>{children}</body>
    </html>
  );
}
