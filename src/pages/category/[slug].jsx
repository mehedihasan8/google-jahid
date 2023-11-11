import { useEffect, useState } from "react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const PageWraper = dynamic(() => import("../../Layout/PageWraper"));
const Card = dynamic(() => import("../../Component/Card/Card"));
const CategoryFilter = dynamic(() =>
  import("../../Component/Filter/CategoryFilter")
);
const CategoryHero = dynamic(() => import("../../Component/Hero/CategoryHero"));
const Footer = dynamic(() => import("../../Component/Footer/Footer"));
const CookiePopup = dynamic(() => import("../../Component/Popup/CookiePopup"));

const CategoryData = ({
  filter,
  categoryData,
  preToolsData,
  allsubcategoriesData,
  filterData,
  slug,
}) => {
  const navigate = useRouter();
  const [sortOption, setSortOption] = useState("All");
  const [toolsData, setToolsData] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const { ref, inView } = useInView();
  const [isLoading, setIsLoading] = useState(true);
  const [isPopUp, setPopUp] = useState("hidden");

  const decoration = (x) => {
    let str = x + "";
    const c = str.length % 3;
    let res = "";
    if (c != 0) {
      const sub = str.substring(c, str.length);
      res = str.substring(0, c);
      const divs = sub.match(/.{1,3}/g) || [];
      for (let i = 0; i < divs.length; i++) {
        res += "," + divs[i];
      }
    } else {
      const divs = str.match(/.{1,3}/g) || [];
      res = divs[0];
      for (let i = 1; i < divs.length; i++) {
        res += "," + divs[i];
      }
    }
    return res;
  };


  useEffect(() => {
    if (sortOption === "All") {
      document.getElementById("All").checked = true;
      document.getElementById("top_10").checked = false;
      document.getElementById("Free").checked = false;
      document.getElementById("Freemium").checked = false;
      document.getElementById("Paid").checked = false;
      navigate.push(`/category/${slug}`);
    } else if (sortOption === "top_10") {
      document.getElementById("Free").checked = false;
      document.getElementById("top_10").checked = true;
      document.getElementById("All").checked = false;
      document.getElementById("Freemium").checked = false;
      document.getElementById("Paid").checked = false;
      navigate.push(`/category/${slug}/?sort=${sortOption}`);
    }
    else if (sortOption === "Free") {
      document.getElementById("Free").checked = true;
      document.getElementById("top_10").checked = false;
      document.getElementById("All").checked = false;
      document.getElementById("Freemium").checked = false;
      document.getElementById("Paid").checked = false;
      navigate.push(`/category/${slug}/?sort=${sortOption}`);
    } else if (sortOption === "Freemium") {
      document.getElementById("Freemium").checked = true;
      document.getElementById("All").checked = false;
      document.getElementById("top_10").checked = false;
      document.getElementById("Free").checked = false;
      document.getElementById("Paid").checked = false;
      navigate.push(`/category/${slug}/?sort=${sortOption}`);
    } else if (sortOption === "Paid") {
      document.getElementById("Paid").checked = true;
      document.getElementById("top_10").checked = false;
      document.getElementById("All").checked = false;
      document.getElementById("Free").checked = false;
      document.getElementById("Freemium").checked = false;
      navigate.push(`/category/${slug}/?sort=${sortOption}`);
    }
  }, [sortOption]);

  const handleChecked = (event) => {
    setSortOption(event.target.name);
    if (sortOption === "All") {
      document.getElementById("All").checked = true;
      document.getElementById("top_10").checked = false;
      document.getElementById("Free").checked = false;
      document.getElementById("Freemium").checked = false;
      document.getElementById("Paid").checked = false;
      navigate.push(`/category/${slug}`);
    } else if (sortOption === "top_10") {
      document.getElementById("Free").checked = false;
      document.getElementById("top_10").checked = true;
      document.getElementById("All").checked = false;
      document.getElementById("Freemium").checked = false;
      document.getElementById("Paid").checked = false;
      navigate.push(`/category/${slug}/?sort=${sortOption}`);
    }
    else if (sortOption === "Free") {
      document.getElementById("Free").checked = true;
      document.getElementById("top_10").checked = false;
      document.getElementById("All").checked = false;
      document.getElementById("Freemium").checked = false;
      document.getElementById("Paid").checked = false;
      navigate.push(`/category/${slug}/?sort=${sortOption}`);
    } else if (sortOption === "Freemium") {
      document.getElementById("Freemium").checked = true;
      document.getElementById("All").checked = false;
      document.getElementById("top_10").checked = false;
      document.getElementById("Free").checked = false;
      document.getElementById("Paid").checked = false;
      navigate.push(`/category/${slug}/?sort=${sortOption}`);
    } else if (sortOption === "Paid") {
      document.getElementById("Paid").checked = true;
      document.getElementById("top_10").checked = false;
      document.getElementById("All").checked = false;
      document.getElementById("Free").checked = false;
      document.getElementById("Freemium").checked = false;
      navigate.push(`/category/${slug}/?sort=${sortOption}`);
    }
  };

  const loadToolsData = async () => {
    const nextPage = page + 1;
    const response = await fetch(
      `https://api.goodtools.ai/category/${slug}/tools?page=${nextPage}&limit=9&filter=${filter}`
    );

    const data = await response.json();

    setTotal(data.total);
    setToolsData([...toolsData, ...data.tools]);
    setPage(nextPage);
    setIsLoading(false);
  };

  useEffect(() => {
    setTotal(preToolsData.total);
    setToolsData(preToolsData.tools);
    setPage(1);
  });

  useEffect(() => {
    setIsLoading(true);
    if (inView) {
      loadToolsData();
    }
  }, [inView]);

  useEffect(() => {
    if (localStorage.getItem("popup") > 0) {
      return;
    }
    setTimeout(() => {
      setPopUp("block");
      localStorage.setItem("popup", 1);
    }, 1000);
  }, []);

  return (
    <PageWraper>
      <Head>
        <title>{`GoodTools.Ai - ${categoryData.Title}`}</title>
        <meta
          name="title"
          content={`Browse ${categoryData.count}+ Best AI ${categoryData.Title} Tools`}
        />
        <meta name="description" content={categoryData.message} />
        <meta
          name="keywords"
          content={`Ai Tools, Best Ai Tools, Ai Tools Finder, ${categoryData.Title}`}
        />
        <meta name="robots" content="max-image-preview:large" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta
          property="og:title"
          content={`GoodTools.Ai - ${categoryData.Title}`}
        />
        <meta property="og:description" content={categoryData.message} />
        <meta property="og:image" content={`https://goodtools.ai/logo.png`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="max-w-screen-xl mx-auto px-4 md:px-0  breadcrumbs py-0 text-sm font-normal mt-16 md:mt-24">
        <ul>
          <li className="text-[#081120] font-paragraph text-sm">
            <Link href="/">Home</Link>
          </li>
          <li className="text-[#6C737F] font-paragraph text-sm">
            {categoryData.Title}
          </li>
        </ul>
      </div>

      <div className="max-w-screen-xl mx-auto md:mt-[60px] z-[5px] mt-[25px]">
        <div className=" md:mb-[100px] mb-[41.5px] ">
          <CategoryHero
            categoryData={categoryData}
            allsubcategoriesData={allsubcategoriesData}
          />
        </div>

        <div className="px-4 md:px-0 max-w-screen-xl mx-auto md:flex items-center justify-between md:mb-11 mb-[30px]">
          <div className="md:flex items-center ">
            <div className="w-full md:w-fit mx-auto mb-4 md:mb-0 ">
              <CategoryFilter filterData={filterData} categoryData={categoryData} />
            </div>
            <div className="text-[#6C737F] my-auto  w-fit text-base font-medium  md:ml-[32px] font-paragraph  md:mx-0 ">
              Showing{" "}
              <span className="text-[#081120] font-paragraph font-semibold">
                {" "}
                {decoration(total)}
              </span>{" "}
              Best Ai Tools
            </div>
          </div>
          <div className=" flex items-center justify-between md:justify-normal md:w-fit w-full md:mt-0 mt-6">
            <span className="text-[#081120] font-semibold md:mr-6 font-paragraph  md:text-xl text-base">
              Sort by :{" "}
            </span>
            <div className="w-fit flex justify-between gap-2 md:gap-4 mt-1">
              <button
                onClick={() => setSortOption("All")}
                name="All"
                className="flex items-center md:gap-2 gap-1 font-paragraph"
              >
                <input
                  onClick={handleChecked}
                  className="focus:ring-0 focus:outline-0 rounded-sm h-3 w-3 font-paragraph font-normal text-base"
                  type="checkbox"
                  id="All"
                  name="All"
                  defaultChecked
                />
                <div className="col">All</div>
              </button>
              <button
                onClick={() => setSortOption("top_10")}
                name="Top 10"
                className="flex items-center md:gap-2 gap-1 font-paragraph"
              >
                <input
                  onClick={handleChecked}
                  className="focus:ring-0 focus:outline-0 rounded-sm h-3 w-3 font-paragraph font-normal text-base"
                  type="checkbox"
                  id="top_10"
                  name="Top 10"
                  defaultChecked
                />
                <div className="col">Top 10</div>
              </button>
              <button
                onClick={() =>
                  sortOption === "Free"
                    ? setSortOption("All")
                    : setSortOption("Free")
                }
                name="Free"
                className="flex items-center gap-2 font-paragraph font-bold"
              >
                <input
                  onClick={handleChecked}
                  className="focus:ring-0 focus:outline-0 rounded-sm h-3 w-3 font-paragraph font-normal text-base"
                  type="checkbox"
                  id="Free"
                  name="Free"
                />
                <div className="col font-semibold">Free</div>
              </button>
              <button
                onClick={() =>
                  sortOption === "Freemium"
                    ? setSortOption("All")
                    : setSortOption("Freemium")
                }
                name="Freemium"
                className="flex items-center gap-2 font-paragraph"
              >
                <input
                  onClick={handleChecked}
                  className="focus:ring-0 focus:outline-0 rounded-sm h-3 w-3 font-paragraph font-normal text-base"
                  type="checkbox"
                  id="Freemium"
                  name="Freemium"
                />
                <div className="col">Freemium</div>
              </button>
              <button
                onClick={() =>
                  sortOption === "Paid"
                    ? setSortOption("All")
                    : setSortOption("Paid")
                }
                name="Paid"
                className="flex items-center gap-2 font-paragraph"
              >
                <input
                  onClick={handleChecked}
                  className="focus:ring-0 focus:outline-0 rounded-sm h-3 w-3 font-paragraph font-normal text-base"
                  type="checkbox"
                  id="Paid"
                  name="Paid"
                />
                <div className="col">Paid</div>
              </button>
            </div>
          </div>
        </div>

        <div className="mb-10 px-2 md:px-0">
          <Card toolsData={toolsData} sortOption={sortOption} />
        </div>

        <div
          className="flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3 "
          ref={ref}
        >
          {isLoading && (
            <div
              className="inline-block h-10 w-10 animate-spin rounded-full border-4 text-[#2970ff] border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          )}
        </div>
      </div>
      {isLoading || <Footer />}

      <CookiePopup isPopUp={isPopUp} setPopUp={setPopUp} />
    </PageWraper>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const filter = context.query.sort || "";

  const [category, tools, allsubcategories, filtersubcategories] =
    await Promise.all([
      fetch(`https://api.goodtools.ai/category/${slug}`),
      fetch(`https://api.goodtools.ai/category/${slug}/tools?page=1&limit=9&filter=${filter}`),
      fetch("https://api.goodtools.ai/allsubcategories"),
      fetch("https://api.goodtools.ai/sublist"),
    ]);

  const [categoryData, preToolsData, allsubcategoriesData, filterData] =
    await Promise.all([
      category.json(),
      tools.json(),
      allsubcategories.json(),
      filtersubcategories.json(),
    ]);


  return {
    props: {
      filter,
      categoryData,
      preToolsData,
      allsubcategoriesData,
      filterData,
      slug,
    },
  };
}

export default CategoryData;
