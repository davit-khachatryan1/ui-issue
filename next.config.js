/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config');

const nextConfig = {

  env: {
    googleAnalyticsID: "G-MK2YDLVJBY"
  },


  i18n,
  
  reactStrictMode: true,


  generateBuildId: async () => {
   // You can, for example, get the latest git commit hash here
   let id = String(Date.now());
   return id
 },

 devIndicators: {
    buildActivityPosition: 'top-right',
  },

  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache',
          },
          {
            key: 'Cache-Control',
            value: 'no-store',
          },
          {
            key: 'Cache-Control',
            value: 'max-age=0',
          },
          {
            key: 'Cache-Control',
            value: 'must-revalidate',
          },
        ],
      },
      {
        source: '/market',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache',
          },
          {
            key: 'Cache-Control',
            value: 'no-store',
          },
          {
            key: 'Cache-Control',
            value: 'max-age=0',
          },
          {
            key: 'Cache-Control',
            value: 'must-revalidate',
          },
        ],
      },
      {
        source: '/about',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache',
          },
          {
            key: 'Cache-Control',
            value: 'no-store',
          },
          {
            key: 'Cache-Control',
            value: 'max-age=0',
          },
          {
            key: 'Cache-Control',
            value: 'must-revalidate',
          },
        ],
      },
      {
        source: '/faq',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache',
          },
          {
            key: 'Cache-Control',
            value: 'no-store',
          },
          {
            key: 'Cache-Control',
            value: 'max-age=0',
          },
          {
            key: 'Cache-Control',
            value: 'must-revalidate',
          },
        ],
      },
    ]
  },

}

module.exports = nextConfig
