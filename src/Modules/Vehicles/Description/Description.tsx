import React from "react";
import { useTranslation } from "react-i18next";

//STYLES
import styles from "./Description.module.scss";

export const Description = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.Description}>
      <h2>{t("rockets")}</h2>
      <h4>
        {t("rocketsDescriptionPart1")}{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.spacex.com/">
          SpaceX
        </a>
        {t("rocketsDescriptionPart2")}
      </h4>
    </div>
  );
};
