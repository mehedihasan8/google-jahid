"use client";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";

const PageWraper = dynamic(() => import("../Layout/PageWraper"));
const Card = dynamic(() => import("../Component/Card/Card"));
const Hero = dynamic(() => import("../Component/Hero/MainHero"));
const Filter = dynamic(() => import("../Component/Filter/MainFilter"));
const Footer = dynamic(() => import("../Component/Footer/Footer"));
const CookiePopup = dynamic(() => import("../Component/Popup/CookiePopup"));

const Home = ({ filter, preToolsData, allsubcategoriesData, filterData }) => {
  const navigate = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [toolsData, setToolsData] = useState([]);
  const [page, setPage] = useState(0);
  const { ref, inView } = useInView();
  const [searchData, setSearchData] = useState("");
  const [sortOption, setSortOption] = useState("All");

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
    try {
      if (sortOption === "All") {
        document.getElementById("All").checked = true;
        document.getElementById("Free").checked = false;
        document.getElementById("Freemium").checked = false;
        document.getElementById("Paid").checked = false;
        navigate.replace(`/`)
      } else if (sortOption === "Free") {
        document.getElementById("Free").checked = true;
        document.getElementById("All").checked = false;
        document.getElementById("Freemium").checked = false;
        document.getElementById("Paid").checked = false;
        navigate.replace(`?sort=${sortOption}`)
      } else if (sortOption === "Freemium") {
        document.getElementById("Freemium").checked = true;
        document.getElementById("All").checked = false;
        document.getElementById("Free").checked = false;
        document.getElementById("Paid").checked = false;
        navigate.replace(`?sort=${sortOption}`)
      } else if (sortOption === "Paid") {
        document.getElementById("Paid").checked = true;
        document.getElementById("All").checked = false;
        document.getElementById("Free").checked = false;
        document.getElementById("Freemium").checked = false;
        navigate.replace(`?sort=${sortOption}`)
      }
    } catch (e) { }
    setIsLoading(true);
  }, [sortOption]);

  const handleChecked = (event) => {
    setSortOption(event.target.name);

    try {
      if (sortOption === "All") {
        document.getElementById("All").checked = true;
        document.getElementById("Free").checked = false;
        document.getElementById("Freemium").checked = false;
        document.getElementById("Paid").checked = false;
      } else if (sortOption === "Free") {
        document.getElementById("Free").checked = true;
        document.getElementById("All").checked = false;
        document.getElementById("Freemium").checked = false;
        document.getElementById("Paid").checked = false;
      } else if (sortOption === "Freemium") {
        document.getElementById("Freemium").checked = true;
        document.getElementById("All").checked = false;
        document.getElementById("Free").checked = false;
        document.getElementById("Paid").checked = false;
      } else if (sortOption === "Paid") {
        document.getElementById("Paid").checked = true;
        document.getElementById("All").checked = false;
        document.getElementById("Free").checked = false;
        document.getElementById("Freemium").checked = false;
      }
    } catch (e) { }
  };

  const getSearchData = (data) => {
    if (data !== searchData) {
      setSearchData(data);
    }
  };

  const loadToolsData = async () => {
    const nextPage = page + 1;
    const response = await fetch(
      `${process.env.API_URL}/tool?page=${nextPage}&limit=9&filter=${filter}`
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

  const [isPopUp, setPopUp] = useState("hidden");
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
        <title>GoodTools.Ai - AI Tools Finder</title>
        <meta name="title" content="GoodTools.Ai - AI Tools Finder" />
        <meta
          name="description"
          content="Find the best AI tools for your needs. Go to the filterand choose your Category."
        />
        <meta
          name="keywords"
          content="Ai Tools, Best Ai Tools, Ai Tools Finder"
        />
        <meta name="robots" content="max-image-preview:large" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta property="og:title" content="GoodTools.Ai - AI Tools Finder" />
        <meta
          property="og:description"
          content="Find the best AI tools for your needs. Go to the filterand choose your Category."
        />
        <meta property="og:image" content="https://goodtools.ai/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="md:mt-[66px] mt-[40px]">
        <div className="px-2 md:px-0 max-w-screen-xl mx-auto md:mb-[100px] mb-[40px]">
          <Hero allsubcategoriesData={allsubcategoriesData} />
        </div>

        <div className="px-2 md:px-0 max-w-screen-xl mx-auto md:flex items-center justify-between md:mb-11 mb-[30px]">
          <div className="md:flex items-center ">
            <div className="w-full md:w-fit mx-auto mb-4 md:mb-0">
              <Filter filterData={filterData} />
            </div>
            <div className="text-[#6C737F] my-auto  w-fit text-base font-medium  md:ml-[32px] font-paragraph mx-2 md:mx-0 ">
              Showing{" "}
              <span className="text-[#081120] font-paragraph font-semibold">
                {" "}
                {decoration(total)}
              </span>{" "}
              Best Ai Tools
            </div>
          </div>
          <div className=" flex items-center justify-between md:justify-normal md:w-fit w-full md:mt-0 mt-6 px-2 md:px-0">
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
                onClick={() => setSortOption("Free")}
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
                onClick={() => setSortOption("Freemium")}
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
                onClick={() => setSortOption("Paid")}
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

        <div className="px-2 md:px-0 max-w-screen-xl mx-auto mb-20">
          <Card toolsData={toolsData} sortOption={sortOption} />
        </div>
        <div
          className="flex justify-center items-center"
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

        {isLoading || <Footer />}

        <CookiePopup isPopUp={isPopUp} setPopUp={setPopUp} />
      </div>
    </PageWraper>
  );
};

export async function getServerSideProps(context) {

  const filter = context.query.sort || "";

  const [tools, allsubcategories, filtersubcategories] = await Promise.all([
    fetch(`${process.env.API_URL}/tool?page=1&limit=9&filter=${filter}`),
    fetch(`${process.env.API_URL}/allsubcategories`),
    fetch(`${process.env.API_URL}/sublist`),
  ]);

  const [preToolsData, allsubcategoriesData, filterData] = await Promise.all([
    tools.json(),
    allsubcategories.json(),
    filtersubcategories.json(),
  ]);

  return { props: { filter, preToolsData, allsubcategoriesData, filterData } };
}

export default Home;
