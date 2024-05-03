/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'magic.decentralized-content.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
};


export default nextConfig;
