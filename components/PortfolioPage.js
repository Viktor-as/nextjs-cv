import React from "react";
import Image from "next/image";
import styles from "../styles/PortfolioPage.module.css";
import { useRouter } from "next/router";
import GithubImg from "../img/svg/github.svg";
import LiveImg from "../img/svg/live.svg";

export default function PortfilioPage(props) {
  const router = useRouter();
  return (
    <>
      <section className={styles["project-container"]}>
        <div className={styles["project-info"]}>
          <a onClick={() => router.push("/#portfolio")}>
            <div className={styles["back-button"]}>
              <i className={styles["arrow"] + " " + styles["left"]}></i>
              <p>
                <b>{props.back}</b>
              </p>
            </div>
          </a>
          <div className={styles["project-description"]}>
            <h1 className={styles["spacer"]}>{props.title}</h1>
            {props.description &&
              props.description.map((ele, index) => {
                return (
                  <p className={styles["mt10"]} key={index}>
                    {ele}
                  </p>
                );
              })}
            {/* Functionality list */}
            {props.functionality_list && (
              <>
                <p className={styles["mt10"] + " " + styles["list-head"]}>
                  {props.functionality_list_title}
                </p>
                <ul className={styles["project-listas"]}>
                  {props.functionality_list.map((ele, index) => {
                    return <li key={index}>{ele}</li>;
                  })}
                </ul>
              </>
            )}
            {/* Chalanges list */}
            {props.challengesListItems && (
              <>
                <p className={styles["mt10"] + " " + styles["list-head"]}>
                  {props.challenges_faced}
                </p>
                <ul className={styles["project-listas"]}>
                  {props.challengesListItems.map((ele, index) => {
                    return <li key={index}>{ele}</li>;
                  })}
                </ul>
              </>
            )}
            {/* Technologies used list */}
            <h3 className={styles["spacer"]}>{props.languages_used}</h3>
            <div className={styles["tags"]}>
              {props.tags &&
                props.tags.map((tag, index) => {
                  return (
                    <p className={styles.tag} key={index}>
                      {tag}
                    </p>
                  );
                })}
            </div>
            <div className={styles["spacer"]}></div>
            {props.projectFilesLink && (
              <div className={styles["github-link"]}>
                <a
                  href={props.projectFilesLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={styles["contact-svg"]}>
                    <Image src={GithubImg} width={30} height={30} />
                  </div>
                  <p className={styles["link"]}>{props.project_files}</p>
                </a>
              </div>
            )}
            {props.projectLiveLink && (
              <div className={styles["github-link"]}>
                <a
                  href={props.projectLiveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={styles["contact-svg"]}>
                    <Image src={LiveImg} width={30} height={30} />
                  </div>
                  <p className={styles["link"]}>{props.project_review}</p>
                </a>
                {props.website_loading_note && (
                  <p className={styles["note"]}>{props.website_loading_note}</p>
                )}
              </div>
            )}
          </div>
        </div>
        <div className={styles["project-photo"]}>
          <Image
            className={styles["project-img"]}
            src={`/img/portfolio/portfolio_full_${props.id}.jpg`}
            layout="fill"
          />
          {/* coming soon badge */}
          {props.coming_soon && (
            <p className={styles.comingSoon}>{props.coming_soon}</p>
          )}
        </div>
      </section>
    </>
  );
}
