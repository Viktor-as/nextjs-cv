import React from "react";
import PortfolioPage from "../../components/PortfolioPage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Page2(props) {
  const { t } = useTranslation();

  return (
    <>
      <PortfolioPage
        id={2}
        title={t("project2:title")}
        description={[t("project2:description1")]}
        tags={["JS", "HTML/CSS"]}
        projectFilesLink="https://github.com/Viktor-as/food-website"
        projectLiveLink="http://food.internetiniusvetainiukurimas.lt/"
        back={t("common:back")}
        challenges_faced={t("common:challenges_faced")}
        languages_used={t("common:languages_used")}
        project_files={t("common:project_files")}
        project_review={t("common:project_review")}
      />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["project2", "common"])),
    },
  };
}
