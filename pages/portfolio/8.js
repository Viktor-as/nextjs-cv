import React from "react";
import PortfolioPage from "../../components/PortfolioPage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Page8(props) {
  const { t } = useTranslation();

  return (
    <>
      <PortfolioPage
        id={8}
        title={t("project8:title")}
        description={[
          t("project8:description1"),
          t("project8:description2"),
          t("project8:description3"),
        ]}
        tags={["React", "JS", "HTML/CSS"]}
        projectFilesLink="https://github.com/Viktor-as/tenzies-game"
        projectLiveLink="https://tenzies.viktoras.info/"
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
      ...(await serverSideTranslations(locale, ["project8", "common"])),
    },
  };
}
