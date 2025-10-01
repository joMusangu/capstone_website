/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/capstone_website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/capstone_website/' : '',
  // Ensure static assets are properly handled
  experimental: {
    esmExternals: false,
  },
}

export default nextConfig
