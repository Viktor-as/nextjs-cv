import React from "react";
import PortfolioPage from "../../components/PortfolioPage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Page9(props) {
  const { t } = useTranslation();

  return (
    <>
      <PortfolioPage
        id={9}
        title={t("project9:title")}
        description={[t("project9:description1"), t("project9:description2")]}
        tags={[
          "React",
          "JS",
          "Node.js",
          "Express",
          "JWT",
          "Material UI",
          "MongoDB",
        ]}
        back={t("common:back")}
        languages_used={t("common:languages_used")}
        functionality_list_title={t("project9:functionality_list_title")}
        functionality_list={[
          t("project9:functionality_list1"),
          t("project9:functionality_list2"),
          t("project9:functionality_list3"),
          t("project9:functionality_list4"),
          t("project9:functionality_list5"),
        ]}
        coming_soon={t("common:coming_soon")}
      />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["project9", "common"])),
    },
  };
}
