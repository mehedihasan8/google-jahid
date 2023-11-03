import { useEffect, useState } from 'react';
import 'flowbite';
import { useRouter } from 'next/router';

const Filter = ({filterData}) => {
    const [choice, setChoice] = useState('');
    const [toggle, setToggle] = useState(true)
    const [subList, setSubList] = useState([])

    useEffect(() => {
        setSubList(filterData)
    }, [])

    const navigate = useRouter();

    const handleClick = (event, value) => {
        setToggle(true)
        navigate.push(`/category/${value.slug}`)
    }

    return (
        <div className='relative'>
            <button onClick={() => setToggle(!toggle)} className=" text-base text-[#081120] rounded-xl border border-[#E5E7EB] md:w-[200px] w-full">

                <div className='flex items-center justify-between px-[22px] py-3'>

                    <span className='font-normal text-base font-paragraph'>{choice ? choice : 'Filter'}</span>

                    <svg className={toggle ? '' : "hidden"} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.71475 1.6875H14.2853C14.7855 1.6875 15.213 1.6875 15.555 1.73025C15.9172 1.776 16.2675 1.87875 16.5555 2.14875C16.848 2.424 16.9643 2.76675 17.0153 3.123C17.0625 3.45075 17.0625 3.858 17.0625 4.323V4.905C17.0625 5.27175 17.0625 5.5875 17.0355 5.85225C17.0055 6.13725 16.9417 6.4035 16.7872 6.65925C16.6335 6.9135 16.4272 7.098 16.1887 7.263C15.9645 7.419 15.6788 7.58025 15.3412 7.77L13.1348 9.012C12.6323 9.29475 12.4575 9.39675 12.3405 9.498C12.0728 9.7305 11.919 9.98925 11.847 10.3125C11.8162 10.4513 11.8125 10.6252 11.8125 11.1547V13.2037C11.8125 13.8795 11.8125 14.4533 11.7428 14.895C11.6692 15.3638 11.4975 15.8137 11.0475 16.095C10.6072 16.3702 10.1235 16.3447 9.6525 16.233C9.19875 16.1257 8.64 15.9068 7.9695 15.645L7.905 15.6195C7.59 15.4965 7.3155 15.3892 7.098 15.2767C6.864 15.156 6.6465 15.006 6.48075 14.772C6.312 14.535 6.24525 14.2815 6.2145 14.022C6.1875 13.7857 6.1875 13.5022 6.1875 13.1857V11.1547C6.1875 10.6252 6.1845 10.4513 6.153 10.3125C6.08491 9.99317 5.91103 9.70618 5.6595 9.498C5.5425 9.39675 5.367 9.29475 4.86525 9.012L2.65875 7.77C2.32125 7.58025 2.0355 7.419 1.81125 7.263C1.57275 7.098 1.3665 6.9135 1.21275 6.65925C1.05825 6.4035 0.9945 6.1365 0.96525 5.85225C0.9375 5.58825 0.9375 5.27175 0.9375 4.905V4.323C0.9375 3.858 0.9375 3.45075 0.98475 3.123C1.03575 2.76675 1.152 2.424 1.4445 2.14875C1.7325 1.87875 2.082 1.776 2.445 1.73025C2.787 1.6875 3.2145 1.6875 3.71475 1.6875ZM2.586 2.847C2.3355 2.8785 2.256 2.9295 2.21475 2.96925C2.17725 3.00375 2.12925 3.0645 2.09775 3.28275C2.064 3.52125 2.0625 3.84675 2.0625 4.36125V4.87875C2.0625 5.27925 2.0625 5.53725 2.0835 5.73675C2.103 5.922 2.136 6.01125 2.1765 6.078C2.21775 6.14625 2.28675 6.2235 2.4525 6.339C2.628 6.4605 2.86725 6.59625 3.2325 6.80175L5.41725 8.03175L5.47725 8.0655C5.89725 8.30175 6.18225 8.46225 6.39675 8.64825C6.83057 9.01422 7.13117 9.51339 7.25175 10.068C7.3125 10.3433 7.3125 10.653 7.3125 11.088V13.1572C7.3125 13.5112 7.31325 13.7288 7.33275 13.8923C7.34925 14.0408 7.377 14.091 7.39725 14.1202C7.41975 14.1517 7.46475 14.2005 7.614 14.2778C7.773 14.3595 7.99275 14.4457 8.33925 14.5815C9.06 14.8635 9.54525 15.0517 9.912 15.1388C10.2712 15.2242 10.3898 15.18 10.4505 15.1417C10.5015 15.1095 10.5802 15.0442 10.632 14.7195C10.686 14.3767 10.6875 13.8923 10.6875 13.1565V11.088C10.6875 10.653 10.6875 10.3433 10.749 10.068C10.8694 9.51349 11.1697 9.01434 11.6032 8.64825C11.8177 8.46225 12.1035 8.301 12.522 8.0655L12.5828 8.03175L14.7675 6.80175C15.1328 6.59625 15.372 6.4605 15.5475 6.339C15.7132 6.2235 15.7822 6.14625 15.8235 6.078C15.864 6.01125 15.897 5.922 15.9158 5.73675C15.9368 5.53725 15.9375 5.27925 15.9375 4.878V4.3605C15.9375 3.84675 15.936 3.5205 15.9022 3.28275C15.8707 3.0645 15.822 3.00375 15.786 2.96925C15.744 2.93025 15.6645 2.8785 15.414 2.847C15.1515 2.81325 14.7952 2.8125 14.25 2.8125H3.75C3.20475 2.8125 2.84925 2.81325 2.586 2.847Z" fill="#081120" />
                    </svg>

                    <svg className={!toggle ? '' : 'hidden'} width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.5007 9.58398L8.00065 4.08398L2.50065 9.58398L0.667316 7.75065L8.00065 0.417317L15.334 7.75065L13.5007 9.58398Z" fill="#081120" />
                    </svg>

                </div>
            </button>

            {/* <!-- Dropdown menu --> */}
            <div className={`z-50 ${toggle ? 'hidden' : 'block absolute bottom-30 left-0'} font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-xl md:w-[200px] w-11/12 text-base`}>
                {
                    subList.sort((a, b) => (a._id > b._id ? 1 : -1)).map((value, index) => {
                        return (
                            <ul key={index} className="py-2 text-sm text-gray-700 w-full text-left">

                                <li>
                                    <button disabled href="#" className="w-full text-left block gap-4 pr-4 pl-[10px] py-2 hover:bg-gray-100 font-paragraph font-medium text-base" value={value._id}>{value._id}</button>
                                </li>
                                {
                                    value.SubCategories.sort().map((value, index) => {
                                        return <li key={index}>
                                            <button onClick={(event) => handleClick(event, value)} className={`w-full text-left block pr-4 pl-[10px] gap-4 py-2 hover:bg-gray-100 bg-white font-paragraph font-normal text-sm`} name={`${value.name}`}>{value.name}</button>
                                        </li>
                                    })
                                }
                            </ul>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Filter;