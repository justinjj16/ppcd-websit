/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["localhost"],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn.sanity.io",
          port: "",
        },
      ],
    },
    experimental:{
      images:{
        allowFutureImage: true
      }
    }
  };
  
  module.exports = nextConfig;
  