import React from "react";
import { useTranslation } from "react-i18next";

//STYLES
import styles from "./Author.module.scss";

export const Author = () => {
  const { t } = useTranslation();

  return (
    <h3 className={styles.Author}>
      {t("createdBy")}:{" "}
      <a
        href="https://github.com/PatrykWojcieszak"
        target="_blank"
        rel="noopener noreferrer">
        {" "}
        Patryk Wojcieszak
      </a>{" "}
      {t("using")}{" "}
      <a
        href="https://github.com/r-spacex/SpaceX-API"
        target="_blank"
        rel="noopener noreferrer">
        SpaceX-Api
      </a>
    </h3>
  );
};
