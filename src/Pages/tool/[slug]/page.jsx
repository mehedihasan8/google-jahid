import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from "react";
import Rate from '../Rate/Rate';
import Rattingg from '../Rating/Rating';
import Link from "next/link";
import { AuthContext } from "../../../Component/Context/AuthProvider";
import RelatedCards from "../../../Component/Card/RelatedCard";

export default function ToolDetail() {
    const router = useRouter()
    const slug = router.query.slug;

    const { loadData, setLoadData } = useContext(AuthContext);
    const [cards, setCards] = useState(null);
    const [isLoading, setIsloading] = useState(true)
    let storageKey = '';
    let isClicked = '';

    useEffect(() => {
        setLoadData(false)

        if (slug) {
            isClicked = localStorage.getItem(storageKey) === "true"
            fetch(`http://localhost:3000/tools/${slug}`)
                .then(response => response.json())
                .then(data => {
                    setCards(data);
                    setIsloading(false)
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }

    }, [loadData]);


    return (
        <div className=" rounded-md">
            {
                isLoading ?
                    <span className="loading loading-ring md:w-40 md:h-40 w-20 h-20 md:ml-[45%] ml-[40%] md:my-40 my-20"></span>
                    :
                    <div className="breadcrumbs text-sm font-normal mb-10 md:mb-14 mx-0 md:mx-4">
                        <ul className="ml-[2.5%] md:ml-[0.5%]">
                            <li className='text-[#081120] font-paragraph text-sm'>
                                <Link href="/">Home</Link>
                            </li>
                            <li className='text-[#6C737F] font-paragraph text-sm'>{cards.toolName}</li>
                        </ul>
                        <div className=' mt-10 mx-3 md:mx-1 md:px-0 md:py-0 px-4 py-6 border border-[#E5E7EB] rounded-2xl'>
                            <Rattingg card={cards} />
                            <Rate id={cards._id} name={cards.toolName}></Rate>
                        </div>
                        <div className="md:my-[60px] mt-10 mb-5 mx-4 md:mx-0">
                            <RelatedCards id={cards._id} subs={cards.SubCategory}></RelatedCards>
                        </div>

                    </div>
            }
        </div>
    );
};