import React from "react";
import { useTranslation } from "react-i18next";

//STYLES
import styles from "./MainDetails.module.scss";

export const MainDetails = ({
  launchName,
  details,
  flightNumber,
  launchSiteName,
  rocketName,
  date_utc,
  success,
  date_precision,
}: mainDetailsProps) => {
  const { t } = useTranslation();

  let launch = success ? t("launchSuccessful") : t("launchFailure");

  if (
    new Date(date_utc) > new Date() ||
    ["quarter", "half", "year", "month"].includes(date_precision)
  )
    launch = t("launchNotLaunchedYet");

  let datePrec = "key";
  if (date_precision === "month") datePrec = "keyMonth";

  return (
    <div className={styles.MainDetailsContainer}>
      <h2>{launchName}</h2>
      <p>{details} </p>
      <h4 className={styles.LaunchNumber}>#{flightNumber}</h4>
      <div className={styles.DetailsWrapper}>
        <div className={styles.TitlesContainer}>
          {launchSiteName && <h4>{t("launchSite")}:</h4>}
          {rocketName && <h4>{t("rocket")}:</h4>}
          {date_utc && <h4>{t("date")}:</h4>}
          {success !== null && <h4>{t("launch")}:</h4>}
        </div>
        <div className={styles.ValuesContainer}>
          {launchSiteName && <h4>{launchSiteName}</h4>}
          {rocketName && <h4>{rocketName}</h4>}
          {date_utc && <h4>{t(datePrec, { date: new Date(date_utc) })}</h4>}
          {success !== null && (
            <h4 style={{ color: success ? "#4BB543" : "#FA113D" }}>{launch}</h4>
          )}
        </div>
      </div>
    </div>
  );
};

type mainDetailsProps = {
  launchName: string;
  details: string;
  flightNumber: number;
  launchSiteName: string;
  rocketName: string;
  date_utc: string;
  success: boolean;
  date_precision: string;
};
