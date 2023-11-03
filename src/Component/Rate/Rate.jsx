import { useContext, useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Progress from "../../pages/Progress/Progress";
import SingleReview from "../SingleReview/SingleReview";
import { AuthContext } from "../Context/AuthProvider";
import Review from "../Review/Review";

const Rate = ({id,name}) => {
    const { user, googleSignIn } = useContext(AuthContext);
    const { toggle, setTrue, setFalse } = useContext(AuthContext);
    const [rating, setRating] = useState(0);
    const [avgRating, setAvgRating] = useState(0)
    const [istar, setIstar] = useState(0)
    const [iistar, setIistar] = useState(0)
    const [iiistar, setIiistar] = useState(0)
    const [ivstar, setIvstar] = useState(0)
    const [vstar, setVstar] = useState(0)
    const [reviews, setReviews] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [available, setAvailable] = useState(false);




    useEffect(()=>{
        if(user){
            fetch(`https://api.goodtools.ai/review/${id}/${user?.email}`)
            .then(res=>res.json())
            .then(data=> setAvailable(data))
        }
    },[user])


    //Responsive rating part

    const [isMobile, setIsMobile] = useState(false)
    const [reviewCount, setReviewCount] = useState(0)

    // initialize screen size type
    useEffect(() => {
        window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false);
    }, [])

    // create an event listener to listen screen size changes
    useEffect(() => {
        //choose the screen size 
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    })

    // handle review to be shown in per frame for different screen size
    useEffect(() => {
        if (isMobile == false && reviewCount % 2 == 1) {
            setReviewCount(reviewCount - 1)
        }
        if (isMobile == true && reviewCount % 2 == 0) {
            if (reviewCount < reviews.length) {
                setReviewCount(reviewCount)
            }
        }
    }, [isMobile])

    // next review
    const handleNext = () => {
        if (!isMobile) {
            if (reviewCount < reviews.length - 2) {
                setReviewCount(reviewCount + 2);
            }
        }
        else {
            if (reviewCount < reviews.length - 1) {
                setReviewCount(reviewCount + 1);
            }
        }
    }


    // previous review
    const handlePrev = () => {
        if (!isMobile) {
            if (reviewCount - 2 >= 0) {
                setReviewCount(reviewCount - 2);
            }
        }
        else {
            if (reviewCount - 1 >= 0) {
                setReviewCount(reviewCount - 1);
            }

        }
    }




    useEffect(() => {
        fetch(`https://api.goodtools.ai/reviews/${id}`)
            .then(data => data.json())
            .then(info => setReviews(info.reverse()))
    }, [])

    useEffect(() => {
        const numRating = reviews.length
        const totalRating = reviews.reduce((accumulator, review) => accumulator + review.rating, 0)
        const ratingsCount = [0, 0, 0, 0, 0]

        reviews.map((review) => {
            const rating = review.rating;
            if (rating > 4) {
                ratingsCount[0]++;
            }
            else if (rating > 3) {
                ratingsCount[1]++;
            }
            else if (rating > 2) {
                ratingsCount[2]++;
            }
            else if (rating > 1) {
                ratingsCount[3]++;
            }
            else if (rating > 0) {
                ratingsCount[4]++;
            }
        })

        setAvgRating((totalRating / numRating).toFixed(1))
        setVstar(Math.round(ratingsCount[0] / numRating * 100))
        setIvstar(Math.round(ratingsCount[1] / numRating * 100))
        setIiistar(Math.round(ratingsCount[2] / numRating * 100))
        setIistar(Math.round(ratingsCount[3] / numRating * 100))
        setIstar(Math.round(ratingsCount[4] / numRating * 100))

    }, [reviews])




    const StarDrawing = (
        <svg width="18" height="17" viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.04894 1.42705C8.3483 0.505738 9.6517 0.50574 9.95106 1.42705L11.2451 5.40983C11.379 5.82185 11.763 6.10081 12.1962 6.10081H16.3839C17.3527 6.10081 17.7554 7.34043 16.9717 7.90983L13.5838 10.3713C13.2333 10.626 13.0866 11.0773 13.2205 11.4894L14.5146 15.4721C14.8139 16.3934 13.7595 17.1596 12.9757 16.5902L9.58778 14.1287C9.2373 13.874 8.7627 13.874 8.41221 14.1287L5.02426 16.5902C4.24054 17.1596 3.18607 16.3934 3.48542 15.4721L4.7795 11.4894C4.91338 11.0773 4.76672 10.626 4.41623 10.3713L1.02827 7.90983C0.244561 7.34043 0.647338 6.10081 1.61606 6.10081H5.8038C6.23703 6.10081 6.62099 5.82185 6.75486 5.40983L8.04894 1.42705Z" />
        </svg>

    );

    const customStyles = {
        itemShapes: StarDrawing,
        activeFillColor: "#FAAF00",
        inactiveFillColor: "#E5E7EB",
    };

    const starSvg = (
        <svg width="40" height="36" viewBox="0 0 40 36" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.8009 1.45479C19.1957 0.317363 20.8043 0.317362 21.1991 1.45479L24.98 12.3486C25.1572 12.8592 25.6385 13.2016 26.1791 13.2016H38.227C39.4767 13.2016 39.9741 14.8175 38.9408 15.5203L29.341 22.0498C28.8665 22.3725 28.6676 22.9734 28.8557 23.5155L32.556 34.1767C32.9568 35.3315 31.6538 36.3298 30.6431 35.6423L20.7138 28.8888C20.283 28.5958 19.717 28.5958 19.2862 28.8888L9.35693 35.6423C8.3462 36.3298 7.04324 35.3315 7.44404 34.1767L11.1443 23.5155C11.3324 22.9734 11.1335 22.3725 10.659 22.0498L1.0592 15.5203C0.0258675 14.8175 0.523316 13.2016 1.77302 13.2016H13.8209C14.3615 13.2016 14.8428 12.8592 15.02 12.3486L18.8009 1.45479Z" />
        </svg>

    )

    const starStyle = {
        itemShapes: starSvg,
        activeFillColor: "#FAAF00",
        inactiveFillColor: "#E5E7EB",
    };


    const handleClick = () => {
        if(user && available){
            setTrue();
        }else if(!user){
            googleSignIn()
            .then((userCredential) => {
                const user = userCredential.user;
                // saveUser(user.displayName, user.email); 
                // toast.success("Google Log in Successful"); 
                // navigate('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                // toast.error(errorCode.substring(5)); 
            });
            // alert('Log in to proceed')
        }
        else {
            alert('You have already reviewed this product')
        }
        
    }

    const customAvailable = ()=>{
        setAvailable(false)
        fetch(`https://api.goodtools.ai/reviews/${id}`)
            .then(data => data.json())
            .then(info => setReviews(info.reverse()))
    }


    return (
        <div>
            <div className="md:px-10 w-full md:mt-[20px] mt-6">

                {/* Rating section */}
                <div className="md:grid grid-cols-2 mb-20 md:h-[375px] gap-x-20 hide-scrollbar">
                    <div className="hide-scrollbar ">

                        {/* Average rating */}
                        <div className="md:flex text-center items-center pb-6 md:pb-[30px] border-b border-[#E5E7EB]">
                            <span className="font-bold text-[32px]">{isNaN(avgRating) ? '0.0' : avgRating}</span>
                            <Rating
                                style={{ display: "inline-flex", maxWidth: "126px", maxHeight: "22px", gap: "4px", margin: "0px 12px 0px 12px" }}
                                value={isNaN(avgRating) ? 0 : avgRating}
                                itemStyles={customStyles}
                                readOnly
                            />
                            <span className="text[#4D5761] text-base font-paragraph text-[#4D5761] font-normal block text-center mt-2">Based on {reviews.length} rating</span>
                        </div>

                        <p className="text-[#081120]  text-xl font-medium my-[30px]">Overall Rating</p>


                        {/* Progress bars */}
                        <div className="gap-4 font-inter font-normal font-paragraph text-[#4D5761]">
                            <Progress className="mb-4" rating="5" val={vstar}></Progress>
                            <Progress className="mb-4" rating="4" val={ivstar}></Progress>
                            <Progress className="mb-4" rating="3" val={iiistar}></Progress>
                            <Progress className="mb-4" rating="2" val={iistar}></Progress>
                            <Progress rating="1" val={istar}></Progress>

                        </div>
                    </div>

                    <div className="relative">
                        {/* Rate item */}
                        <div className="md:absolute top-0 right-0 p-[40px] mt-7 md:mt-0 border rounded-[20px] w-full md:w-[100%] h-fit md:h-fit">
                            <div className="text-2xl text-[#081120] font-bold mb-[20px]">What do you think about {name}?</div>
                            <div className="text-sm font-normal text-[#4D5761]  mb-[32px]">If you have a moment, it would be greatly appreciated if you<br />could leave a review to share your thoughts with the<br />community. Your feedback is valuable to us and helps us<br />improve our services. Thank you!</div>
                            {/* Stars */}
                            <div className=" w-full">
                                <Rating
                                    style={{ maxWidth: '260px', maxHeight: '44px', gap: '7px', margin: '0px auto 24px auto' }}
                                    itemStyles={starStyle}
                                    value={rating}
                                    items={5}
                                    onChange={setRating}
                                />
                            </div>

                            {/* Rate button */}
                            <div onClick={handleClick} className="w-full flex justify-center">
                                <button className="border border-[#E5E7EB] rounded-xl mt-[6px] px-[34px] py-[16px] flex items-center justify-center w-fit">
                                    <span className="text-base font-medium mr-4 text-[#4D5761]">Rate {name}</span>
                                    <svg className="h-5" width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.326234 1.94821L0.293166 1.85842C0.149117 1.46766 0.171251 1.13289 0.359132 0.863644C0.517803 0.635893 0.780383 0.5 1.06137 0.5C1.28963 0.5 1.51241 0.584108 1.74131 0.756758L15.2421 9.39944L15.3054 9.44469C15.6199 9.69366 15.801 10.0554 15.8022 10.4372C15.8035 10.819 15.6246 11.1818 15.3117 11.4329L15.2813 11.4574L1.7427 20.2389C1.51299 20.4145 1.28896 20.5 1.05884 20.5C0.778961 20.5 0.51716 20.3646 0.358388 20.1381C0.170609 19.8699 0.147322 19.536 0.289409 19.1453L0.321733 19.0563L5.948 10.6871C5.97717 10.5466 5.9768 10.3354 5.94708 10.1947L0.326234 1.94821ZM3.34021 17.3509L13.9905 10.4428L13.9181 10.3964H7.521C7.52598 10.7117 7.48289 11.0297 7.38927 11.2873L7.35685 11.3763L3.34021 17.3509Z" fill="#4D5761" />
                                    </svg>

                                </button>

                                {/* Conditional rendering of modal */}
                                {isModalOpen && <Review />}


                            </div>
                            { (toggle && available) && <Review func={customAvailable} userRating={rating} id={id} gmail={user?.email} userName={user?.displayName} product={name}></Review>}
                        </div>

                    </div>
                </div>


                {/* Review section */}
                <div className={`${reviews.length != 0 ? 'block' : 'hidden'} hide-scrollbar`}>
                    <div className="text-[32px] text-center md:text-left font-bold pb-7 mb-7 border-b border-[#E5E7EB]">
                        Customers Review
                    </div>
                    {/* user reviews */}
                    <div className="md:grid grid-cols-2 mb-14 relative">
                        <SingleReview name={reviews[reviewCount]?.name} rating={reviews[reviewCount]?.rating} date={reviews[reviewCount]?.date} comment={reviews[reviewCount]?.comment }></SingleReview>


                        {
                            reviews[reviewCount + 1] ?
                                <div className="md:absolute top-0 right-0 hidden md:block">
                                    <SingleReview name={reviews[reviewCount + 1]?.name} rating={reviews[reviewCount + 1]?.rating} date={reviews[reviewCount + 1]?.date} comment={reviews[reviewCount + 1]?.comment}></SingleReview>
                                </div> : <div></div>
                        }
                    </div>

                    {/* prev/next button */}
                    <div className="w-full md:mb-10 mb-0">
                        <div className="flex justify-center items-center">
                            {/* Prev button */}
                            <button onClick={handlePrev} className="h-12 w-12 flex items-center justify-center border border-[#2970FF] rounded-full mr-5">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.0001 19.9201L8.48009 13.4001C7.71009 12.6301 7.71009 11.3701 8.48009 10.6001L15.0001 4.08008" stroke="#2970FF" strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>

                            {/* Next button */}
                            <button onClick={handleNext} className="h-12 w-12 flex items-center justify-center border border-[#2970FF] bg-[#2970FF] rounded-full">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.90991 19.9201L15.4299 13.4001C16.1999 12.6301 16.1999 11.3701 15.4299 10.6001L8.90991 4.08008" stroke="white" strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Rate;