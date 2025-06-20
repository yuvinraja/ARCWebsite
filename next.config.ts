/** @type {import('next').NextConfig} */
const nextConfig = {
  // your existing config...
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/**',
      },
      // add any other image domains you might need
    ],
  },
}

module.exports = nextConfig