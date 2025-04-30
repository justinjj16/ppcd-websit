/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: {
    //   domains: ["localhost"],
    //   remotePatterns: [
    //     {
    //       protocol: "http",
    //       hostname: "cdn.sanity.io",
    //       port: "",
    //     },
    //   ],
    // },
    // experimental:{
    //   images:{
    //     allowFutureImage: true
    //   }
    // }
    webpack(config) {
      config.module.rules.push({
        test: /pdf\.worker\.min\.js$/,
        type: 'asset/resource',
      });
      return config;
    },
  };
  
  module.exports = nextConfig;
  