/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // React Strict Mode を無効にする
  env: {
    YOUR_API_KEY: process.env.YOUR_API_KEY
  }
}

export default nextConfig
