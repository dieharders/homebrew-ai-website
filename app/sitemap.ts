import type { MetadataRoute } from "next";

const EXTERNAL_DATA_URL = "https://jsonplaceholder.typicode.com/posts";
/**
 * Fetch urls from an external source
 */
function generateDynamicSiteMap(posts: any[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://openbrewai.com</loc>
     </url>
     ${posts
       ?.map(({ id }) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${id}`}</loc>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

/**
 * We manually set the two URLs we know already
 */
function generateStaticSiteMap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.openbrewai.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://studio.openbrewai.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://ohmenu.openbrewai.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}

/**
 * This page will hit our API to get data that will allow us to know the URLs of our dynamic pages. We will then write an XML file as the response for /sitemap.xml
 */
export async function getServerSideProps({ res }: any) {
  // We make an API call to gather the URLs for our site
  // const request = await fetch(EXTERNAL_DATA_URL);
  // const posts = await request.json();

  // We generate the XML sitemap with the posts data
  const sitemap = generateStaticSiteMap();

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default generateStaticSiteMap;
