/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Set BASE_PATH=/leefland-limburg when building for GitHub Pages project sites.
  basePath: process.env.BASE_PATH || '',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig