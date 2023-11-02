import '../styles/globals.css'
import '../styles/app.css'
import '../styles/about.css'
import '../styles/card.css'
import '../styles/contact.css'
import '../styles/filter.css'
import '../styles/hero.css'
import '../styles/home.css'
import '../styles/news.css'
import '../styles/news-card.css'
import '../styles/privacy-policy.css'
import '../styles/rating.css'
import '../styles/related.css'
import '../styles/review.css'
import '../styles/single-news.css'
import '../styles/single-review.css'
import '../styles/terms.css'
import '../styles/footer.css'
import '../styles/popup.css'
import '../styles/main.css'
import '../styles/navbar.css'

import Layout from '../Layout/Layout'

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App