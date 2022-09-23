/** @type {import('next').NextConfig} */

/*
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})
*/

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["p.js", "md", "mdx"],
  images: {
    domains: [
      "telegram.org",
      "pngimg.com",
      "uploads-ssl.webflow.com",
      "raw.githubusercontent.com",
      "1000logos.net",
      "telegra.ph",
      "graph.org",
      "img.shields.io"
    ]
  }
}

module.exports = nextConfig;
