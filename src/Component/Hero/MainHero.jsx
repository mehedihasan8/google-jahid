import { useSwipeable } from "react-swipeable";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Hero = ({ allsubcategoriesData }) => {
  const navigate = useRouter();

  const [data, setData] = useState([]);
  const firstSixItem = data;
  const [visibleStartIndex, setVisibleStartIndex] = useState(0);
  const [maxStartIndex, setMaxStartIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setVisibleStartIndex((prev) => Math.min(prev + 7, maxStartIndex)),
    onSwipedRight: () => setVisibleStartIndex((prev) => Math.max(prev - 7, 0)),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  useEffect(() => {
    setData(allsubcategoriesData);
    setMaxStartIndex(Math.max(allsubcategoriesData.length - 7, 0));
  }, []);

  const handleKeyPress = (e) => {
    if (e.key !== "Enter") {
    }
  };

  const handleSearch = () => {};

  const handleBlur = () => {};

  const handleClick = (event, item) => {
    navigate.push(`/category/${item.slug}`);
  };

  return (
    <div className="hero-content text-center mt-16 md:mt-24">
      <div className="max-w-3xl p-0">
        <h1 className="md:text-[56px] text-[35px]  md:font-bold hero-title mb-6">
          We are listing the best AI
          <br /> tools Everyday.
        </h1>
        <p className={`hero-subtitle font-paragraph md:mb-11 mb-6`}>
          Find the best AI tools for your needs. Go to the filter <br /> and
          choose your Category.{" "}
        </p>

        <div className="relative input-container mx-auto md:w-[478px] h-[52px] w-full">
          <div
            onBlur={handleBlur}
            className="h-full w-full flex justify-between"
          >
            <input
              onKeyUp={handleKeyPress}
              type="text"
              placeholder="Search"
              className="border-0 w-full focus:ring-0 bg-[#F3F4F6] focus:outline-0 text-base font-paragraph my-[14px] ml-6"
            />
            <div className="">
              {/* <Ripples color="#bcc3c5"> */}
              <button
                onClick={handleSearch}
                className=" py-auto h-full w-full pr-6 pl-4 bg-[#F3F4F6] rounded-2xl"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_793_4357)">
                    <path
                      d="M19.9998 18.8222L14.7815 13.6039C16.137 11.9461 16.8035 9.83066 16.643 7.69521C16.4826 5.55977 15.5075 3.56769 13.9195 2.13101C12.3314 0.69434 10.252 -0.0770085 8.11119 -0.023482C5.97039 0.0300445 3.93207 0.904351 2.41783 2.41859C0.903588 3.93283 0.0292815 5.97116 -0.024245 8.11195C-0.0777715 10.2527 0.693577 12.3322 2.13025 13.9202C3.56693 15.5083 5.55901 16.4833 7.69445 16.6438C9.82989 16.8042 11.9453 16.1378 13.6032 14.7822L18.8215 20.0006L19.9998 18.8222ZM8.33315 15.0006C7.01461 15.0006 5.72568 14.6096 4.62935 13.877C3.53302 13.1445 2.67854 12.1033 2.17395 10.8851C1.66937 9.66696 1.53735 8.32652 1.79458 7.03331C2.05182 5.74011 2.68676 4.55222 3.61911 3.61987C4.55146 2.68752 5.73934 2.05258 7.03255 1.79535C8.32576 1.53811 9.6662 1.67013 10.8844 2.17472C12.1025 2.6793 13.1437 3.53378 13.8763 4.63011C14.6088 5.72644 14.9998 7.01537 14.9998 8.33391C14.9978 10.1014 14.2948 11.796 13.045 13.0458C11.7952 14.2956 10.1007 14.9986 8.33315 15.0006Z"
                      fill="#4D5761"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_793_4357">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              {/* </Ripples> */}
            </div>
          </div>
        </div>
        <div className="popular-section md:mt-6 mt-4 max">
          <p className="popular-title mb-4 font-paragraph h-6 text-base">
            Popular Categories
          </p>

          <div className="flex items-center md:gap-6 gap-2 cata">
            <div className="">
              {/* Main Wrapper */}
              <div>
                <div
                  className="items-container md:w-[781px]"
                  style={{
                    // 6 items of 110px each
                    overflow: "hidden", // Ensure children don't overflow
                  }}
                >
                  <div
                    className="popular-item flex md:gap-4 gap-2 my-1 justify-center"
                    {...handlers}
                    style={{
                      transform: `translateX(-${visibleStartIndex * 110}px)`,
                    }}
                  >
                    {firstSixItem.map((item, index) => (
                      <button
                        key={index}
                        name={item.SubCategory}
                        onClick={(e) => handleClick(e, item)}
                        className="item cursor-pointer hover:scale-105 ease-in-out duration-30 'hidden'p-text px-4 py-auto bg-transparent"
                        style={{
                          height: "fit-content",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          padding: "-1px",
                          fontSize: "14px",
                          textOverflow: "ellipsis",
                          display: `${
                            index < visibleStartIndex ||
                            index >= visibleStartIndex + 6
                              ? "none"
                              : "block"
                          }`,
                        }}
                      >
                        {item.SubCategory}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ... Rest of your component */}
      </div>
    </div>
  );
};

export default Hero;
