import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

//COMPONENTS
import { Button } from "../";

//STYLES
import styles from "./LaunchExtendedInfo.module.scss";
import noImage from "../../../resources/images/noImage.png";

//TYPES
import { Failure } from "../../../Types";

export const LaunchExtendedInfo = React.memo(
  ({
    showMoreDetailsButton,
    details,
    launchName,
    date_utc,
    date_local,
    rocketName,
    launchSiteName,
    flightNumber,
    patchImg,
    success,
    failures,
    launchId,
    date_precision,
  }: LaunchExtendedInfoProps) => {
    const { t } = useTranslation();

    let launch = success ? t("launchSuccessful") : t("launchFailure");

    if (
      new Date(date_utc) > new Date() ||
      ["quarter", "half", "year", "month"].includes(date_precision)
    )
      launch = t("launchNotLaunchedYet");

    return (
      <Link
        style={{ cursor: showMoreDetailsButton ? "pointer" : "default" }}
        to={showMoreDetailsButton ? `/launch/${flightNumber}` : null}>
        <div className={styles.LatestLaunch}>
          <div className={styles.LeftContainer}>
            <img src={patchImg ? patchImg : noImage} alt="mission patch" />
            {showMoreDetailsButton && (
              <Button styleType="primary" name={t("moreDetails")} />
            )}
          </div>
          <div className={styles.RightContainer}>
            <div className={styles.MainInfoContainer}>
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
                  {date_utc && (
                    <h4>{t("key", { date: new Date(date_utc) })}</h4>
                  )}
                  {success !== null && (
                    <h4 style={{ color: success ? "#4BB543" : "#FA113D" }}>
                      {launch}
                    </h4>
                  )}
                </div>
              </div>
            </div>
            {!success && failures.length > 0 ? (
              <div className={styles.FailureContainer}>
                <h4>{t("failures")}:</h4>
                <ul>
                  {failures.map((failure, index) => (
                    <li key={index}>{failure.reason}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </Link>
    );
  }
);

type LaunchExtendedInfoProps = {
  showMoreDetailsButton: boolean;
  details: string;
  launchName: string;
  date_utc: string;
  date_local: string;
  rocketName: string;
  launchSiteName: string;
  flightNumber: Number;
  patchImg: string;
  success: boolean;
  failures: Failure[];
  launchId: string;
  date_precision: string;
};
