import React from "react";
import { useTranslation } from "react-i18next";

//STYLES
import styles from "./StarlinkDetails.module.scss";

export const StarlinkDetails = ({
  label,
  version,
  height,
  velocity,
}: starlinkDetailsProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.StarlinkDetails}>
      <h2>STARLINK</h2>
      <div className={styles.InfoContainer}>
        <div className={styles.NameWrapper}>
          <h4>{t("name")}</h4>
          <h4>{t("version")}</h4>
          <h4>{t("height")}</h4>
          <h4>{t("velocity")}</h4>
        </div>
        <div className={styles.ValuesWrapper}>
          <h4>{label}</h4>
          <h4>{version}</h4>
          <h4>{Number(height).toFixed(2)} km</h4>
          <h4>{Number(velocity).toFixed(2)} kms</h4>
        </div>
      </div>
    </div>
  );
};

type starlinkDetailsProps = {
  label: string;
  version: string;
  height: number;
  velocity: number;
};
