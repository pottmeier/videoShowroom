/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  // basePath: isProd ? '/videoShowroom' : '',
  // assetPrefix: isProd ? '/videoShowroom/' : '',
  images: {
    unoptimized: true, // Required for static export
  },
  output: "export",
};
