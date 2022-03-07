/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.cnn.com", "media.cnn.com"],
  },
};

module.exports = nextConfig;
