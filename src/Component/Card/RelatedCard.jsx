import React, { useContext, useEffect, useState } from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

const RelatedCards = ({ subs, id }) => {
  const [relatedTools, setRelatedTools] = useState([]);
  const [isLoadingRelated, setIsLoadingRelated] = useState(true);
  const initialButtonStates = {};

  useEffect(() => {
    subs
      ? fetch(`${process.env.API_URL}/relatedtools/${subs}`)
        .then((res) => res.json())
        .then((data) => {
          setRelatedTools(data);
          setIsLoadingRelated(false);
          data.forEach((tool) => {
            const storageKey = `myHeartClicked-${tool._id}`;
            const isClicked = loadStateFromLocalStorage(storageKey);
            initialButtonStates[tool._id] = isClicked;
          });
        })
      : undefined;
  }, [subs]);

  const component = (tool, indx) => {
    if (tool) {
      const storageKey = `myHeartClicked-${tool._id}`;
      const isClicked = loadStateFromLocalStorage(storageKey);

      // Define the truncateHtml function
      function truncateHtml(html, length) {
        // Remove HTML tags and split the text into words
        const text = html.replace(/<[^>]+>/g, " ").split(" ");

        // Take the first 'length' words and join them back together
        const truncatedText = text.slice(0, length).join(" ");

        // If the original HTML content has more words, add an ellipsis
        if (text.length > length) {
          return truncatedText + "...";
        }

        return truncatedText;
      }

      return (
        <div
          key={indx}
          style={{
            width: "100%",
            height: "100%",
            padding: 20,
            background: "white",
            boxShadow: "0px 8px 24px rgba(41.44, 58.86, 85, 0.08)",
            borderRadius: 16,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <Link key={tool.slug} href={`/${tool.slug}`} target="_blank">
            <div className="relative w-full md:mb-6 mb-4 rounded-2xl">
              <Image
                src={`${process.env.API_URL}/uploads/${tool?.image}`}
                alt={tool?.toolName}
                className="h-[240px] rounded-[12px]"
                priority
                // placeholder="blur"
                // blurDataURL={tool?.imageBlur}
                width={0}
                height={0}
                sizes="100vw"
                layout="responsive"
                style={{ width: "100%" }}

              />

              <div
                onClick={(event) => handleClick(event, storageKey)}
                className={`w-[44px] h-[44px] rounded-full flex items-center justify-center absolute top-0 right-0 mr-5 mt-4 bg-white`}
              >
                <div className="relative">
                  {isClicked ? (
                    <BsBookmarkFill className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[20px] h-[20px]" />
                  ) : (
                    <BsBookmark className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[20px] h-[20px]" />
                  )}
                </div>
              </div>
            </div>

            <div className="h-fit">
              <div className="flex justify-between items-center md:mb-6 mb-4">
                <h2 className="font-title font-bold text-[24px] text-[#081120]">
                  {tool?.toolName}
                </h2>

                <div className="inline-flex justify-between px-4 py-2 bg-[#F3F4F6] rounded-full gap-[10px] items-center">
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_1454_1454)">
                        <path
                          d="M9.91675 4.66718H4.08341V4.08384C4.08324 3.43716 4.29798 2.80876 4.69388 2.29743C5.08979 1.7861 5.6444 1.42084 6.27052 1.25908C6.89665 1.09733 7.55878 1.14824 8.15281 1.40382C8.74684 1.65941 9.23909 2.10516 9.55216 2.67101C9.58936 2.738 9.63938 2.79701 9.69937 2.84467C9.75937 2.89233 9.82817 2.9277 9.90184 2.94877C9.9755 2.96984 10.0526 2.9762 10.1287 2.96747C10.2048 2.95875 10.2785 2.93512 10.3455 2.89793C10.4125 2.86073 10.4715 2.81071 10.5192 2.75072C10.5668 2.69072 10.6022 2.62192 10.6233 2.54826C10.6443 2.47459 10.6507 2.39749 10.642 2.32137C10.6332 2.24524 10.6096 2.17158 10.5724 2.10459C10.1339 1.31261 9.44467 0.688795 8.61302 0.331208C7.78136 -0.0263783 6.85446 -0.097462 5.97801 0.129131C5.10155 0.355724 4.32524 0.867146 3.77111 1.58301C3.21698 2.29887 2.91645 3.17857 2.91675 4.08384V4.91451C2.39721 5.14125 1.955 5.51448 1.64421 5.98855C1.33341 6.46262 1.16749 7.01698 1.16675 7.58384V11.0838C1.16767 11.8571 1.47526 12.5984 2.02204 13.1452C2.56882 13.692 3.31015 13.9996 4.08341 14.0005H9.91675C10.69 13.9996 11.4313 13.692 11.9781 13.1452C12.5249 12.5984 12.8325 11.8571 12.8334 11.0838V7.58384C12.8325 6.81058 12.5249 6.06925 11.9781 5.52247C11.4313 4.97569 10.69 4.6681 9.91675 4.66718ZM11.6667 11.0838C11.6667 11.548 11.4824 11.9931 11.1542 12.3213C10.826 12.6495 10.3809 12.8338 9.91675 12.8338H4.08341C3.61929 12.8338 3.17417 12.6495 2.84598 12.3213C2.51779 11.9931 2.33341 11.548 2.33341 11.0838V7.58384C2.33341 7.11971 2.51779 6.67459 2.84598 6.34641C3.17417 6.01822 3.61929 5.83384 4.08341 5.83384H9.91675C10.3809 5.83384 10.826 6.01822 11.1542 6.34641C11.4824 6.67459 11.6667 7.11971 11.6667 7.58384V11.0838Z"
                          fill="#081120"
                        />
                        <path
                          d="M7.00008 8.16699C6.84537 8.16699 6.697 8.22845 6.5876 8.33785C6.47821 8.44724 6.41675 8.59562 6.41675 8.75032V9.91699C6.41675 10.0717 6.47821 10.2201 6.5876 10.3295C6.697 10.4389 6.84537 10.5003 7.00008 10.5003C7.1548 10.5003 7.30317 10.4389 7.41257 10.3295C7.52196 10.2201 7.58342 10.0717 7.58342 9.91699V8.75032C7.58342 8.59562 7.52196 8.44724 7.41257 8.33785C7.30317 8.22845 7.1548 8.16699 7.00008 8.16699Z"
                          fill="#081120"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1454_1454">
                          <rect width="14" height="14" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="font-paragraph text-xs text-[#081120]">
                    {tool?.priceType}
                  </div>
                </div>
              </div>

              <div className="md:mb-6 mb-4 min-h-[72px] font-paragraph text-[#4D5761] text-base">
                <div
                  className="h-[65px] font-normal text-base font-paragraph text-[#4D5761]"
                  dangerouslySetInnerHTML={{
                    __html: truncateHtml(tool?.description, 10),
                  }}
                ></div>
              </div>

              <div className=" flex flex-wrap gap-3 items-center gap-y-[6px] mb-5">
                {tool?.SubCategory.slice(0, 3).map((item, index) => (
                  <div
                    key={index}
                    className="flex w-fit h-fit justify-between grid-cols-4 gap-1"
                  >
                    <div className="px-3 py-[10px] flex items-center justify-between border-[0.5px] font-paragraph text-[10px] border-[#E5E7EB] rounded-[100px]">
                      {item}
                    </div>
                  </div>
                ))}
                {tool?.SubCategory.length > 3 && (
                  <div className="px-3 py-[10px] flex items-center justify-between rounded-[100px] text-[10px] font-paragraph bg-[#F3F4F6]">
                    See More
                  </div>
                )}
              </div>
              <div className="w-full h-[40px] gap-[10px] flex justify-center items-center px-[34px] py-4 border border-[#E5E7EB] rounded-xl">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.32623 1.44821L2.29317 1.35842C2.14912 0.967665 2.17125 0.632891 2.35913 0.363644C2.5178 0.135893 2.78038 0 3.06137 0C3.28963 0 3.51241 0.084108 3.74131 0.256758L17.2421 8.89944L17.3054 8.94469C17.6199 9.19366 17.801 9.55545 17.8022 9.9372C17.8035 10.319 17.6246 10.6818 17.3117 10.9329L17.2813 10.9574L3.7427 19.7389C3.51299 19.9145 3.28896 20 3.05884 20C2.77896 20 2.51716 19.8646 2.35839 19.6381C2.17061 19.3699 2.14732 19.036 2.28941 18.6453L2.32173 18.5563L7.948 10.1871C7.97717 10.0466 7.9768 9.83535 7.94708 9.69472L2.32623 1.44821ZM5.34021 16.8509L15.9905 9.94278L15.9181 9.89638H9.521C9.52598 10.2117 9.48289 10.5297 9.38927 10.7873L9.35685 10.8763L5.34021 16.8509Z"
                    fill="#4D5761"
                  />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      );
    }
    return null;
  };

  const handleClick = (event, storageKey) => {
    event.preventDefault();
    event.stopPropagation();
    const isClicked = loadStateFromLocalStorage(storageKey);
    localStorage.setItem(storageKey, String(!isClicked));
    forceUpdate(); // Add this to force a re-render
  };

  const loadStateFromLocalStorage = (storageKey) => {
    const isClicked = localStorage.getItem(storageKey) === "true";
    return isClicked;
  };

  const [updateState, setUpdateState] = useState(0);
  const forceUpdate = () => setUpdateState(updateState + 1);

  return (
    <div
      className={`${relatedTools.length > 1 ? "block" : "hidden"
        }  grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 md:gap-6 gap-y-4`}
    >
      {isLoadingRelated ? (
        <span className="loading loading-ring md:w-40 md:h-40 w-20 h-20 md:ml-[10%] ml-[5%] md:my-40 my-20"></span>
      ) : relatedTools ? (
        relatedTools.map((tool, indx) =>
          tool._id !== id ? component(tool, indx) : null
        )
      ) : null}
    </div>
  );
};

export default RelatedCards;
