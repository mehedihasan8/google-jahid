import "../styles/globals.css";
import "../styles/app.css";
import "../styles/about.css";
import "../styles/card.css";
import "../styles/contact.css";
import "../styles/filter.css";
import "../styles/hero.css";
import "../styles/home.css";
import "../styles/news.css";
import "../styles/news-card.css";
import "../styles/privacy-policy.css";
import "../styles/rating.css";
import "../styles/related.css";
import "../styles/review.css";
import "../styles/single-news.css";
import "../styles/single-review.css";
import "../styles/terms.css";
import "../styles/footer.css";
import "../styles/popup.css";
import "../styles/main.css";
import "../styles/navbar.css";

import Layout from "../Layout/Layout";
import Script from "next/script";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function App({ Component, pageProps }) {
  NProgress.configure({
    showSpinner: false,
  });

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={"https://www.googletagmanager.com/gtag/js?id=G-FVKDLBQ488"}
      />

      <Script strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-FVKDLBQ488', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;
