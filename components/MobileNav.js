import React from "react";
import Link from "next/link";
import styles from "../styles/MobileNav.module.css";
import Image from "next/image";
import homeIcon from "../img/svg/home.svg";
import portfolioIcon from "../img/svg/portfolio.svg";
import experienceIcon from "../img/svg/experience.svg";
import aboutIcon from "../img/svg/human.svg";
import contactIcon from "../img/svg/contact.svg";
import { useRouter } from "next/router";
import enTranslations from "../public/locales/en/header.json";
import ltTranslations from "../public/locales/lt/header.json";
import ltFlag from "../img/flags/lt.jpg";
import enFlag from "../img/flags/en.jpg";

export default function Header(props) {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;
  const t = locale === "lt" ? ltTranslations : enTranslations;

  function changeLanguageToLt() {
    router.push({ pathname, query }, asPath, { locale: "lt" });
  }

  function changeLanguageToEn() {
    router.push({ pathname, query }, asPath, { locale: "en" });
  }

  function unCheck() {
    document.getElementById("mobMenuCheckbox").checked = false;
  }
  return (
    <>
      <nav role="navigation" className={styles.mobNavContainer}>
        <div id={styles.menuToggle}>
          <input type="checkbox" id="mobMenuCheckbox" />
          <span></span>
          <span></span>
          <span></span>
          <div className={styles.languageContainer}>
            <p>{t.language}</p>
            <div
              className={styles.languageImg}
              onClick={() => {
                changeLanguageToEn();
                unCheck();
              }}
            >
              <Image src={enFlag} layout="fill" objectFit="contain" />
            </div>
            <div
              className={styles.languageImg}
              onClick={() => {
                changeLanguageToLt();
                unCheck();
              }}
            >
              <Image src={ltFlag} layout="fill" objectFit="contain" />
            </div>
          </div>
          <ul id={styles.menu}>
            <li>
              <Link href="/#home">
                <a onClick={unCheck}>
                  <div className={styles.svg}>
                    <Image src={homeIcon} />
                  </div>
                  <p>{t.home}</p>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#portfolio">
                <a onClick={unCheck}>
                  <Image className={styles.svg} src={portfolioIcon} />
                  <p>{t.portfolio}</p>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#experience">
                <a onClick={unCheck}>
                  <Image className={styles.svg} src={experienceIcon} />
                  <p>{t.experience}</p>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#about">
                <a onClick={unCheck}>
                  <Image className={styles.svg} src={aboutIcon} />
                  <p>{t.about_me}</p>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#contact">
                <a onClick={unCheck}>
                  <Image className={styles.svg} src={contactIcon} />
                  <p>{t.contacts}</p>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
