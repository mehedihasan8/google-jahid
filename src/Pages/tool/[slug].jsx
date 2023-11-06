import { useEffect, useState } from "react";
import Rate from "../../Component/Rate/Rate";
import Rattingg from "../../Component/Rating/Rating";
import Link from "next/link";
import RelatedCards from "../../Component/Card/RelatedCard";
import Head from "next/head";

export default function Tool({ data }) {
  const [cards, setCards] = useState(null);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setCards(data);
    setIsloading(false);
  }, []);

  return (
    <div>
      <Head>
        <title>GoodTools.Ai - {data.toolName}</title>
        <meta name="title" content={`GoodTools.Ai - ${data.toolName}`} />
        <meta name="description" content={data.description} />
        <meta
          name="keywords"
          content={`Ai Tools, Best Ai Tools, Ai Tools Finder, ${data.toolName}`}
        />
        <meta name="robots" content="max-image-preview:large" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta property="og:title" content={`GoodTools.Ai - ${data.toolName}`} />
        <meta property="og:description" content={data.description} />
        <meta
          property="og:image"
          content={`https://goodtools.ai/${data.image}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className=" rounded-md">
        {isLoading ? (
          <span className="loading loading-ring md:w-40 md:h-40 w-20 h-20 md:ml-[45%] ml-[40%] md:my-40 my-20"></span>
        ) : (
          <div className="text-sm font-normal mb-10 md:mb-14 w-full px-2 md:px-0 mt-24">
            <ul className=" md:ml-[0.5%] flex">
              <li className="text-[#081120] font-paragraph text-sm">
                <Link href="/">Home</Link>
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <g clipPath="url(#clip0_810_9466)">
                  <path
                    d="M8.3332 5.5L7.1582 6.675L10.9749 10.5L7.1582 14.325L8.3332 15.5L13.3332 10.5L8.3332 5.5Z"
                    fill="#6C737F"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_810_9466">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <Link href="/">Card</Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <g clipPath="url(#clip0_810_9466)">
                  <path
                    d="M8.3332 5.5L7.1582 6.675L10.9749 10.5L7.1582 14.325L8.3332 15.5L13.3332 10.5L8.3332 5.5Z"
                    fill="#6C737F"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_810_9466">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <li className="font-paragraph text-sm">{cards?.toolName}</li>
            </ul>
            <div className=" mt-10 md:px-0 md:py-0 px-4 py-4 border border-[#E5E7EB] rounded-2xl">
              <Rattingg card={cards} />
              <Rate id={cards._id} name={cards?.toolName}></Rate>
            </div>
            <div className="md:my-[60px] mt-10 mb-5 mx-4 md:mx-0">
              <RelatedCards
                id={cards._id}
                subs={cards.SubCategory}
              ></RelatedCards>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const res = await fetch(`https://api.goodtools.ai/tools/${slug}`);
  const data = await res.json();

  return {
    props: { data },
  };
}
