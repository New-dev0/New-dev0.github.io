/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  webpack: (config) => {
    config.externals = [...(config.externals || []), { canvas: 'canvas' }];
    return config;
  },
  // Add this section
  async rewrites() {
    return [
      {
        source: '/server-sitemap.xml',
        destination: '/api/server-sitemap',
      },
    ]
  },
};

export default nextConfig;
