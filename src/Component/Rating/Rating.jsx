import { useEffect, useState } from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { FiShare2 } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { sanitize } from 'dompurify';

const Rating = ({ card }) => {
  // consoleisClicked
  const tmpStoreKeyTool = "ToolsFinder(GoodToolsAi)RegularStoring:_toolId";
  const toolId = JSON.parse(sessionStorage.getItem(tmpStoreKeyTool));
  const [isToggled, setIsToggled] = useState(false);
  const storageKey = `myHeartClicked-${toolId}`;
  const [isClicked, setIsClicked] = useState(
    localStorage.getItem(storageKey) === "true"
  );

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => localStorage.setItem(storageKey, isClicked), [isClicked]);

  return (
    <div className="font-paragraph md:p-10">
      <div className="">
        <div className="w-full mx-auto">
          {/* Product heading */}
          <div className="md:flex justify-between gap-2 items-center ">
            {/* Product Info */}
            <div>
              <div className="flex justify-between items-center md:block ">
                <p className="font-normal text-base text-[#6C737F] pb-2">
                  Tool Information
                </p>
                <div className="flex gap-2 item-center justify-center md:hidden">
                  <div className="svg-sizing p-4">
                    {isClicked ? (
                      <button
                        className="rounded-full text-base"
                        onClick={handleClick}
                      >
                        <BsBookmark className="text-[15px]" />
                      </button>
                    ) : (
                      <button className="rounded-full" onClick={handleClick}>
                        <BsBookmarkFill className="text-[15px]" />
                      </button>
                    )}
                  </div>
                  <div className="svg-sizing p-4">
                    <FiShare2 className="md:text-[25px] text-[20px]" />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-6 mt-2 ">
                <h1 className="md:text-5xl text-[24px] font-semibold md:font-bold mt-2 font-title">
                  {card.toolName}
                </h1>
                <Link
                  href={card?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  scroll={true}
                >
                  <BiLinkExternal className="md:text-[25px] text-[20px] mt-[13px] md:mt-4 text-[#6C737F]" />
                </Link>
              </div>
            </div>
            {/* Heart and share button */}
            <div className="md:flex gap-2 md:gap-4 item-center justify-center hidden">
              <div className="svg-sizing p-4">
                {isClicked ? (
                  <button
                    className="rounded-full text-base"
                    onClick={handleClick}
                  >
                    <BsBookmark className="md:text-[23px] text-[15px]" />
                  </button>
                ) : (
                  <button className="rounded-full" onClick={handleClick}>
                    <BsBookmarkFill className="md:text-[23px] text-[15px]" />
                  </button>
                )}
              </div>
              <div className="svg-sizing p-4">
                <FiShare2 className="md:text-[25px] text-[20px]" />
              </div>
            </div>
          </div>

          <div className=" border-green-500 flex">
            {/* Product image */}
            <div className="md:grid grid-cols-2  md:mt-10 mt-6 md:gap-[80px]">
              <div className="">
                <Image
                  src={`${process.env.API_URL}/uploads/${card.image}`}
                  alt={card.toolName}
                  className="bg-black text-white md:rounded-2xl rounded-lg md:h-[210px] h-[344px]"
                  loading="lazy"
                  // placeholder="blur"
                  // blurDataURL={card.imageBlur}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "100%" }}
                  decoding="async"
                  data-nimg="fill"
                />
              </div>
              <div className="">
                {/* Price per period */}
                <h2 className="md:text-5xl text-[#081120] text-[32px] font-bold font-title mt-8 md:mt-0">
                  {card.priceType == "Free" ? "Free" : "$" + card.price}
                  <span className="text-base ms-2 font-normal text-[#4D5761] ">
                    {card.priceType == "Free" ? "" : "/" + card.pricePeriod}
                  </span>
                </h2>
                {card.priceType == "Freemium" ? (
                  <p className="text-base font-normal text-[#4D5761] mt-2">
                    Basic services are free, advanced features require payment.
                  </p>
                ) : (
                  ""
                )}
                <div className="md:w-[100%]  mt-[26.5px]">
                  <hr />
                </div>

                <div>
                  <div className="mt-4 md:mt-[26px]">
                    {/* Users */}
                    <div className="flex  justify-start items-center">
                      <div className="pr-3">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.5799 12C15.5799 13.98 13.9799 15.58 11.9999 15.58C10.0199 15.58 8.41992 13.98 8.41992 12C8.41992 10.02 10.0199 8.42001 11.9999 8.42001C13.9799 8.42001 15.5799 10.02 15.5799 12Z"
                            stroke="#081120"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12.0001 20.27C15.5301 20.27 18.8201 18.19 21.1101 14.59C22.0101 13.18 22.0101 10.81 21.1101 9.4C18.8201 5.8 15.5301 3.72 12.0001 3.72C8.47009 3.72 5.18009 5.8 2.89009 9.4C1.99009 10.81 1.99009 13.18 2.89009 14.59C5.18009 18.19 8.47009 20.27 12.0001 20.27Z"
                            stroke="#081120"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <h1 className="md:text-xl  md:font-medium font-semibold text-base">
                          {card.visitor} Users
                        </h1>
                      </div>
                    </div>

                    {/* Tool type */}
                    <div className="flex justify-start mt-4 items-center">
                      <div className="pr-[10px]">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.7501 22.5H13.2701C14.2301 22.5 14.8501 21.82 14.6701 20.99L14.2601 19.1801H9.76008L9.35008 20.99C9.17008 21.77 9.85008 22.5 10.7501 22.5Z"
                            stroke="#081120"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M14.2601 19.1701L15.9901 17.63C16.9601 16.77 17.0001 16.17 16.2301 15.2L13.1801 11.33C12.5401 10.52 11.4901 10.52 10.8501 11.33L7.80006 15.2C7.03006 16.17 7.03005 16.8 8.04005 17.63L9.77005 19.1701"
                            stroke="#081120"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12.01 11.12V13.65"
                            stroke="#081120"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.1501 5.19002L10.3701 4.41C9.90008 3.94 9.90008 3.18004 10.3701 2.71004L11.1501 1.93001C11.6201 1.46001 12.3801 1.46001 12.8501 1.93001L13.6301 2.71004C14.1001 3.18004 14.1001 3.94 13.6301 4.41L12.8501 5.19002C12.3801 5.66002 11.6201 5.66002 11.1501 5.19002Z"
                            stroke="#081120"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M19.45 9.81H20.55C21.21 9.81 21.75 10.35 21.75 11.01V12.11C21.75 12.77 21.21 13.3101 20.55 13.3101H19.45C18.79 13.3101 18.25 12.77 18.25 12.11V11.01C18.25 10.35 18.79 9.81 19.45 9.81Z"
                            stroke="#081120"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4.55 9.81H3.45C2.79 9.81 2.25 10.35 2.25 11.01V12.11C2.25 12.77 2.79 13.3101 3.45 13.3101H4.55C5.21 13.3101 5.75 12.77 5.75 12.11V11.01C5.75 10.35 5.21 9.81 4.55 9.81Z"
                            stroke="#081120"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M18.54 10.1L13.24 4.79999"
                            stroke="#081120"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M5.45996 10.1L10.76 4.79999"
                            stroke="#081120"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <h1 className="text-base font-medium">
                          <span className="mr-2 tt">Tool Type:</span>
                          {card.SubCategory.map((sub) => {
                            return (
                              <button
                                key={sub}
                                className="border text-xs text-[#4D5761] ml-3 px-3 py-[6px] rounded-full font-normal"
                              >
                                {sub}
                              </button>
                            );
                          })}
                        </h1>
                      </div>
                    </div>

                    {/* Published date */}
                    <div className="flex justify-start items-center md:mt-4 mt-6">
                      <div className="pr-3">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 2V5"
                            stroke="#081120"
                            strokeWidth="1.5"
                            stroke-miterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16 2V5"
                            stroke="#081120"
                            strokeWidth="1.5"
                            stroke-miterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M3.5 9.08997H20.5"
                            stroke="#081120"
                            strokeWidth="1.5"
                            stroke-miterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                            stroke="#081120"
                            strokeWidth="1.5"
                            stroke-miterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M15.6947 13.7H15.7037"
                            stroke="#081120"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M15.6947 16.7H15.7037"
                            stroke="#081120"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.9955 13.7H12.0045"
                            stroke="#081120"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.9955 16.7H12.0045"
                            stroke="#081120"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8.29431 13.7H8.30329"
                            stroke="#081120"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8.29431 16.7H8.30329"
                            stroke="#081120"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <h1 className="text-base font-medium">
                          Published on {card?.date}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-[30px] md:my-[26.5px] md:w-[100%]">
                  <hr />
                </div>
                {card.facebook == "" &&
                  card.linkedin == "" &&
                  card.twitter == "" &&
                  card.discord == "" ? (
                  <div></div>
                ) : (
                  <div className="social-links mt-4 md:mt-[26px]">
                    {/* link */}
                    <div className="text-[#4D5761] text-base font-normal">
                      <p>Explore {card.toolName} on Social media</p>
                    </div>
                    <div className="mt-[11px]">
                      <div className="flex gap-4 items-center">
                        {card.discord && (
                          <Link
                            href={`https://discordapp.com/users/${card?.discord}`}
                            target="_blank"
                          >
                            <svg
                              width="33"
                              height="33"
                              className="mt-1"
                              viewBox="0 0 71 80"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M60.1045 13.8978C55.5792 11.8214 50.7265 10.2916 45.6527 9.41542C45.5603 9.39851 45.468 9.44077 45.4204 9.52529C44.7963 10.6353 44.105 12.0834 43.6209 13.2216C38.1637 12.4046 32.7345 12.4046 27.3892 13.2216C26.905 12.0581 26.1886 10.6353 25.5617 9.52529C25.5141 9.44359 25.4218 9.40133 25.3294 9.41542C20.2584 10.2888 15.4057 11.8186 10.8776 13.8978C10.8384 13.9147 10.8048 13.9429 10.7825 13.9795C1.57795 27.7309 -0.943561 41.1443 0.293408 54.3914C0.299005 54.4562 0.335386 54.5182 0.385761 54.5576C6.45866 59.0174 12.3413 61.7249 18.1147 63.5195C18.2071 63.5477 18.305 63.5139 18.3638 63.4378C19.7295 61.5728 20.9469 59.6063 21.9907 57.5383C22.0523 57.4172 21.9935 57.2735 21.8676 57.2256C19.9366 56.4931 18.0979 55.6 16.3292 54.5858C16.1893 54.5041 16.1781 54.304 16.3068 54.2082C16.679 53.9293 17.0513 53.6391 17.4067 53.3461C17.471 53.2926 17.5606 53.2813 17.6362 53.3151C29.2558 58.6202 41.8354 58.6202 53.3179 53.3151C53.3935 53.2785 53.4831 53.2898 53.5502 53.3433C53.9057 53.6363 54.2779 53.9293 54.6529 54.2082C54.7816 54.304 54.7732 54.5041 54.6333 54.5858C52.8646 55.6197 51.0259 56.4931 49.0921 57.2228C48.9662 57.2707 48.9102 57.4172 48.9718 57.5383C50.038 59.6034 51.2554 61.5699 52.5959 63.435C52.6519 63.5139 52.7526 63.5477 52.845 63.5195C58.6464 61.7249 64.529 59.0174 70.6019 54.5576C70.6551 54.5182 70.6887 54.459 70.6943 54.3942C72.1747 39.0791 68.2147 25.7757 60.1968 13.9823C60.1772 13.9429 60.1437 13.9147 60.1045 13.8978ZM23.7259 46.3253C20.2276 46.3253 17.3451 43.1136 17.3451 39.1693C17.3451 35.225 20.1717 32.0133 23.7259 32.0133C27.308 32.0133 30.1626 35.2532 30.1066 39.1693C30.1066 43.1136 27.28 46.3253 23.7259 46.3253ZM47.3178 46.3253C43.8196 46.3253 40.9371 43.1136 40.9371 39.1693C40.9371 35.225 43.7636 32.0133 47.3178 32.0133C50.9 32.0133 53.7545 35.2532 53.6986 39.1693C53.6986 43.1136 50.9 46.3253 47.3178 46.3253Z"
                                fill="#5865F2"
                              />
                            </svg>
                          </Link>
                        )}
                        {card.twitter && (
                          <div>
                            <Link
                              href={`https://twitter.com/${card.twitter}`}
                              target="_blank"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                viewBox="0 0 26 26"
                                fill="none"
                              >
                                <g clipPath="url(#clip0_776_12898)">
                                  <path
                                    d="M13.0004 25.9997C20.18 25.9997 26.0003 20.1795 26.0003 12.9998C26.0003 5.82019 20.18 -6.10352e-05 13.0004 -6.10352e-05C5.82073 -6.10352e-05 0.000488281 5.82019 0.000488281 12.9998C0.000488281 20.1795 5.82073 25.9997 13.0004 25.9997Z"
                                    fill="#55ACEE"
                                  />
                                  <path
                                    d="M20.9631 9.34283C20.406 9.58986 19.8068 9.75694 19.1783 9.83156C19.82 9.44711 20.3124 8.83881 20.5449 8.11278C19.9444 8.46896 19.2791 8.72734 18.5716 8.86662C18.0048 8.26295 17.1972 7.88568 16.3029 7.88568C14.5872 7.88568 13.1956 9.27725 13.1956 10.993C13.1956 11.2366 13.2232 11.4736 13.2765 11.7012C10.694 11.5717 8.40424 10.3347 6.87155 8.45413C6.60412 8.91296 6.45072 9.44711 6.45072 10.0165C6.45072 11.0943 6.9997 12.0458 7.83302 12.6029C7.32389 12.5869 6.84443 12.4472 6.42569 12.2138C6.42546 12.227 6.42546 12.2402 6.42546 12.2532C6.42546 13.7588 7.497 15.0146 8.91823 15.2998C8.65776 15.3712 8.38269 15.409 8.09974 15.409C7.89906 15.409 7.70463 15.3897 7.51508 15.3536C7.91042 16.5878 9.05774 17.4862 10.4178 17.5115C9.35413 18.3451 8.01446 18.8417 6.55824 18.8417C6.30797 18.8417 6.06001 18.8271 5.81738 18.7981C7.1918 19.6801 8.82554 20.1943 10.5802 20.1943C16.2958 20.1943 19.4214 15.4595 19.4214 11.3529C19.4214 11.2183 19.4184 11.0841 19.4124 10.9511C20.02 10.5131 20.5467 9.96597 20.9631 9.34283Z"
                                    fill="white"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_776_12898">
                                    <rect width="26" height="26" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </Link>
                          </div>
                        )}
                        {card.linkedin && (
                          <div>
                            <div>
                              <Link
                                href={`https://www.linkedin.com/in/${card.linkedin}`}
                                target="_blank"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="26"
                                  height="26"
                                  viewBox="0 0 26 26"
                                  fill="none"
                                >
                                  <g clipPath="url(#clip0_776_12903)">
                                    <path
                                      d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                                      fill="#007AB9"
                                    />
                                    <path
                                      d="M20.7674 14.046V19.4056H17.66V14.4052C17.66 13.1496 17.2114 12.2922 16.0863 12.2922C15.2277 12.2922 14.7177 12.8695 14.4924 13.4284C14.4106 13.6282 14.3895 13.9056 14.3895 14.1857V19.4054H11.2819C11.2819 19.4054 11.3237 10.9363 11.2819 10.0597H14.3898V11.384C14.3835 11.3945 14.3747 11.4047 14.3691 11.4146H14.3898V11.384C14.8027 10.7486 15.5392 9.84021 17.1903 9.84021C19.2347 9.84021 20.7674 11.1759 20.7674 14.046ZM8.03113 5.55469C6.96815 5.55469 6.27271 6.25245 6.27271 7.1692C6.27271 8.06649 6.94799 8.78441 7.99034 8.78441H8.0105C9.09434 8.78441 9.76823 8.06649 9.76823 7.1692C9.74761 6.25245 9.09434 5.55469 8.03113 5.55469ZM6.4574 19.4056H9.56384V10.0597H6.4574V19.4056Z"
                                      fill="white"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_776_12903">
                                      <rect
                                        width="26"
                                        height="26"
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </Link>
                            </div>
                          </div>
                        )}
                        {card.facebook && (
                          <div>
                            <Link
                              href={`https://www.facebook.com/${card.facebook}`}
                              target="_blank"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                viewBox="0 0 26 26"
                                fill="none"
                              >
                                <g clipPath="url(#clip0_1454_750)">
                                  <path
                                    d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                                    fill="#3C5A9A"
                                  />
                                  <path
                                    d="M17.227 3.99023H14.3472C12.6382 3.99023 10.7373 4.70901 10.7373 7.18625C10.7457 8.04941 10.7373 8.87607 10.7373 9.80642H8.76025V12.9525H10.7985V22.0096H14.5439V12.8927H17.0159L17.2396 9.79759H14.4793C14.4793 9.79759 14.4855 8.42074 14.4793 8.0209C14.4793 7.04195 15.498 7.09801 15.5592 7.09801C16.044 7.09801 16.9865 7.09942 17.2284 7.09801V3.99023H17.227Z"
                                    fill="white"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_1454_750">
                                    <rect width="26" height="26" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="my-[30px] md:my-[60px] md:w-[100%]">
          <hr />
        </div>
      </div>

      {/* product descriptation and workings */}
      <div className="mb-[40px]">
        <div className="">
          <div
            className="mt-[30px] md:mt-[60px]"
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              backgroundColor: "#F3F4F6",
              borderRadius: "16px",
            }}
          >
            <button
              className="text-[#081120] font-medium"
              onClick={() => setIsToggled(false)}
              style={{
                borderRadius: "8px",
                height: "49px",
                margin: "8px",
                width: "600px",
                fontSize: "20px",
                backgroundColor: !isToggled ? "#FFFFFF" : "#F3F4F6",
              }}
            >
              Description
            </button>
            <button
              className="text-[#081120] font-medium"
              onClick={() => setIsToggled(true)}
              style={{
                borderRadius: "8px",
                height: "49px",
                margin: "8px",
                width: "600px",
                fontSize: "20px",
                backgroundColor: isToggled ? "#FFFFFF" : "#F3F4F6",
              }}
            >
              How to use
            </button>
          </div>
          <div className="flex justify-center mt-8">
            <audio key={isToggled ? card.worksAudio : card.descriptionAudio} controls className="md:w-2/4">
              <source
                src={`${process.env.API_URL}/audio/${isToggled ? card.worksAudio : card.descriptionAudio}`}
                type="audio/mp3"
              />
            </audio>
          </div>
          {isToggled ? (
            <div
              className="mt-8 leading-7"
              dangerouslySetInnerHTML={{ __html: sanitize(card?.works) }}
            ></div>
          ) : (
            <div
              className="mt-8 leading-7"
              dangerouslySetInnerHTML={{ __html: sanitize(card?.description) }}
            ></div>
          )}
        </div>
      </div>
      <div className="flex justify-center md:mt-10 mt-6 border-b w-11/12 mx-auto md:pb-[60px] pb-[30px]">
        <Link target="_blank" href={card.link}>
          <svg
            width="172"
            height="55"
            viewBox="0 0 172 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.5" width="171" height="55" rx="12" fill="#6b29ff" />
            <path
              d="M36.7955 21.8636L40.0341 31.3409H40.1648L43.4034 21.8636H45.3011L41.1136 33.5H39.0852L34.8977 21.8636H36.7955ZM46.8452 33.5V24.7727H48.544V33.5H46.8452ZM47.7031 23.4261C47.4077 23.4261 47.1539 23.3277 46.9418 23.1307C46.7334 22.9299 46.6293 22.6913 46.6293 22.4148C46.6293 22.1345 46.7334 21.8958 46.9418 21.6989C47.1539 21.4981 47.4077 21.3977 47.7031 21.3977C47.9986 21.3977 48.2505 21.4981 48.4588 21.6989C48.6709 21.8958 48.777 22.1345 48.777 22.4148C48.777 22.6913 48.6709 22.9299 48.4588 23.1307C48.2505 23.3277 47.9986 23.4261 47.7031 23.4261ZM57.3693 26.9034L55.8295 27.1761C55.7652 26.9792 55.6629 26.7917 55.5227 26.6136C55.3864 26.4356 55.2008 26.2898 54.9659 26.1761C54.7311 26.0625 54.4375 26.0057 54.0852 26.0057C53.6042 26.0057 53.2027 26.1136 52.8807 26.3295C52.5587 26.5417 52.3977 26.8163 52.3977 27.1534C52.3977 27.4451 52.5057 27.6799 52.7216 27.858C52.9375 28.036 53.286 28.1818 53.767 28.2955L55.1534 28.6136C55.9564 28.7992 56.5549 29.0852 56.9489 29.4716C57.3428 29.858 57.5398 30.3598 57.5398 30.9773C57.5398 31.5 57.3883 31.9659 57.0852 32.375C56.786 32.7803 56.3674 33.0985 55.8295 33.3295C55.2955 33.5606 54.6761 33.6761 53.9716 33.6761C52.9943 33.6761 52.197 33.4678 51.5795 33.0511C50.9621 32.6307 50.5833 32.0341 50.4432 31.2614L52.0852 31.0114C52.1875 31.4394 52.3977 31.7633 52.7159 31.983C53.0341 32.1989 53.4489 32.3068 53.9602 32.3068C54.517 32.3068 54.9621 32.1913 55.2955 31.9602C55.6288 31.7254 55.7955 31.4394 55.7955 31.1023C55.7955 30.8295 55.6932 30.6004 55.4886 30.4148C55.2879 30.2292 54.9792 30.089 54.5625 29.9943L53.0852 29.6705C52.2708 29.4848 51.6686 29.1894 51.2784 28.7841C50.892 28.3788 50.6989 27.8655 50.6989 27.2443C50.6989 26.7292 50.8428 26.2784 51.1307 25.892C51.4186 25.5057 51.8163 25.2045 52.3239 24.9886C52.8314 24.7689 53.4129 24.6591 54.0682 24.6591C55.0114 24.6591 55.7538 24.8636 56.2955 25.2727C56.8371 25.678 57.1951 26.2216 57.3693 26.9034ZM59.4077 33.5V24.7727H61.1065V33.5H59.4077ZM60.2656 23.4261C59.9702 23.4261 59.7164 23.3277 59.5043 23.1307C59.2959 22.9299 59.1918 22.6913 59.1918 22.4148C59.1918 22.1345 59.2959 21.8958 59.5043 21.6989C59.7164 21.4981 59.9702 21.3977 60.2656 21.3977C60.5611 21.3977 60.813 21.4981 61.0213 21.6989C61.2334 21.8958 61.3395 22.1345 61.3395 22.4148C61.3395 22.6913 61.2334 22.9299 61.0213 23.1307C60.813 23.3277 60.5611 23.4261 60.2656 23.4261ZM67.4659 24.7727V26.1364H62.6989V24.7727H67.4659ZM63.9773 22.6818H65.6761V30.9375C65.6761 31.267 65.7254 31.5152 65.8239 31.6818C65.9223 31.8447 66.0492 31.9564 66.2045 32.017C66.3636 32.0739 66.536 32.1023 66.7216 32.1023C66.858 32.1023 66.9773 32.0928 67.0795 32.0739C67.1818 32.0549 67.2614 32.0398 67.3182 32.0284L67.625 33.4318C67.5265 33.4697 67.3864 33.5076 67.2045 33.5455C67.0227 33.5871 66.7955 33.6098 66.5227 33.6136C66.0758 33.6212 65.6591 33.5417 65.2727 33.375C64.8864 33.2083 64.5739 32.9508 64.3352 32.6023C64.0966 32.2538 63.9773 31.8163 63.9773 31.2898V22.6818ZM83.108 21.8636V33.5H81.4943L75.5795 24.9659H75.4716V33.5H73.7159V21.8636H75.3409L81.2614 30.4091H81.3693V21.8636H83.108ZM89.2088 33.6761C88.3906 33.6761 87.6766 33.4886 87.0668 33.1136C86.4569 32.7386 85.9834 32.214 85.6463 31.5398C85.3092 30.8655 85.1406 30.0777 85.1406 29.1761C85.1406 28.2708 85.3092 27.4792 85.6463 26.8011C85.9834 26.1231 86.4569 25.5966 87.0668 25.2216C87.6766 24.8466 88.3906 24.6591 89.2088 24.6591C90.027 24.6591 90.741 24.8466 91.3509 25.2216C91.9607 25.5966 92.4342 26.1231 92.7713 26.8011C93.1084 27.4792 93.277 28.2708 93.277 29.1761C93.277 30.0777 93.1084 30.8655 92.7713 31.5398C92.4342 32.214 91.9607 32.7386 91.3509 33.1136C90.741 33.4886 90.027 33.6761 89.2088 33.6761ZM89.2145 32.25C89.7448 32.25 90.1842 32.1098 90.5327 31.8295C90.8812 31.5492 91.1387 31.1761 91.3054 30.7102C91.4759 30.2443 91.5611 29.7311 91.5611 29.1705C91.5611 28.6136 91.4759 28.1023 91.3054 27.6364C91.1387 27.1667 90.8812 26.7898 90.5327 26.5057C90.1842 26.2216 89.7448 26.0795 89.2145 26.0795C88.6804 26.0795 88.2372 26.2216 87.8849 26.5057C87.5365 26.7898 87.277 27.1667 87.1065 27.6364C86.9399 28.1023 86.8565 28.6136 86.8565 29.1705C86.8565 29.7311 86.9399 30.2443 87.1065 30.7102C87.277 31.1761 87.5365 31.5492 87.8849 31.8295C88.2372 32.1098 88.6804 32.25 89.2145 32.25ZM96.7997 33.5L94.2315 24.7727H95.9872L97.6974 31.1818H97.7827L99.4986 24.7727H101.254L102.959 31.1534H103.044L104.743 24.7727H106.499L103.936 33.5H102.203L100.43 27.1989H100.3L98.527 33.5H96.7997Z"
              fill="white"
            />
            <g clipPath="url(#clip0_810_8679)">
              <path
                d="M119.826 18.9482L119.793 18.8584C119.649 18.4677 119.671 18.1329 119.859 17.8636C120.018 17.6359 120.28 17.5 120.561 17.5C120.79 17.5 121.012 17.5841 121.241 17.7568L134.742 26.3994L134.805 26.4447C135.12 26.6937 135.301 27.0554 135.302 27.4372C135.303 27.819 135.125 28.1818 134.812 28.4329L134.781 28.4574L121.243 37.2389C121.013 37.4145 120.789 37.5 120.559 37.5C120.279 37.5 120.017 37.3646 119.858 37.1381C119.671 36.8699 119.647 36.536 119.789 36.1453L119.822 36.0563L125.448 27.6871C125.477 27.5466 125.477 27.3354 125.447 27.1947L119.826 18.9482ZM122.84 34.3509L133.49 27.4428L133.418 27.3964H127.021C127.026 27.7117 126.983 28.0297 126.889 28.2873L126.857 28.3763L122.84 34.3509Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_810_8679">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="matrix(-1 0 0 1 137.5 17.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Rating;
