module.exports = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  dynamicParams: true,
  generateStaticParams: async () => {
    const [tools, newses] = await Promise.all([
      fetch("http://localhost:3000/tool"),
      fetch("http://localhost:3000/news"),
    ]);

    const [toolsData, newsesData] = await Promise.all([
      tools.json(),
      newses.json(),
    ]);

    const toolsParams = toolsData.map((tool) => ({
      params: { slug: tool.slug },
    }));

    const newsesParams = newsesData.map((news) => ({
      params: { slug: news.slug },
    }));

    return [...toolsParams, ...newsesParams];
  },
  experimental: {
    routes: {
      "/tool/[slug]/page": "./src/pages/tool/[slug].tsx",
      "/news/[slug]/page": "./src/pages/news/[slug].tsx",
    },
  },
};
