import "../styles/globals.css";
import Header from "../components/Header";
import Meta from "../components/Meta";
import { appWithTranslation } from "next-i18next";
import MobileNav from "../components/MobileNav";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Meta />
      <MobileNav />
      <div className="desktopBody">
        <div className="desktopNavigation">
          <Header />
        </div>
        <div className="navSpacer"></div>
        <div className="content">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default appWithTranslation(MyApp);
