/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['tecdn.b-cdn.net','ibb.co','i.ibb.co'], // Add the problematic hostname here
  },
}

module.exports = nextConfig
