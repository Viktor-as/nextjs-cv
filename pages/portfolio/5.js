import React from "react";
import PortfolioPage from "../../components/PortfolioPage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Page5(props) {
  const { t } = useTranslation();

  return (
    <>
      <PortfolioPage
        id={5}
        title={t("project5:title")}
        description={[t("project5:description1")]}
        listItems={[t("project5:list_item1"), t("project5:list_item2")]}
        tags={["Next.js", "i18n", "HTML/CSS"]}
        projectFilesLink="https://github.com/Viktor-as/nextjs-cv"
        projectLiveLink="https://viktoras.info/"
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
      ...(await serverSideTranslations(locale, ["project5", "common"])),
    },
  };
}
