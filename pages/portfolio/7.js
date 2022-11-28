import React from "react";
import PortfolioPage from "../../components/PortfolioPage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Page7(props) {
  const { t } = useTranslation();

  return (
    <>
      <PortfolioPage
        id={7}
        title={t("project7:title")}
        description={[t("project7:description1"), t("project7:description2")]}
        challengesListItems={[
          t("project7:list_item1"),
          t("project7:list_item2"),
          t("project7:list_item3"),
        ]}
        tags={["React", "JS", "HTML/CSS"]}
        projectFilesLink="https://github.com/Viktor-as/Random-Team-Generator"
        projectLiveLink="https://team.viktoras.info/"
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
      ...(await serverSideTranslations(locale, ["project7", "common"])),
    },
  };
}
