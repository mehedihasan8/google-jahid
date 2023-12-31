import Link from "next/link";
import Head from "next/head";
import dynamic from "next/dynamic";

const PageWraper = dynamic(() => import("../../Layout/PageWraper"));

const About = () => {
  return (
    <PageWraper>
      <Head>
        <title>GoodTools.Ai - About Us</title>=
        
        <meta
          name="description"
          content="Find the best AI tools for your needs. Go to the filterand choose your Category."
        />
        <meta
          name="keywords"
          content="Ai Tools, Best Ai Tools, Ai Tools Finder"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />

        <meta property="og:title" content="GoodTools.Ai - AI Tools Finder" />
        <meta
          property="og:description"
          content="Find the best AI tools for your needs. Go to the filterand choose your Category."
        />
        <meta property="og:image" content="https://goodtools.ai/logo.png" />

        <meta name="twitter:title" content="GoodTools.Ai - AI Tools Finder" />
        <meta name="twitter:description" content="Find the best AI tools for your needs. Go to the filterand choose your Category" />
        <meta name="twitter:image" content="https://goodtools.ai/logo.png" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="max-w-screen-xl mx-auto px-2 md:px-0 breadcrumbs py-0 text-sm font-normal mt-16 md:mt-24">
        <ul>
          <li className="text-[#081120] font-paragraph text-sm">
            <Link href="/" scroll={true}>Home</Link>
          </li>
          <li className="text-[#6C737F] font-paragraph text-sm">About Us</li>
        </ul>
      </div>
      <div className="font-paragraph mt-6 md:mt-10">
        <div className="p-4 mb-16  md:mb-24 pp border border-[#E5E7EB]  rounded-xl">
          <div className="">
            <h1 className="font-title text-3xl mb-6 pp-title font-bold">
              About us
            </h1>
            <h2 className="text-xl font-medium md:mb-4 mb-2">About us:</h2>
            <p className="text-base font-normal mb-7">
              GoodTools.Ai is a collective of entrepreneurs with global
              perspectives who believe in AI for good. We believe in a future
              where AI enhances every professional's toolkit. Our team delves
              deep into tools, plugins and apps to deliver high quality content
              with transformative potential right to your screens. Tailored for
              the proactive modern professional, we provide comprehensive
              resources that illuminate the path to AI integration in the
              workplace. Create a free account and elevate your professional
              journey with GoodTools.Ai.
            </p>
            <h2 className="text-xl font-medium mb-4">Our mission:</h2>
            <p className="text-base font-normal mb-7">
              We strive to become the best resource for proactive professionals
              who want to discover, understand and adopt AI for work.
            </p>
          </div>
        </div>
      </div>
    </PageWraper>
  );
};

export default About;
