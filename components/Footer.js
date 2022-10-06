import React from "react";
import { useRouter } from "next/router";

export default function Footer(props) {
  const router = useRouter();

  const onToggleLanguageClick = (newLocale) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const changeTo = router.locale === "en" ? "lt" : "en";

  return (
    <>
      <h1>Footeris</h1>
      <button onClick={() => onToggleLanguageClick(changeTo)}>
        Change Language
      </button>
    </>
  );
}
