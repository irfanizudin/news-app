/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.cnn.com", "media.cnn.com", "dynaimage.cdn.cnn.com"],
  },
};

module.exports = nextConfig;
