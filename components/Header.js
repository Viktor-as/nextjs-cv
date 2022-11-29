import React from "react";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import homeIcon from "../img/svg/home.svg";
import portfolioIcon from "../img/svg/portfolio.svg";
import experienceIcon from "../img/svg/experience.svg";
import aboutIcon from "../img/svg/human.svg";
import contactIcon from "../img/svg/contact.svg";
import skillsIcon from "../img/svg/skills.svg";
import Link from "next/link";
import ltFlag from "../img/flags/lt.jpg";
import enFlag from "../img/flags/en.jpg";
import { useRouter } from "next/router";
import enTranslations from "../public/locales/en/header.json";
import ltTranslations from "../public/locales/lt/header.json";

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

  return (
    <>
      <div className={styles.navTop}>
        <h3>{t.web_developer}</h3>
      </div>

      <div className={styles.languageContainer}>
        <p>{t.language}</p>
        <div className={styles.languageImg} onClick={changeLanguageToEn}>
          <Image src={enFlag} layout="fill" objectFit="contain" />
        </div>
        <div className={styles.languageImg} onClick={changeLanguageToLt}>
          <Image src={ltFlag} layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className={styles.meniuContainer}>
        <ul className={styles.meniu}>
          <Link href="/#home">
            <a>
              <li>
                <Image src={homeIcon} className={styles.svg} />
                <span>{t.home}</span>
              </li>
            </a>
          </Link>

          <Link href="/#portfolio">
            <a>
              <li>
                <Image className={styles.svg} src={portfolioIcon} />
                <span>{t.portfolio}</span>
              </li>
            </a>
          </Link>
          <Link href="/#skills">
            <a>
              <li>
                <Image className={styles.svg} src={skillsIcon} />
                <span>{t.skills}</span>
              </li>
            </a>
          </Link>
          <Link href="/#experience">
            <a>
              <li>
                <Image className={styles.svg} src={experienceIcon} />
                <span>{t.experience}</span>
              </li>
            </a>
          </Link>
          <Link href="/#about">
            <a>
              <li>
                <Image className={styles.svg} src={aboutIcon} />
                <span>{t.about_me}</span>
              </li>
            </a>
          </Link>
          <Link href="/#contact">
            <a>
              <li>
                <Image className={styles.svg} src={contactIcon} />
                <span>{t.contacts}</span>
              </li>
            </a>
          </Link>
        </ul>
      </div>
      <div className={styles.navBottom}>
        <p>
          <b>Viktoras Šimkevičius</b>
        </p>
        <a href="mailto:simkevicius.viktoras@gmail.com">
          <p className={styles.navContacts}>
            simkevicius.viktoras
            <br />
            @gmail.com
          </p>
        </a>
        <a href="tel:+37062469512">
          <p className={styles.navContacts}>+370 624 69512</p>
        </a>
      </div>
    </>
  );
}
