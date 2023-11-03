import Card from '../../Component/Card/Card';
import CategoryFilter from '../../Component/Filter/CategoryFilter';
import CategoryHero from '../../Component/Hero/CategoryHero';
import { useEffect, useState } from 'react';
import Link from "next/link";
import CookiePopup from '../../Component/Popup/Popup';
import Head from 'next/head'

const Home = ({ categoryData, toolsData, allsubcategoriesData, filterData }) => {
    const [sortOption, setSortOption] = useState('All')

    const decoration = x => {
        let str = x + ""
        const c = str.length % 3
        let res = ''
        if (c != 0) {
            const sub = str.substring(c, str.length)
            res = str.substring(0, c)
            const divs = sub.match(/.{1,3}/g) || [];
            for (let i = 0; i < divs.length; i++) {
                res += ',' + divs[i]
            }

        } else {
            const divs = str.match(/.{1,3}/g) || [];
            res = divs[0];
            for (let i = 1; i < divs.length; i++) {
                res += ',' + divs[i]
            }

        }
        return res
    }

    useEffect(() => {
        if (sortOption === 'All') {
            document.getElementById('All').checked = true;
            document.getElementById('Free').checked = false;
            document.getElementById('Premium').checked = false;
            document.getElementById('Paid').checked = false;
        }
        else if (sortOption === 'Free') {
            document.getElementById('Free').checked = true;
            document.getElementById('All').checked = false;
            document.getElementById('Premium').checked = false;
            document.getElementById('Paid').checked = false;
        }
        else if (sortOption === 'Premium') {
            document.getElementById('Premium').checked = true;
            document.getElementById('All').checked = false;
            document.getElementById('Free').checked = false;
            document.getElementById('Paid').checked = false;
        }
        else if (sortOption === 'Paid') {
            document.getElementById('Paid').checked = true;
            document.getElementById('All').checked = false;
            document.getElementById('Free').checked = false;
            document.getElementById('Premium').checked = false;
        }
    }, [sortOption])

    const handleChecked = (event) => {
        if (event.target.name === 'All' && event.target.checked) {
            document.getElementById('Free').checked = false;
            document.getElementById('Premium').checked = false;
            document.getElementById('Paid').checked = false;
            setSortOption(event.target.name)
        }
        else if (event.target.name === 'Free' && event.target.checked) {
            document.getElementById('All').checked = false;
            document.getElementById('Premium').checked = false;
            document.getElementById('Paid').checked = false;
            setSortOption(event.target.name)
        }
        else if (event.target.name === 'Premium' && event.target.checked) {
            document.getElementById('All').checked = false;
            document.getElementById('Free').checked = false;
            document.getElementById('Paid').checked = false;
            setSortOption(event.target.name)
        }
        else if (event.target.name === 'Paid' && event.target.checked) {
            document.getElementById('All').checked = false;
            document.getElementById('Free').checked = false;
            document.getElementById('Premium').checked = false;
            setSortOption(event.target.name)
        } else if (!event.target.checked) {
            document.getElementById('All').checked = true;
            document.getElementById('Free').checked = false;
            document.getElementById('Premium').checked = false;
            document.getElementById('Paid').checked = false;
            setSortOption('All')
        }

    }

    return (
        <div className=''>
            <Head>
                <title>GoodTools.Ai - {categoryData.Title}</title>
                <meta name="title" content={`Browse ${categoryData.count}+ Best AI ${categoryData.Title} Tools`} />
                <meta name="description" content={categoryData.message} />
                <meta name="keywords" content={`Ai Tools, Best Ai Tools, Ai Tools Finder, ${categoryData.Title}`} />
                <meta name="robots" content="max-image-preview:large" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <meta property="og:title" content={`GoodTools.Ai - ${categoryData.Title}`} />
                <meta property="og:description" content={categoryData.message} />
                <meta property="og:image" content={`https://goodtools.ai/logo.png`} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <div className="breadcrumbs py-0 text-sm font-normal mx-4 md:mx-0">
                <ul>
                    <li className='text-[#081120] font-paragraph text-sm'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className='text-[#6C737F] font-paragraph text-sm'>
                        {categoryData.Title}
                    </li>
                </ul>
            </div>

            <div className='mx-4 md:mt-[66px] mt-[40px]'>

                <div className=' md:mb-[100px] mb-[41.5px]'>
                    <CategoryHero categoryData={categoryData} allsubcategoriesData={allsubcategoriesData} />
                </div>

                <div className=' md:flex items-center justify-between md:mb-11 mb-[30px]'>
                    <div className='md:flex items-center '>
                        <div className='w-full md:w-fit mx-auto mb-4 md:mb-0'>
                            <CategoryFilter filterData={filterData} />
                        </div>
                        <div className='text-[#6C737F] my-auto h-fit w-fit text-base font-medium md:ml-[32px] font-paragraph '>
                            Showing <span className='text-[#081120] font-paragraph'> {decoration(categoryData.count)} Best</span> Ai Tools
                        </div>
                    </div>
                    <div className=' flex items-center justify-between md:justify-normal md:w-fit w-full md:mt-0 mt-6'>
                        <span className='text-[#081120] md:font-medium md:mr-6 font-paragraph  md:text-xl text-base font-normal'>Sort by : </span>
                        <div className='w-fit flex justify-between gap-4 mt-1'>


                            <button onClick={() => setSortOption('All')} name="All" className='flex items-center md:gap-2 gap-1 font-paragraph'>
                                <input onClick={handleChecked} className='focus:ring-0 focus:outline-0 rounded-sm h-3 w-3 font-paragraph font-normal text-base' type="checkbox" id="All" name="All" defaultChecked />
                                <div className='col'>All</div>
                            </button>
                            <button onClick={() => sortOption === 'Free' ? setSortOption('All') : setSortOption('Free')} name="Free" className='flex items-center gap-2 font-paragraph'>

                                <input onClick={handleChecked} className='focus:ring-0 focus:outline-0 rounded-sm h-3 w-3 font-paragraph font-normal text-base' type="checkbox" id="Free" name="Free" />
                                <div className='col'>
                                    Free
                                </div>
                            </button>
                            <button onClick={() => sortOption === 'Premium' ? setSortOption('All') : setSortOption('Premium')} name="Premium" className='flex items-center gap-2 font-paragraph'>
                                <input onClick={handleChecked} className='focus:ring-0 focus:outline-0 rounded-sm h-3 w-3 font-paragraph font-normal text-base' type="checkbox" id="Premium" name="Premium" />
                                <div className='col'>
                                    Premium
                                </div>
                            </button>
                            <button onClick={() => sortOption === 'Paid' ? setSortOption('All') : setSortOption('Paid')} name="Paid" className='flex items-center gap-2 font-paragraph'>
                                <input onClick={handleChecked} className='focus:ring-0 focus:outline-0 rounded-sm h-3 w-3 font-paragraph font-normal text-base' type="checkbox" id="Paid" name="Paid" />
                                <div className='col'>
                                    Paid
                                </div>
                            </button>

                        </div>
                    </div>
                </div>

                <div className=''>
                    <Card toolsData={toolsData} sortOption={sortOption} />
                </div>

                <CookiePopup />
            </div>
        </div>
    );
};

export async function getServerSideProps(context) {
    const { slug } = context.params;

    const [category, tools, allsubcategories, filtersubcategories] = await Promise.all([
        fetch(`http://api.goodtools.ai/category/${slug}`),
        fetch(`http://api.goodtools.ai/tools/category/${slug}`),
        fetch('http://api.goodtools.ai/allsubcategories'),
        fetch('http://api.goodtools.ai/sublist')
    ]);

    const [categoryData, toolsData, allsubcategoriesData, filterData] = await Promise.all([
        category.json(),
        tools.json(),
        allsubcategories.json(),
        filtersubcategories.json()
    ]);

    return { props: { categoryData, toolsData, allsubcategoriesData, filterData } }
}

export default Home;

