import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";

const PageWraper = dynamic(() => import("../../Layout/PageWraper"));

export default function News({ data }) {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setNews(data);
    setIsLoading(false);
  }, []);

  const formateDte = (date) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const dateSplit = date.split("/");
    const day = parseInt(dateSplit[0]);
    const month = months[parseInt(dateSplit[1]) - 1];
    const year = parseInt(dateSplit[2]);
    return `${month} ${day}, ${year}`;
  };

  return (
    <PageWraper>
      <Head>
        <title>GoodTools.Ai - Blog</title>
        <meta name="description" content="Latest Our AI Blog & Articles" />
        <meta
          name="keywords"
          content={`Ai Tools, Best Ai Tools, Ai Tools Finder, Ai Blog, Tech Blog`}
        />
        <meta name="robots" content="max-image-preview:large" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta property="og:title" content="GoodTools.Ai - Blog" />
        <meta
          property="og:description"
          content="Latest Our AI News & Articles"
        />
        <meta property="og:image" content="https://goodtools.ai/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="max-w-screen-xl mx-auto px-2 md:px-0 breadcrumbs py-0 text-sm font-normal mt-16 md:mt-24">
        <ul>
          <li className="text-[#081120] font-paragraph text-sm">
            <Link href="/" scroll={true}>Home</Link>
          </li>
          <li className="text-[#6C737F] font-paragraph text-sm">Blog</li>
        </ul>
      </div>
      <div className="font-paragraph mb-10 md:mb-24 mx-2 md:mx-0 mt-6 md:mt-10">
        <div className="border md:p-10 p-4 rounded-3xl">
          <div>
            <div className="md:rounded-xl">
              <p className="text-center news-title font-bold text-3xl md:text-5xl font-title md:text-left ">
                Latest Our AI News & Articles
              </p>
            </div>
          </div>

          <div className="text-center grid  md:grid-cols-2 gap-6 md:mt-10 mt-6 mx-auto font-title">
            {isLoading ? (
              <span className="loading  loading-ring md:w-40 md:h-40 w-20  md:ml-[90%] ml-[50%] mb-10 mt-5"></span>
            ) : (
              news.map((item, index) => (
                <Link key={index} href={`/blog/${item.slug}`} scroll={true}>
                  <div
                    className="relative p-5 rounded-xl h-full "
                    style={{
                      width: "100%",
                      height: "100%",
                      background: "var(--neutral-white, #FFF)",
                      boxShadow: "0px 8px 24px rgba(58.44, 80.86, 50, 0.15)",
                    }}
                  >

                    <Image
                      className="h-[210px] md:h-[286px] relative rounded-xl"
                      src={`${process.env.API_URL}/uploads/${item.image}`}
                      //src={`https://i.ibb.co/8c144dc/Image.jpg`}
                      alt={item?.newsTitle}
                      priority
                      // placeholder="blur"
                      // blurDataURL={item.imageBlur}
                      width={0}
                      height={0}
                      sizes="100vw"
                      layout="responsive"
                      style={{ width: "100%" }}

                    />

                    <div className=" md:mt-6 pb-2 w-full flex md:justify-normal justify-between items-center md:w-full mx-auto">
                      <p className="date-title font-medium font-paragraph text-xl">
                        {item?.newsType}
                      </p>
                    </div>

                    <p className="news-sub-title font-title text-left font-bold md:text-2xl">
                      The Chapple AI News Update Video{" "}
                      <span className="news-sub-title2">
                        ({item?.newsTitle})
                      </span>{" "}
                    </p>

                    <p
                      className="text my-4 md:mb-6 text-left pb-16"
                      dangerouslySetInnerHTML={{
                        __html: (item?.newsBody?.replace(/["\n]/g, "") || "")
                          .replace(/<img(.)*>/g, "<p></p>")
                          .split(" ")
                          .slice(0, 20)
                          .join(" "),
                      }}
                    ></p>
                    <div className="absolute bottom-6 btn-section md:w-44">
                      <button className="md:w-44 text-[#4D5761] font-medium font-paragraph">
                        Read More
                      </button>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </PageWraper>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_URL}/news`);
  const data = await res.json();

  return {
    props: { data },
  };
}
