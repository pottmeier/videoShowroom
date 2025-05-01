/** @type {import('next').NextConfig} */

module.exports = {
  basePath: "/videoShowroom",
  assetPrefix: "/videoShowroom/",
  images: {
    unoptimized: true, // Required for static export
  },
  output: "export",
};
