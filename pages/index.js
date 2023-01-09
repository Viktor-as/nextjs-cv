import styles from "../styles/Home.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import webDevImg from "../img/web-dev.jpg";
import portfolio9 from "../img/portfolio/portfolio9.jpg";
import portfolio8 from "../img/portfolio/portfolio8.jpg";
import portfolio7 from "../img/portfolio/portfolio7.jpg";
import portfolio6 from "../img/portfolio/portfolio6.jpg";
import portfolio5 from "../img/portfolio/portfolio5.jpg";
import portfolio4 from "../img/portfolio/portfolio4.jpg";
import portfolio3 from "../img/portfolio/portfolio3.jpg";
import portfolio2 from "../img/portfolio/portfolio2.jpg";
import portfolio1 from "../img/portfolio/portfolio1.jpg";
import linkedinIcon from "../img/svg/linkedin.svg";
import githubIcon from "../img/svg/github.svg";
import PortfolioItem from "../components/PortfolioItem";

export default function Home(props) {
  const { t } = useTranslation("home");

  return (
    <>
      <section className={styles.home} id="home">
        <div className={styles.homeImgContainer}>
          <Image
            src={webDevImg}
            alt=""
            className={styles.homeImg}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <h1 className={styles.welcome}>{t("welcome_msg")}</h1>
        <p className={styles.homeDescription}>{t("intro1")}</p>
        <p className={styles.homeDescription}>{t("intro2")}</p>
        <a href="#portfolio">
          <i className={[styles.arrow, styles.down].join(" ")}></i>
        </a>
      </section>
      <section className={styles.portfolio} id="portfolio">
        <h1>{t("portfolio")}</h1>
        <div className={styles.portfolioItemsContainer}>
          <PortfolioItem
            id={9}
            img={portfolio9}
            tags={[
              "React",
              "JS",
              "Node.js",
              "Express",
              "JWT",
              "Material UI",
              "MongoDB",
            ]}
            title={t("portfolio9_title")}
            description={t("portfolio9_desc")}
            more={t("more")}
            // comingSoon={true}
            // comingSoonText={t("coming_soon")}
          />
          <PortfolioItem
            id={7}
            img={portfolio7}
            tags={["React", "JS", "HTML/CSS"]}
            title={t("portfolio7_title")}
            description={t("portfolio7_desc")}
            more={t("more")}
          />
          <PortfolioItem
            id={5}
            img={portfolio5}
            tags={["Next.js", "i18n", "HTML/CSS"]}
            title={t("portfolio5_title")}
            description={t("portfolio5_desc")}
            more={t("more")}
          />
          <PortfolioItem
            id={8}
            img={portfolio8}
            tags={["React", "JS", "HTML/CSS"]}
            title={t("portfolio8_title")}
            description={t("portfolio8_desc")}
            more={t("more")}
          />
          {/* <PortfolioItem
            id={2}
            img={portfolio2}
            tags={["JS", "HTML/CSS"]}
            title={t("portfolio2_title")}
            description={t("portfolio2_desc")}
            more={t("more")}
          /> */}
          <PortfolioItem
            id={3}
            img={portfolio3}
            tags={["PHP", "Wordpress"]}
            title={t("portfolio3_title")}
            description={t("portfolio3_desc")}
            more={t("more")}
          />
          <PortfolioItem
            id={4}
            img={portfolio4}
            tags={["CSS", "Wordpress"]}
            title={t("portfolio4_title")}
            description={t("portfolio4_desc")}
            more={t("more")}
          />
        </div>
      </section>
      <section className={styles.skillsSection} id="skills">
        <h1 className={styles.spacer}>{t("programming_skills")}</h1>
        <div className={styles.tags}>
          <p className={styles.tag}>Next.js</p>
          <p className={styles.tag}>React</p>
          <p className={styles.tag}>Redux</p>
          <p className={styles.tag}>JavaScript</p>
          <p className={styles.tag}>Typescript</p>
          <p className={styles.tag}>Node.js</p>
          <p className={styles.tag}>Express</p>
          <p className={styles.tag}>MongoDB</p>
          <p className={styles.tag}>Jest</p>
          <p className={styles.tag}>GIT</p>
          <p className={styles.tag}>Docker</p>
          <p className={styles.tag}>PHP</p>
          <p className={styles.tag}>MYSQL</p>
          <p className={styles.tag}>HTML</p>
          <p className={styles.tag}>SASS</p>
          <p className={styles.tag}>CSS</p>
          <p className={styles.tag}>Tailwind</p>
          <p className={styles.tag}>Material UI v5</p>
          <p className={styles.tag}>Formik</p>
          <p className={styles.tag}>Adobe suite</p>
        </div>
      </section>
      <section className={styles.experience} id="experience">
        <h1>{t("experience")}</h1>
        <ul className={styles.timeline}>
          {/* timeline item */}
          <li className={styles.event}>
            <h4>{t("course_title")}</h4>
            <h5>
              <span className={styles.date}>2020.11 – 2021.08</span>
              <span className={styles.company}>{t("course_company")}</span>
            </h5>
            <ul className={styles.listas}>
              <li>{t("course_li1")}</li>
              <li>{t("course_li2")}</li>
              <li>{t("course_li3")}</li>
              <li>{t("course_li4")}</li>

              <p className={styles.mt10}>
                <a
                  className={styles.link}
                  href="https://app.diplomasafe.com/en-US/diploma/dc55a6311257e1d1052cd9eece1980086a19b6343"
                >
                  {t("certificate_link")}
                </a>
              </p>
            </ul>
          </li>
          {/* timeline item */}
          <li className={styles.event}>
            <h4>{t("php_title")}</h4>
            <h5>
              <span className={styles.date}>2020.10</span>
              <span className={styles.company}>Udemy.com</span>
            </h5>
            <p>{t("php_li_head")}</p>
            <ul className={styles.listas}>
              <li>{t("php_li1")}</li>
              <li>{t("php_li2")}</li>
              <li>{t("php_li3")}</li>
            </ul>
          </li>

          {/* timeline item */}
          <li className={styles.event}>
            <h4>{t("iv_title")}</h4>
            <h5>
              <span className={styles.date}>2017.12 – Dabar</span>
              <span className={styles.company}>{t("iv_company")}</span>
            </h5>
            <p>
              {t("iv_desc")}{" "}
              <a
                className={styles.link}
                href="https://internetiniusvetainiukurimas.lt/"
              >
                https://internetiniusvetainiukurimas.lt/
              </a>
            </p>
          </li>

          {/* timeline item */}
          <li className={styles.event}>
            <h4>{t("ap_title")}</h4>
            <h5>
              <span className={styles.date}>2017.04 – 2022.05</span>
              <span className={styles.company}>{t("ap_company")}</span>
            </h5>
            <ul className={styles.listas}>
              <li>{t("ap_li1")}</li>
              <li>{t("ap_li2")}</li>
              <li>{t("ap_li3")}</li>
              <li>{t("ap_li4")}</li>
              <li>{t("ap_li5")}</li>
              <li>{t("ap_li6")}</li>
              <li>{t("ap_li7")}</li>
              <li>{t("ap_li8")}</li>
            </ul>
          </li>

          {/* timeline item */}
          <li className={styles.event}>
            <h4>{t("via_title")}</h4>
            <h5>
              <span className={styles.date}>2016.01 – 2017.02</span>
              <span className={styles.company}>{t("via_company")}</span>
            </h5>
            <ul className={styles.listas}>
              <li>{t("via_li1")}</li>
              <li>{t("via_li2")}</li>
              <li>{t("via_li3")}</li>
              <li>{t("via_li4")}</li>
              <li>{t("via_li5")}</li>
              <li>{t("via_li6")}</li>
              <li>{t("via_li7")}</li>
              <li>{t("via_li8")}</li>
            </ul>
          </li>
        </ul>
      </section>
      <section className={styles.about} id="about">
        <h1>{t("about_title")}</h1>
        <div className={styles.aboutInfo}>
          <h3 className={styles.spacer}>{t("education")}</h3>
          <ul className={[styles.timeline, styles.mt20].join(" ")}>
            {/* timeline item */}
            <li className={styles.education}>
              <h4>{t("degree")}</h4>
              <h5>
                <span className={styles.date}>2010.09 – 2014.06</span>
                <span className={styles.company}>{t("university")}</span>
              </h5>
            </li>

            {/* timeline item */}
            <li className={styles.education}>
              <h4>{t("school_degree")}</h4>
              <h5>
                <span className={styles.date}>2006.09 – 2010.06</span>
                <span className={styles.company}>{t("school")}</span>
              </h5>
            </li>
          </ul>
          <h3>{t("languages")}</h3>
          <div className={styles.tags}>
            <p className={styles.tag}>{t("language1")}</p>
            <p className={styles.tag}>{t("language2")}</p>
            <p className={styles.tag}>{t("language3")}</p>
          </div>
          <h3 className={styles.spacer}>{t("additional_information")}</h3>
          <p>{t("additional_information_desc")}</p>
          <h3 className={styles.spacer}>{t("hobbies_title")}</h3>
          <p>{t("hobbies_desc")}</p>
        </div>
      </section>
      <section className={styles.contacts} id="contact">
        <h1>{t("contacts_title")}</h1>
        <div>
          <h3 className={styles.center}>{t("contacts_desc")}</h3>
          <div className={styles.contactLine}>
            <a href="tel:+37062469512">
              <p>+370 624 69512</p>
            </a>
          </div>
          <div className={styles.contactLine}>
            <a href="mailto:simkevicius.viktoras@gmail.com">
              <p>simkevicius.viktoras@gmail.com</p>
            </a>
          </div>
          <div className={styles.contactIconLine}>
            <a
              href="https://www.linkedin.com/in/viktoras-%C5%A1imkevi%C4%8Dius-7693a944/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={linkedinIcon}
                alt=""
                className={styles.contactSvg}
                width={30}
                height={30}
              />
            </a>
            <a
              href="https://github.com/Viktor-as"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={githubIcon}
                alt=""
                className={styles.contactSvg}
                width={30}
                height={30}
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
}
