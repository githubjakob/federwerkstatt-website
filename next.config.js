/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/federwerkstatt-website',
  images: {
    loader: 'akamai',
    path: '',
  },
}

module.exports = nextConfig
