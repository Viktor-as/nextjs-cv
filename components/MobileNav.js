import React from "react";
import Link from "next/link";
import styles from "../styles/MobileNav.module.css";
import Image from "next/image";
import homeIcon from "../img/svg/home.svg";
import portfolioIcon from "../img/svg/portfolio.svg";
import experienceIcon from "../img/svg/experience.svg";
import aboutIcon from "../img/svg/human.svg";
import contactIcon from "../img/svg/contact.svg";

export default function Header(props) {
  return (
    <>
      {/* <nav role="navigation" className={styles.mobNavContainer}>
        <div id={styles.menuToggle}>
          <input type="checkbox" id={styles.mobMenuCheckbox} />
          <span></span>
          <span></span>
          <span></span>
          <ul id={styles.menu}>
            <a href="#home">
              <Image className={styles.svg} src={homeIcon} />

              <li>Pradžia</li>
            </a>
            <a href="#portfolio">
              <img className={styles.svg} src="img/svg/portfolio.svg" alt="" />
              <li>Portfolio</li>
            </a>
            <a href="#experience">
              <img className={styles.svg} src="img/svg/experience.svg" alt="" />
              <li>Patirtis</li>
            </a>
            <a href="#about">
              <img className={styles.svg} src="img/svg/human.svg" alt="" />
              <li>Apie mane</li>
            </a>
            <a href="#contact">
              <img
                className={(styles.svg, styles.custom)}
                src="img/svg/contact.svg"
                alt=""
              />
              <li>Kontaktai</li>
            </a>
          </ul>
        </div>
      </nav> */}
    </>
  );
}
