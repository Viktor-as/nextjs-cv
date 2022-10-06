import "../styles/globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Viktoras Šimkevičius CV</title>
        <meta name="description" content="Viktoras Šimkevičius CV" />
        <link rel="icon" href="/favi2.png" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default appWithTranslation(MyApp);
