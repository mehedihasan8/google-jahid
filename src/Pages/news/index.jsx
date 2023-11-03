import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";;
import Head from 'next/head'

export default function News({ data }) {

  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setNews(data);
    setIsLoading(false);
  }, []);

  const formateDte = (date) => {
    const months = [
      "January", "February", "March", "April",
      "May", "June", "July", "August",
      "September", "October", "November", "December"
    ]
    const dateSplit = date.split('/')
    const day = parseInt(dateSplit[0])
    const month = months[parseInt(dateSplit[1]) - 1]
    const year = parseInt(dateSplit[2])
    return `${month} ${day}, ${year}`
  }

  return (
    <div>
      <Head>
        <title>GoodTools.Ai - News</title>
        <meta name="description" content="Latest Our AI News & Articles" />
        <meta name="keywords" content={`Ai Tools, Best Ai Tools, Ai Tools Finder, Ai News, Tech News`} />
        <meta name="robots" content="max-image-preview:large" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta property="og:title" content='GoodTools.Ai - News'/>
        <meta property="og:description" content='Latest Our AI News & Articles' />
        <meta property="og:image" content="https://goodtools.ai/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="font-paragraph md:mb-[100px] mb-[40px] mx-4 md:mx-0">
        <div className="flex items-center pb-4 mt[34px] my-4">
          <a href="/" className="text-[#081120] font-paragraph text-sm">Home</a>
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
                {" "}
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <p className='text-[#6C737F] font-paragraph text-sm'>News</p>
        </div>
        <div className=" border md:p-10 md:m-4 p-4 rounded-lg">
          <div>
            <div className="md:rounded-xl">
              <p className="text-center text-3xl md:text-5xl  font-bold font-title md:text-left">
                Latest Our AI News & Articles
              </p>


            </div>
          </div>

          <div className=" text-center grid  md:grid-cols-2 gap-6 md:mt-10 mt-6 mx-auto  font-title">
            {isLoading ? (
              <span className="loading  loading-ring md:w-40 md:h-40 w-20  md:ml-[90%] ml-[50%] mb-10 mt-5"></span>
            ) : (
              news.map((item, index) => (
                <Link
                  key={index}
                  href={`/news/${item.slug}`}
                >
                  <div style={{ width: '100%', height: '100%', padding: 24, background: 'white', boxShadow: '0px 8px 24px rgba(41.44, 58.86, 85, 0.08)', borderRadius: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex' }}>
                    <div className="w-full">
                      <img
                        className="w-full rounded-xl h-[286px]"
                        src={`http://localhost:3000/uploads/${item.image}`}
                        alt={item.newsTitle}
                      />
                    </div>
                    <div className=" md:mt-6 mt-4 w-full flex md:justify-normal justify-between items-center md:w-full mx-auto">
                      <p className="date-title font-medium font-paragraph text-xl mr-[18px]">{item.newsType}</p>
                      <div className=" invisible vertical-line mr-[18px]"></div>
                      <p className="date-dates hidden">{formateDte(item.date)}</p>
                    </div>
                    <div className="sub-section md:mt-6 mt-4">
                      <p className="sub-text font-title font-bold md:text-2xl"> {item.newsTitle} </p>
                    </div>
                    <div
                      className="text my-4 md:mb-6"
                      dangerouslySetInnerHTML={{
                        __html: (item?.newsBody?.replace(/["\n]/g, "") || "")
                          .replace(/<img(.)*>/g, "<p></p>")
                          .split(" ")
                          .slice(0, 20)
                          .join(" "),
                      }}
                    ></div>
                    <div className="btn-section md:w-44 md:my-[40px] mt-[16px]">
                      <button className="md:w-44 text-[#4D5761] font-medium font-paragraph text-base">Read More</button>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/news`);
  const data = await res.json();

  return {
    props: { data }
  }
}