import styles from "../styles/Home.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Home(props) {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <h1>Homepage</h1>
      <p>{t("home:welcome_msg")}</p>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"])),
    },
  };
}
