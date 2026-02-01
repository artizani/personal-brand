/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cloudflare Pages compatibility
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Optional: Add trailing slashes for better static export
  trailingSlash: true,
}

export default nextConfig
