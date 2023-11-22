function generateSiteMap(tools, categories) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
     
            <url>
            <loc>https://goodtools.ai/</loc>
            <lastmod>2023-11-18T07:11:19+00:00</lastmod>
            <priority>1.00</priority>
          </url>
          <url>
            <loc>https://goodtools.ai/blog</loc>
            <lastmod>2023-11-18T07:11:19+00:00</lastmod>
            <priority>0.80</priority>
          </url>
          <url>
            <loc>https://goodtools.ai/privacy-policy</loc>
            <lastmod>2023-11-18T07:11:19+00:00</lastmod>
            <priority>0.80</priority>
          </url>
          <url>
            <loc>https://goodtools.ai/terms</loc>
            <lastmod>2023-11-18T07:11:19+00:00</lastmod>
            <priority>0.80</priority>
          </url>
          <url>
            <loc>https://goodtools.ai/about</loc>
            <lastmod>2023-11-18T07:11:19+00:00</lastmod>
            <priority>0.80</priority>
          </url>
          <url>
            <loc>https://goodtools.ai/contact</loc>
            <lastmod>2023-11-18T07:11:19+00:00</lastmod>
            <priority>0.80</priority>
          </url>
     
        ${tools
          .map((tool) => {
            return `
            <url>
            <loc>https://goodtools.ai/${tool.slug}</loc>
            <lastmod>${tool.updatedAt}</lastmod>
            <priority>0.80</priority>
            </url>
            `;
          })
          .join("")}

            ${categories
              .map((category) => {
                return `
                    <url>
                    <loc>https://goodtools.ai/category/${category.slug}</loc>
                    <lastmod>${category.updatedAt}</lastmod>
                    <priority>0.80</priority>
                    </url>
                    `;
              })
              .join("")}

   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const [tools, categories] = await Promise.all([
    fetch(`${process.env.API_URL}/alltools`),
    fetch(`${process.env.API_URL}/allsubcategories`),
  ]);

  const [toolsResponse, categoriesResponse] = await Promise.all([
    tools.json(),
    categories.json(),
  ]);

  const sitemap = generateSiteMap(toolsResponse, categoriesResponse);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
