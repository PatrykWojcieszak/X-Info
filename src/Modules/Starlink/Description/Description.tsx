import React from "react";
import { useTranslation } from "react-i18next";

//STYLES
import styles from "./Description.module.scss";

export const Description = ({ starlinkOnTheOrbit }: descriptionProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.Description}>
      <h2>STARLINK</h2>
      <h3>
        <b>Starlink</b> {t("starlinkDescriptionPart1")}{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.spacex.com/">
          SpaceX
        </a>{" "}
        {t("starlinkDescriptionPart2")}
      </h3>
      <h4>
        {t("starlinkOnTheOrbit")}: {starlinkOnTheOrbit}
      </h4>
    </div>
  );
};

type descriptionProps = {
  starlinkOnTheOrbit: number;
};
