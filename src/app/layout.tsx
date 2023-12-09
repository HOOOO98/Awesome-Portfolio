import type { Metadata } from 'next';

import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'DEVSTEP',
  description: '프론트엔드 개발자 성장과정을 담은 포트폴리오',
  icons: {
    apple: '/images/apple-touch-icon.png',
  },
  openGraph: {
    title: 'DEVSTEP',
    description: '프론트엔드 개발자 성장과정을 담은 포트폴리오',
    siteName: 'DEVSTEP',
    images: [
      {
        url: '/images/loadingLogo.jpeg',
        width: 600,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className='bg-[rgba(220,220,220,.2)]'>{children}</body>
    </html>
  );
}
