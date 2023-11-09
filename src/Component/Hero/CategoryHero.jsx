import { useSwipeable } from "react-swipeable";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

// Import Swiper styles
import "swiper/css";

const CategoryHero = ({ categoryData, allsubcategoriesData }) => {
  const navigate = useRouter();
  const [data, setData] = useState([]);
  const firstSixItem = data;
  const [visibleStartIndex, setVisibleStartIndex] = useState(0);
  const [maxStartIndex, setMaxStartIndex] = useState(0);

  const swiperRef = useRef(null);

  const goPrev = () => {
    if (swiperRef.current !== null) {
      swiperRef.current.slidePrev();
    }
  };

  const goNext = () => {
    if (swiperRef.current !== null) {
      swiperRef.current.slideNext();
    }
  };

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

  const handleSearch = () => { };

  const handleBlur = () => { };

  const handleClick = (event, item) => {
    navigate.push(`/category/${item.slug}`);
  };

  return (
    <div>
      <div className="text-center ">
        <div className=" h-fit p-0">
          <div className="hero-content text-center p-0">
            <div className="max-w-3xl p-0">
              <h1 className="md:text-5xl md:w-[592px] text-4xl font-bold text-[#081120] text-center w-fit mx-auto md:mb-6 mb-4">
                Browse {categoryData.count}+ Best AI {categoryData.Title} Tools
              </h1>
              <div className="w-5/12 h-0 border-b border-[#E5E7EB] mx-auto md:mb-6 mb-4"></div>
              <p className={`hero-subtitle md:mb-11 mb-6`}>
                {categoryData.message}
              </p>

              {/* search var  */}
              <div className="input-container mx-auto md:w-[800px] h-[52px] w-full">
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

              {/* populer Categories  */}
              <div className="popular-section md:mt-6 mt-4 max">
                <p className="popular-title mb-4 font-paragraph h-6 text-base">
                  Popular Categories
                </p>

                <div className=" md:w-[790px] overflow-hidden py-2">
                  <div className="flex justify-start items-center md:gap-2 ">
                    {/* pre button  */}
                    <button
                      onClick={goPrev}
                      className="hidden md:block rounded-full h-9 w-9 border-[1.4px] text-[#6C737F]"
                    >
                      <BsArrowLeftShort className="h-8 w-8" />
                    </button>

                    {/* swiper  */}
                    <div className="w-[300px] md:w-[690px] mx-auto">
                      <Swiper
                        slidesPerView={1}
                        // grid={{ rows: 2 }}
                        spaceBetween={10}
                        navigation={{
                          prevEl: ".swiper-button-prev",
                          nextEl: ".swiper-button-next",
                        }}
                        //autowidth
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        className="mySwiper"
                        breakpoints={{
                          640: {
                            slidesPerView: 1,
                          },
                        }}
                      >
                        {firstSixItem.map((item, index) => (
                          <SwiperSlide>
                            <button
                              key={index}
                              // name={item.SubCategory}
                              onClick={(e) => handleClick(e, item)}
                              className="font-normal item h-fit w-full mr-0 md:mr-3 text-[#4D5761] whitespace-nowrap border-2 cursor-pointer hover:scale-105 ease-in-out duration-30 p-text px-4 py-auto bg-transparent"
                            >
                              {item.SubCategory}
                            </button>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>

                    {/* next button  */}
                    <button
                      onClick={goNext}
                      className="rounded-full h-9 w-9 border-[1.4px]"
                    >
                      <BsArrowRightShort className="h-8 w-8 font-extralight text-[#6C737F]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryHero;
