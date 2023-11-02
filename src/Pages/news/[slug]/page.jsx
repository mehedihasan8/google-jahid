import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import './SingleNews.css'

const SingleNews = () => {
    const { slug } = useParams();
    const [item, setItem] = useState(null);
    const [cata, setCata] = useState(null);

    useEffect(() => {
        if (slug) {
            fetch(`http://localhost:3000/news/${slug}`)
                .then(response => response.json())
                .then(data => {
                    // Update the state with the data for the specific news item.
                    setItem(data);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
        // Make a GET request to your backend API to fetch the news item based on the `id`.



    }, []);

    useEffect(() => {
        fetch(`http://localhost:3000/category`)
            .then(response => response.json())
            .then(data => {
                setCata(data)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    if (!item) {
        return <span className="loading loading-ring md:w-40 md:h-40 w-20 h-20 md:ml-[45%] ml-[45%] md:my-40 my-20"></span>;
    }

    const formateDte = (date)=>{
        const months = [
          "January", "February", "March", "April",
          "May", "June", "July", "August",
          "September", "October", "November", "December"
        ]
        const dateSplit = date.split('/')
        const day = parseInt(dateSplit[0])
        const month = months[parseInt(dateSplit[1])-1]
        const year = parseInt(dateSplit[2])
        return `${month} ${day}, ${year}`
      }

    return (
        <div className='mx-auto font-paragraph '>
            <div className='flex items-center ml-[3.5%] md:ml-[1.3%]'>
                <a href='/' className='text-[#081120] font-paragraph text-sm'>Home</a>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <g clipPath="url(#clip0_810_9466)">
                        <path d="M8.3332 5.5L7.1582 6.675L10.9749 10.5L7.1582 14.325L8.3332 15.5L13.3332 10.5L8.3332 5.5Z" fill="#6C737F" />
                    </g>
                    <defs>
                        <clipPath id="clip0_810_9466">
                            <rect width="20" height="20" fill="white" transform="translate(0 0.5)" />
                        </clipPath>
                    </defs>
                </svg>
                <p className='text-[#6C737F] font-paragraph text-sm'>News Page</p>
            </div>
            {/* Single News Section */}
            <div className='md:pt-[40px] mb-[40px] pt-6 md:mx-0 mx-4'>
                <div className='md:p-10 px-4 pt-4 pb-7 mb-26 border-[#E5E7EB] border rounded-2xl'>
                    {/* Hero section */}
                    <div className="hero md:mb-10 mb-6 rounded-lg md:h-[394px] h-[210px] mx-auto" style={{ backgroundImage: `url(http://localhost:3000/uploads/${item.image})` }}>
                    </div>
                    <div className='md:grid md:grid-cols-2 '>
                        {/* right-div */}
                        <div className=' md:w-[752px]'>
                            <div className='date'>
                                <p className='date-title font-medium text-xl' >Tools</p>
                                <div className=" invisible vertical-line"></div>
                                <p className='date-dates hidden'>{formateDte(item.date)}</p>
                            </div>
                            <div className='single-title mb-6 font-title'>
                                {item.newsTitle}
                            </div>
                            {/* {saiful er kahini } */}
                            <div className='hide-scrollbar'>
                                <div dangerouslySetInnerHTML={{ __html: item.newsBody }}>

                                </div>
                            </div>

                        </div>

                        {/* Left Div */}
                        <div className='md:w-[398px] w-full md:ml-[33%] mx-auto md:mx-0 mt-7 md:mt-0'>
                            <div className='small-blue-card md:p-[40px] p-6'>
                                <div className='small-card-title font-title'>
                                    Explore all of our Ai tools now
                                </div>
                                <div className='small-card-text'>
                                    Lorem ipsum dolor sit amet consectetur. Scelerisque tellus aliquet cursus faucibus sit neque duis senectus.
                                    <button className='explore-btn explore-btn-text mt-6 '>
                                         Explore Now
                                    </button>
                                </div>
                            </div>
                            {/* Popular */}


                            <div className='category mt-6 mb-10  text-xl font-paragraph font-medium'>
                                <div className='text-xl font-paragraph font-normal'>Popular Categories</div>
                                <div className='flex flex-wrap gap-4 mt-4 text-lg font-normal'>
                                    {cata?.map((subItem, index) => (
                                        <p style={{textOverflow: 'ellipsis', overflow:'hidden'}} className='h-fit w-fit border rounded-3xl text-center py-2 px-4 font-paragraph font-normal text-sm text-[#4D5761]' key={index}>{subItem.Title}</p>
                                    ))}
                                </div>
                            </div>



                            <div className='category mb-10 text-xl font-paragraph font-medium'>
                                <div className='text-lg font-normal w-full'>Tags</div>
                                <div className='flex flex-wrap gap-4  mt-2 text-lg font-normal w-full p-2 font-paragraph text-[#4D5761]' >
                                    <p className='h-fit w-fit border rounded-3xl text-center py-2 px-4 font-paragraph font-normal text-sm text-[#4D5761]'>Ai Detection</p>
                                    <p className='h-fit w-fit border rounded-3xl text-center py-2 px-4 font-paragraph font-normal text-sm text-[#4D5761]'>Github</p>
                                    <p className='h-fit w-fit border rounded-3xl text-center py-2 px-4 font-paragraph font-normal text-sm text-[#4D5761]'>Image</p>
                                    <p className='h-fit w-fit border rounded-3xl text-center py-2 px-4 font-paragraph font-normal text-sm text-[#4D5761]'>Machine</p>
                                    <p className='h-fit w-fit border rounded-3xl text-center py-2 px-4 font-paragraph font-normal text-sm text-[#4D5761]'>Inspiration</p>
                                    <p className='h-fit w-fit border rounded-3xl text-center py-2 px-4 font-paragraph font-normal text-sm text-[#4D5761]'>Code</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='large-card md:mt-10 mb-15'>
                        <div className='large-right font-title '>
                            <p className='font font-bold text-[56px]'>Let’s Contact 
                            <br />With Us.</p>
                        </div>
                        <div className='vertical'>
                        </div>
                        <div className='large-left'>
                            <div className='text-paragraph text-base font-normal text-white '>
                                Lorem ipsum dolor sit amet consectetur. Scelerisque tellus aliquet cursus faucibus sit neque duis senectus.
                                <button className='explore-btn explore-btn-text font-medium text-paragraph text-base  mt-6  '>
                                    Explore Now
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};


export default SingleNews;