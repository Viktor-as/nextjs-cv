import React from "react";
import PortfolioPage from "../../components/PortfolioPage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Page3(props) {
  const { t } = useTranslation();

  return (
    <>
      <PortfolioPage
        id={3}
        title={t("project3:title")}
        description={[
          t("project3:description1"),
          t("project3:description2"),
          t("project3:description3"),
        ]}
        tags={["PHP", "HTML/CSS"]}
        projectFilesLink="https://github.com/Viktor-as/lecture"
        projectLiveLink="https://lecture.internetiniusvetainiukurimas.lt/"
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
      ...(await serverSideTranslations(locale, ["project3", "common"])),
    },
  };
}
