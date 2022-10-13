import React from "react";
import Image from "next/image";
import styles from "../styles/PortfolioItem.module.css";
import { useRouter } from "next/router";

export default function PortfolioItem(props) {
  const router = useRouter();
  return (
    <>
      <div className={styles.portfolioItem}>
        <div className={styles.portfolioImgContainer}>
          <Image
            src={props.img}
            className={styles.portfolioImg}
            layout="fill"
            objectFit="cover"
          />
        </div>
        {/* <p className={styles.comingSoon}>coming soon</p> */}
        <div className={styles.tags}>
          {props.tags &&
            props.tags.map((tag, index) => {
              return (
                <p className={styles.tag} key={index}>
                  {tag}
                </p>
              );
            })}
        </div>
        <h3>{props.title}</h3>
        <p className={styles.portfolioShortDescription}>{props.description}</p>

        <button
          className={styles.portfolioMore}
          type="button"
          onClick={() => router.push(`/portfolio/${props.id}`)}
        >
          {props.more}
        </button>
      </div>
    </>
  );
}
