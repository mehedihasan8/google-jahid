import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";

export default function News({ data, categories }) {
  const [item, setItem] = useState(null);
  const [cata, setCata] = useState(null);

  useEffect(() => {
    setItem(data);
  }, []);

  useEffect(() => {
    setCata(categories);
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

  if (!item) {
    return (
      <span className="loading loading-ring md:w-40 md:h-40 w-20 h-20 md:ml-[45%] ml-[45%] md:my-40 my-20"></span>
    );
  }

  return (
    <div>
      <Head>
        <title>GoodTools.Ai - {item.newsTitle}</title>
        <meta name="title" content={`GoodTools.Ai - ${item.newsTitle}`} />
        <meta name="description" content={data.description} />
        <meta
          name="keywords"
          content={`Ai Tools, Best Ai Tools, Ai Tools Finder, ${item.newsTitle}`}
        />
        <meta name="robots" content="max-image-preview:large" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta
          property="og:title"
          content={`GoodTools.Ai - ${item.newsTitle}`}
        />
        <meta property="og:description" content={item.newsBody} />
        <meta
          property="og:image"
          content={`https://goodtools.ai/${item.image}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="breadcrumbs py-0 text-sm font-normal mx-4 md:mx-0 mt-24">
        <ul>
          <li className="text-[#081120] font-paragraph text-sm">
            <Link href="/">Home</Link>
          </li>
          <li className="text-[#6C737F] font-paragraph text-sm">
            {item?.newsTitle}
          </li>
        </ul>
      </div>
      <div className="mx-auto font-paragraph ">
        {/* Single News Section */}
        <div className="md:pt-[40px] mb-[40px] pt-6 md:mx-0 mx-2">
          <div className="px-4 md:px-6  pt-4 pb-7 mb-26 border-[#E5E7EB] border rounded-2xl">
            {/* Hero section */}
            <img
              className="md:mb-10 mb-6 rounded-lg mx-auto w-full"
              alt={item.newsTitle}
              src={`https://i.ibb.co/1fGrFQp/Image.png`}
              // src={`https://api.goodtools.ai/uploads/${item.image}`}
            />
            <div className="md:grid md:grid-cols-2 ">
              {/* right-div */}
              <div className="md:w-[760px]">
                <div className="date">
                  <p className="font-paragraph font-medium text-xl">
                    {item.newsType}
                  </p>
                  <p className="vertical-line mx-[8px] font-bold "></p>
                  <p className="font-normal text-[#6C737F]">
                    {/* {formateDte(item?.date)} */}
                    {formateDte(item?.date)}
                  </p>
                </div>

                <div className="single-title mb-6">{item.newsTitle}</div>
                <div className="flex justify-center mt-8 mb-10">
                  <audio controls className="md:w-4/5">
                    <source
                      src="/path_to_your_audio_file.mp3"
                      type="audio/mp3"
                    />
                    Your browser does not support the audio element.
                  </audio>
                </div>
                {/* {saiful er kahini } */}
                <div className="hide-scrollbar leading-8 font-paragraph font-normal">
                  <div
                    dangerouslySetInnerHTML={{ __html: item.newsBody }}
                  ></div>
                </div>
              </div>

              {/* Left Div */}
              <div className="md:w-[420px] w-full md:ml-[35%] mx-auto md:mx-0 mt-7 md:mt-0">
                <div className="small-blue-card md:p-[40px]">
                  <div className="small-card-title font-title">
                    Explore all of our Ai tools now
                  </div>
                  <div className="small-card-text">
                    Find the best AI tools for your needs. Go to the filter and
                    choose your Category.
                    <Link
                      href="/"
                      className="explore-btn explore-btn-text mt-6"
                    >
                      Explore Now
                    </Link>
                  </div>
                </div>
                {/* Popular */}

                <div className="category mt-6 mb-10  text-xl font-paragraph font-medium">
                  <h2 className="text-xl font-paragraph font-semibold">
                    Popular Categories :
                  </h2>
                  <div className="flex flex-wrap gap-4 mt-4 text-lg font-normal">
                    {cata?.map((subItem, index) => (
                      <p
                        style={{ textOverflow: "ellipsis", overflow: "hidden" }}
                        className="h-fit w-fit border rounded-3xl text-center py-2 px-4 font-paragraph font-normal text-sm text-[#4D5761]"
                        key={index}
                      >
                        {subItem.Title}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="category mb-10 text-xl font-paragraph font-medium">
                  <h2 className="text-xl font-paragraph font-semibold">
                    Tags :
                  </h2>
                  <div className="flex flex-wrap gap-4  mt-2 text-lg font-normal w-full p-2 font-paragraph text-[#4D5761]">
                    <p className="h-fit w-fit border rounded-3xl text-center py-2 px-4 font-paragraph font-normal text-sm text-[#4D5761]">
                      Ai Detection
                    </p>
                    <p className="h-fit w-fit border rounded-3xl text-center py-2 px-4 font-paragraph font-normal text-sm text-[#4D5761]">
                      Github
                    </p>
                    <p className="h-fit w-fit border rounded-3xl text-center py-2 px-4 font-paragraph font-normal text-sm text-[#4D5761]">
                      Image
                    </p>
                    <p className="h-fit w-fit border rounded-3xl text-center py-2 px-4 font-paragraph font-normal text-sm text-[#4D5761]">
                      Machine
                    </p>
                    <p className="h-fit w-fit border rounded-3xl text-center py-2 px-4 font-paragraph font-normal text-sm text-[#4D5761]">
                      Inspiration
                    </p>
                    <p className="h-fit w-fit border rounded-3xl text-center py-2 px-4 font-paragraph font-normal text-sm text-[#4D5761]">
                      Code
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="large-card md:mt-10 mb-15">
              <div className="large-right md:w-[45%]">
                <h1 className="font font-title font-bold text-[56px]">
                  Let’s Contact
                  <br />
                  With Us.
                </h1>
              </div>
              <div className="vertical mr-6"></div>
              <div className="large-left">
                <div className="text-paragraph text-base font-normal text-white ">
                  Find the best AI tools for your needs. Go to the filter and
                  choose your Category.
                  <Link
                    href="/"
                    className="explore-btn explore-btn-text font-medium text-paragraph text-base  mt-6  "
                  >
                    Explore Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.params;

  const [news, categories] = await Promise.all([
    fetch(`https://api.goodtools.ai/news/${slug}`),
    fetch(`https://api.goodtools.ai/category`),
  ]);

  const [newsData, categoriesData] = await Promise.all([
    news.json(),
    categories.json(),
  ]);

  return {
    props: {
      data: newsData,
      categories: categoriesData,
    },
  };
}
