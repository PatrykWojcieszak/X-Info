import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

//STYLES
import styles from "./LaunchShortInfo.module.scss";

//OTHER
import { getCountryCode } from "../../../Other/GetCountryCode";

export const LaunchShortInfo = React.memo(
  ({
    launchName,
    launchDateUtc,
    rocketName,
    launchSiteName,
    customer,
    flightNumber,
    success,
    nationality,
  }: launchShortInfoProps) => {
    const { t } = useTranslation();
    const countryCode = getCountryCode(nationality);

    return (
      <Link to={`/launch/${flightNumber}`}>
        <div className={styles.Launch}>
          <div className={styles.Top}>
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
          <div className={styles.Content}>
            <div className={styles.Content__Element}>
              {launchSiteName && (
                <h4 className={styles.Title}>{t("launchSite")}: </h4>
              )}
              {customer && <h4 className={styles.Title}>{t("customer")}: </h4>}
            </div>
            <div className={styles.Content__Element}>
              {launchSiteName && (
                <h4 className={styles.Value}>{launchSiteName}</h4>
              )}
              {customer && <h4 className={styles.Value}>{customer}</h4>}
            </div>
          </div>
          <img
            className={styles.Flag}
            src={`https://www.countryflags.io/${countryCode}/flat/64.png`}
            alt="flag"
            loading="lazy"
          />
        </div>
      </Link>
    );
  }
);

type launchShortInfoProps = {
  launchName: string;
  launchDateUtc: string;
  rocketName: string;
  launchSiteName: string;
  customer: string;
  flightNumber: Number;
  success?: boolean;
  nationality: string;
};
