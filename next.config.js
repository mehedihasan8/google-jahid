const config = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx"],
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
    ],
  },
};

export default config;