import React from "react";
import PortfolioPage from "../../components/PortfolioPage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Page4(props) {
  const { t } = useTranslation();

  return (
    <>
      <PortfolioPage
        id={4}
        title={t("project4:title")}
        description={[t("project4:description1")]}
        tags={["Wordpress", "CSS"]}
        projectLiveLink="https://internetiniusvetainiukurimas.lt/"
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
      ...(await serverSideTranslations(locale, ["project4", "common"])),
    },
  };
}
