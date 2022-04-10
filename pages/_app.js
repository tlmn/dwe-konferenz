import Head from "next/head";
import "@/styles/globals.css";

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Konferenz Deutsche Wohnen &amp; Co. enteignen</title>
      <link rel="icon" href="/dwe-icon.png" />
      <meta charSet="UTF-8" />
      <meta name="description" content="" />
      <meta
        name="keywords"
        content="Mieten, Deutsche Wohnen, Berlin, Mietenwahnsinn, Konferent"
      />
      <meta name="author" content="Deutsche Wohnen und Co. enteignen" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="preload"
        href="/fonts/suisse/SuisseIntl-Bold.woff2"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/suisse/SuisseIntl-Medium.woff2"
        as="font"
        crossOrigin=""
      />
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
