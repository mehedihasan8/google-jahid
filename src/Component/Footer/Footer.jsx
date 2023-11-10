import Link from "next/link";
const Footer = () => {
  return (
    <div className="md:h-[318px] h-fit bg-[#F9FAFB] mt-10 md:my-0 md:pb-0">
      <div className="font-paragraph bg-[#F9FAFB]  md:pt-[80px] pt-[64px] md:pb-[60px] w-full px-4 md:px-0">
        <footer className="mt-6 md:mt-0 md:max-w-[1280px] w-full text-base font-paragraph mx-auto flex flex-col md:flex-row items-center">
          <div className="flex items-center w-full md:w-[70%] justify-between ">
            <div className="h-[94px] w-full my-auto border-r md:border-0 border-[#D2D6DB]">
              <Link
                href="/privacy-policy"
                className="link link-hover nav-text block mb-[11px]"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="link link-hover nav-text block mb-[11px]"
              >
                Term of Service
              </Link>
              <Link
                href="/about"
                className="link mb-7 link-hover nav-text block"
              >
                About Us
              </Link>
            </div>
            <div className="divider divider-horizontal hidden md:flex"></div>
            <div className="ml-4 md:ml-0 h-[94px] w-full flex flex-col items-center my-auto ">
              <div className="text-left">
                <Link
                  href="/contact"
                  className="link link-hover nav-text block mb-[11px]"
                >
                  Contact
                </Link>
                <Link
                  href="/about"
                  className="link mb-7 link-hover nav-text block"
                >
                  Request A Feature
                </Link>
              </div>
            </div>
          </div>
          <div className="divider divider-horizontal"></div>

          <div className="md:h-[94px] h-[60px] w-[30%]  flex flex-col md:col-span-1 col-span-2 md:items-end items-center md:my-auto mt-8 md:mt-0">
            <div className="flex flex-col md:items-start items-center">
              <p className="link link-hover nav-text mb-[11px]">Social Link</p>
              <div className="flex justify-between items-center w-[152px]">
                <Link
                  href="https://twitter.com/"
                  target="_blank"
                  className="bg-[#5865F2] w-[26px] h-[26px] flex items-center justify-between rounded-full pl-[5px]"
                >
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.4888 1.02525C15.2711 3.63419 16.1512 6.57699 15.8222 9.96484C15.8208 9.97917 15.8133 9.99233 15.8015 10.001C14.4518 10.9877 13.1442 11.5865 11.8549 11.9836C11.8449 11.9866 11.8341 11.9865 11.8242 11.9831C11.8143 11.9798 11.8056 11.9734 11.7995 11.9649C11.5016 11.5523 11.231 11.1173 10.9939 10.6605C10.9803 10.6336 10.9927 10.6012 11.0207 10.5906C11.4505 10.4293 11.8593 10.2361 12.2524 10.0073C12.2834 9.98919 12.2853 9.945 12.2567 9.92379C12.1733 9.86212 12.0907 9.79731 12.0116 9.7325C11.9968 9.72052 11.9768 9.71816 11.9601 9.72622C9.40773 10.8997 6.61177 10.8997 4.02925 9.72622C4.01249 9.71875 3.99256 9.72131 3.97816 9.73309C3.89926 9.7979 3.81641 9.86212 3.73376 9.92379C3.70516 9.945 3.70753 9.98919 3.73869 10.0073C4.13183 10.2317 4.54055 10.4293 4.96979 10.5913C4.9976 10.6019 5.01082 10.6336 4.99701 10.6605C4.76503 11.1179 4.49439 11.5529 4.19101 11.9655C4.17779 11.9822 4.15609 11.9899 4.13558 11.9836C2.85241 11.5865 1.54477 10.9877 0.195124 10.001C0.18388 9.99233 0.175793 9.97859 0.174609 9.96425C-0.10037 7.03381 0.460043 4.06665 2.50582 1.02466C2.51075 1.01661 2.51825 1.01033 2.52693 1.0066C3.53354 0.546634 4.61196 0.208242 5.7391 0.0149881C5.75961 0.0118457 5.78013 0.0212728 5.79078 0.0393413C5.93005 0.284837 6.08923 0.599661 6.19694 0.856941C7.38503 0.676256 8.59167 0.676256 9.80462 0.856941C9.91232 0.60516 10.066 0.284837 10.2047 0.0393413C10.2096 0.0303777 10.2173 0.0231965 10.2265 0.0188231C10.2358 0.0144496 10.2462 0.0131074 10.2563 0.0149881C11.3841 0.208832 12.4625 0.547223 13.4683 1.0066C13.4772 1.01033 13.4845 1.01661 13.4888 1.02525ZM6.80095 6.59703C6.81337 5.73072 6.17899 5.01387 5.38265 5.01387C4.59282 5.01387 3.96455 5.72444 3.96455 6.59703C3.96455 7.46942 4.60525 8.17999 5.38265 8.17999C6.17268 8.17999 6.80095 7.46942 6.80095 6.59703ZM12.0445 6.59703C12.0569 5.73072 11.4225 5.01387 10.6264 5.01387C9.83637 5.01387 9.2081 5.72444 9.2081 6.59703C9.2081 7.46942 9.8488 8.17999 10.6264 8.17999C11.4225 8.17999 12.0445 7.46942 12.0445 6.59703Z"
                      fill="white"
                    />
                  </svg>
                </Link>
                <Link
                  href="https://facebook.com/"
                  target="_blank"
                  className=" w-[26px] h-[26px] flex items-center justify-between rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_810_8550)">
                      <path
                        d="M13.0004 25.9998C20.18 25.9998 26.0003 20.1795 26.0003 12.9999C26.0003 5.82025 20.18 0 13.0004 0C5.82073 0 0.000488281 5.82025 0.000488281 12.9999C0.000488281 20.1795 5.82073 25.9998 13.0004 25.9998Z"
                        fill="#55ACEE"
                      />
                      <path
                        d="M20.9631 9.34192C20.406 9.58895 19.8068 9.75603 19.1783 9.83065C19.82 9.4462 20.3124 8.83789 20.5449 8.11187C19.9444 8.46804 19.2791 8.72643 18.5716 8.8657C18.0048 8.26203 17.1972 7.88477 16.3029 7.88477C14.5872 7.88477 13.1956 9.27634 13.1956 10.9921C13.1956 11.2357 13.2232 11.4727 13.2765 11.7003C10.694 11.5707 8.40424 10.3337 6.87155 8.45321C6.60412 8.91205 6.45072 9.4462 6.45072 10.0156C6.45072 11.0934 6.9997 12.0449 7.83302 12.602C7.32389 12.586 6.84443 12.4462 6.42569 12.2129C6.42546 12.2261 6.42546 12.2393 6.42546 12.2523C6.42546 13.7579 7.497 15.0136 8.91823 15.2989C8.65776 15.3703 8.38269 15.4081 8.09974 15.4081C7.89906 15.4081 7.70463 15.3888 7.51508 15.3527C7.91042 16.5869 9.05774 17.4853 10.4178 17.5106C9.35413 18.3441 8.01446 18.8407 6.55824 18.8407C6.30797 18.8407 6.06001 18.8261 5.81738 18.7972C7.1918 19.6792 8.82554 20.1934 10.5802 20.1934C16.2958 20.1934 19.4214 15.4586 19.4214 11.352C19.4214 11.2174 19.4184 11.0832 19.4124 10.9502C20.02 10.5122 20.5467 9.96505 20.9631 9.34192Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_810_8550">
                        <rect width="26" height="26" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                <Link
                  href="https://discord.com/"
                  target="_blank"
                  className=" w-[26px] h-[26px] flex items-center justify-between rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_810_8555)">
                      <path
                        d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                        fill="#007AB9"
                      />
                      <path
                        d="M20.7677 14.046V19.4056H17.6603V14.4052C17.6603 13.1496 17.2116 12.2922 16.0866 12.2922C15.228 12.2922 14.7179 12.8695 14.4927 13.4284C14.4109 13.6282 14.3898 13.9056 14.3898 14.1857V19.4054H11.2822C11.2822 19.4054 11.3239 10.9363 11.2822 10.0597H14.39V11.384C14.3838 11.3945 14.3749 11.4047 14.3694 11.4146H14.39V11.384C14.803 10.7486 15.5394 9.84021 17.1906 9.84021C19.2349 9.84021 20.7677 11.1759 20.7677 14.046ZM8.03137 5.55469C6.96839 5.55469 6.27295 6.25245 6.27295 7.1692C6.27295 8.06649 6.94823 8.78441 7.99059 8.78441H8.01075C9.09458 8.78441 9.76847 8.06649 9.76847 7.1692C9.74785 6.25245 9.09458 5.55469 8.03137 5.55469ZM6.45764 19.4056H9.56408V10.0597H6.45764V19.4056Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_810_8555">
                        <rect width="26" height="26" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                <Link
                  href="https://twitter.com/"
                  target="_blank"
                  className=" w-[26px] h-[26px] flex items-center justify-between rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_810_8560)">
                      <path
                        d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                        fill="#3C5A9A"
                      />
                      <path
                        d="M17.227 3.99048H14.3472C12.6382 3.99048 10.7373 4.70925 10.7373 7.18649C10.7457 8.04966 10.7373 8.87632 10.7373 9.80666H8.76025V12.9528H10.7985V22.0098H14.5439V12.893H17.0159L17.2396 9.79784H14.4793C14.4793 9.79784 14.4855 8.42098 14.4793 8.02114C14.4793 7.04219 15.498 7.09825 15.5592 7.09825C16.044 7.09825 16.9865 7.09966 17.2284 7.09825V3.99048H17.227Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_810_8560">
                        <rect width="26" height="26" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <hr className="mx-auto bg-[#D2D6DB] mt-6 mb:mt-0 md:mb-0 w-[1280px]" />
      <p className="text-center w-full text-base font-paragraph h-[70px] flex justify-center items-center">
        Copyright © 2023 - GoodTools.Ai
      </p>
    </div>
  );
};

export default Footer;
