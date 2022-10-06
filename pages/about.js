import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function About(props) {
  const { t } = useTranslation();
  return (
    <>
      <h1>About page</h1>
      <p>{t("home:welcome_msg")}</p>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"])),
    },
  };
}
