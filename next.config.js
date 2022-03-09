/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.cnn.com", "media.cnn.com", "dynaimage.cdn.cnn.com"],
  },
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
