module.exports = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  dynamicParams: true,
  generateStaticParams: async () => {
    const [tools, newses, subCategories] = await Promise.all([
<<<<<<< HEAD
      fetch("http://api.goodtools.ai/tool"),
      fetch("http://api.goodtools.ai/news"),
      fetch("http://api.goodtools.ai/allsubcategories"),
=======
      fetch("https://api.goodtools.ai/tool"),
      fetch("https://api.goodtools.ai/news"),
      fetch("https://api.goodtools.ai/allsubcategories"),
>>>>>>> b7dfcbd9f4e5866f9bd6610a712361c13499f5cb
    ]);

    const [toolsData, newsesData, subCategoriesData] = await Promise.all([
      tools.json(),
      newses.json(),
      subCategories.json(),
    ]);

    const toolsParams = toolsData.map((tool) => ({
      params: { slug: tool.slug },
    }));

    const newsesParams = newsesData.map((news) => ({
      params: { slug: news.slug },
    }));

    const subCategoriesParams = subCategoriesData.map((subCategory) => ({
      params: { slug: subCategory.slug },
    }));

    return [...toolsParams, ...newsesParams, ...subCategoriesParams];
  },
  experimental: {
    routes: {
      "/tool/[slug]": "./src/pages/tool/[slug].tsx",
      "/news/[slug]": "./src/pages/news/[slug].tsx",
      "/category/[slug]": "./src/pages/category/[slug].tsx",
    },
  },
};
