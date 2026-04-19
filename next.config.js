/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  sassOptions: {
    silenceDeprecations: ['legacy-js-api', 'color-functions', 'global-builtin', 'import', 'mixed-decls'],
    quietDeps: true
  }
};

module.exports = nextConfig;

