import React from "react";
import { useTranslation } from "react-i18next";

//STYLES
import styles from "./MainDetails.module.scss";

export const MainDetails = ({
  launchName,
  launchDateUtc,
  rocketName,
  success,
  flightNumber,
}: mainDetails) => {
  const { t } = useTranslation();

  return (
    <div className={styles.MainDetails}>
      <div className={styles.Name_Date}>
        <h2>{launchName}</h2>
        <h4>{t("key", { date: new Date(launchDateUtc) })}</h4>
      </div>
      <div className={styles.Column}>
        <div className={styles.Row}>
          <h4>{t("rocket")}: </h4>
          <h3>{rocketName}</h3>
        </div>
        {success !== null && success !== undefined ? (
          <div className={styles.Row}>
            <h4>{t("launch")}: </h4>
            <h3 style={{ color: success ? "#4BB543" : "#FA113D" }}>
              {success ? t("launchSuccessful") : t("launchFailure")}
            </h3>
          </div>
        ) : null}
      </div>
      <h4 className={styles.LaunchNumber}>#{flightNumber}</h4>
    </div>
  );
};

type mainDetails = {
  launchName: string;
  launchDateUtc: string;
  rocketName: string;
  success?: boolean;
  flightNumber: number;
};
