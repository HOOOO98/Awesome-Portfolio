/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      { protocol: 'https', hostname: 'blog.kakaocdn.net' },
    ],
  },
};

module.exports = nextConfig;
