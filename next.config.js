const config = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  env: {
    API_URL: process.env.API_URL,
  },
  experimental: {
    serverAction: true,
  },
  experimental: {},
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.goodtools.ai",
        port: "",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

export default config;
