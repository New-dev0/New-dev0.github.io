/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://newdev0.me',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'], // Exclude server-side sitemap
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://newdev0.me/server-sitemap.xml', // Add server-side sitemap
    ],
  },
}
