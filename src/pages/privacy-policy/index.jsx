import React from "react";
import Head from "next/head";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div>
      <Head>
        <title>GoodTools.Ai - Privacy & Policy</title>
        <meta name="title" content="GoodTools.Ai - Privacy & Policy" />
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
        <meta property="og:title" content="GoodTools.Ai - Privacy & Policy" />
        <meta
          property="og:description"
          content="Find the best AI tools for your needs. Go to the filterand choose your Category."
        />
        <meta property="og:image" content="https://goodtools.ai/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="max-w-screen-xl mx-auto px-2 md:px-0 breadcrumbs py-0 text-sm font-normal mt-16 md:mt-24">
        <ul>
          <li className="text-[#081120] font-paragraph text-sm">
            <Link href="/">Home</Link>
          </li>
          <li className="text-[#6C737F] font-paragraph text-sm">
            Privacy Policy
          </li>
        </ul>
      </div>
      <div className="pp mb-10  md:mb-24 mt-6 md:mt-10 border rounded-lg  p-4 md:p-8">
        <h1 className="font-title text-3xl mb-6 pp-title font-bold">
          Privacy Policy
        </h1>
        <h2 className="subtitle mb-4">Your privacy is important to us:</h2>
        <p className="privacy-text  mb-6">
          It is GoodTools.Ai policy to respect your privacy regarding any
          information we may collect while operating our website. This Privacy
          Policy applies to futurepedia.io (hereinafter, "us", "we", or
          "futurepedia.io"). We respect your privacy and are committed to
          protecting personally identifiable information you may provide us
          through the Website. We have adopted this privacy policy ("Privacy
          Policy") to explain what information may be collected on our Website,
          how we use this information, and under what circumstances we may
          disclose the information to third parties. This Privacy Policy applies
          only to information we collect through the Website and does not apply
          to our collection of information from other sources. This Privacy
          Policy, together with the Terms of service posted on our Website, set
          forth the general rules and policies governing your use of our
          Website. Depending on your activities when visiting our Website, you
          may be required to agree to additional terms of service.
        </p>
        <h2 className="subtitle mb-4">Contents:</h2>
        <p className="privacy-text mb-6">
          Click below to jump to any section of this privacy policy
          <ol type="1">
            <li>1. Website Visitors</li>
            <li>2. Security</li>
            <li>3. Links To External Sites</li>
            <li>4. Affiliate Disclosure</li>
            <li>5. E-commerce</li>
            <li>6. Prohibited Activities</li>
          </ol>
        </p>
        <h2 className="subtitle mb-4">1. Website Visitors:</h2>
        <p className="privacy-text mb-6 ">
          Like most website operators, GoodTools.Ai collects
          non-personally-identifying information of the sort that web browsers
          and servers typically make available, such as the browser type,
          language preference, referring site, and the date and time of each
          visitor request. GoodTools.Ai purpose in collecting non-personally
          identifying information is to better understand how GoodTools.Ai
          visitors use its website. From time to time, GoodTools.Ai may release
          non-personally-identifying information in the aggregate, e.g., by
          publishing a report on trends in the usage of its website.
        </p>
        <h2 className="subtitle mb-4">2. Security:</h2>
        <p className="privacy-text mb-6 ">
          The security of your Personal Information is important to us, but
          remember that no method of transmission over the Internet, or method
          of electronic storage is 100% secure. While we strive to use
          commercially acceptable means to protect your Personal Information, we
          cannot guarantee its absolute security.
        </p>
        <h2 className="subtitle mb-4">3. Link To External Sites:</h2>
        <p className="privacy-text mb-6 ">
          Our Service may contain links to external sites that are not operated
          by us. If you click on a third party link, you will be directed to
          that third party's site. We strongly advise you to review the Privacy
          Policy and terms of service of every site you visit. We have no
          control over, and assume no responsibility for the content, privacy
          policies or practices of any third party sites, products or services.
        </p>
        <h2 className="subtitle mb-4">4. Affiliate Disclosure:</h2>
        <p className="privacy-text mb-6 ">
          This site uses affiliate links to keep it free for all visitors and
          does earn a commission from certain links. This does not affect your
          purchases or the price you may pay. We only promote products that we
          have used and genuinely liked.
        </p>
        <h2 className="subtitle mb-4">5. E-commerce:</h2>
        <p className="privacy-text mb-6 ">
          Those who engage in transactions with GoodTools.Ai – by purchasing
          GoodTools.Ai services or products, are asked to provide additional
          information, including as necessary the personal and financial
          information required to process those transactions. In each case,
          GoodTools.Ai collects such information only insofar as is necessary or
          appropriate to ful fill the purpose of the visitor's interaction with
          GoodTools.Ai. GoodTools.Ai does not disclose personally-identifying
          information other than as described below. And visitors can always
          refuse to supply personally-identifying information, with the caveat
          that it may prevent them from engaging in certain website-related
          activities.
        </p>
        <h2 className="subtitle mb-4">6. Prohibited Activities:</h2>
        <p className="privacy-text mb-6 ">
          Collect, use, copy, download, or transfer any information, including,
          but not limited to, personal information obtained from GoodTools.Ai
          except as expressly permitted in these Terms or as the owner of such
          information may expressly permit; Record, process or mine information
          about other users; Use manual or automated software, devices, scripts
          robots, other means or processes to access, “scrape,” “crawl”
          “spider,” or index any web pages or any other portion of the Services.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
