import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";

const PageWraper = dynamic(() => import("../Layout/PageWraper"));
const Rate = dynamic(() => import("../Component/Rate/Rate"));
const Rattingg = dynamic(() => import("../Component/Rating/Rating"));
const RelatedCards = dynamic(() => import("../Component/Card/RelatedCard"));


export default function Tool({ data }) {
  const [cards, setCards] = useState(null);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setCards(data);
    setIsloading(false);
  }, []);


  return (
    <PageWraper>
      <Head>
        <title>{`GoodTools.Ai - ${data.toolName}`}</title>

        <meta name="description" content={data.metaDescription} />
        <meta name="keywords" content={data.metaKeywords} />
        <meta name="robots" content="index, follow, max-image-preview:large" />

        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />

        <meta property="og:title" content={`GoodTools.Ai - ${data.toolName}`} />
        <meta property="og:description" content={data.metaDescription} />
        <meta property="og:image" content={`${process.env.API_URL}/uploads/${data.image}`} />

        <meta name="twitter:title" content={`GoodTools.Ai - ${data.toolName}`} />
        <meta name="twitter:description" content={data.metaDescription} />
        <meta name="twitter:image" content={`${process.env.API_URL}/uploads/${data.image}`} />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      </Head>
      <div className="max-w-screen-xl mx-auto px-2 md:px-0 breadcrumbs py-0 text-sm font-normal mt-16 md:mt-24 overflow-x-hidden">
        <ul>
          <li className="text-[#081120] font-paragraph text-sm">
            <Link href="/" scroll={true}>Home</Link>
          </li>
          <li className="text-[#6C737F] font-paragraph text-sm">
            {cards?.toolName}
          </li>
        </ul>
      </div>
      <div className="rounded-md  mb-10 md:mb-24">
        {isLoading ? (
          <span className="loading loading-ring md:w-40 md:h-40 w-20 h-20 md:ml-[45%] ml-[40%] md:my-40 my-20"></span>
        ) : (
          <div className="text-sm font-normal mb-10 md:mb-14 w-full px-2 md:px-0 mt-6 md:mt-10">
            <div className="md:px-0 md:py-0 px-4 py-4 border border-[#E5E7EB] rounded-2xl">
              <Rattingg card={cards} />
              <Rate id={cards._id} name={cards?.toolName}></Rate>
            </div>
            <div className="md:my-[60px] my-[40px]">
              <RelatedCards
                id={cards._id}
                subs={cards.SubCategory}
              ></RelatedCards>
            </div>
          </div>
        )}
      </div>
    </PageWraper>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const res = await fetch(`${process.env.API_URL}/tools/${slug}`);
  const data = await res.json();

  return {
    props: { data },
  };
}
