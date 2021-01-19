import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

//COMPONENTS
import Button from "../Button/Button";

//STYLES
import styles from "./LaunchExtendedInfo.module.scss";
import noImage from "../../../resources/images/noImage.png";

//TYPES
import { Failure } from "../../../Types";

const LaunchExtendedInfo = ({
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
  const dateParsed = new Date(date_utc);

  let launch = success ? "SUCCESSFUL" : "FAILURE";

  if (
    dateParsed > new Date() ||
    ["quarter", "half", "year", "month"].includes(date_precision)
  )
    launch = "NOT LAUNCHED YET";

  return (
    <Link
      style={{ cursor: showMoreDetailsButton ? "pointer" : "default" }}
      to={showMoreDetailsButton ? `/launch/${flightNumber}` : null}>
      <div className={styles.LatestLaunch}>
        <div className={styles.LeftContainer}>
          <img src={patchImg ? patchImg : noImage} alt="mission patch" />
          {showMoreDetailsButton ? <Button name={t("moreDetails")} /> : null}
        </div>
        <div className={styles.RightContainer}>
          <div className={styles.MainInfoContainer}>
            <h2>{launchName}</h2>
            <p>{details} </p>
            <h4 className={styles.LaunchNumber}>#{flightNumber}</h4>
            <div className={styles.DetailsWrapper}>
              <div className={styles.TitlesContainer}>
                <h4>{t("launchSite")}:</h4>
                <h4>{t("rocket")}:</h4>
                <h4>{t("date")}:</h4>
                <h4>{t("launch")}:</h4>
              </div>
              <div className={styles.ValuesContainer}>
                <h4>{launchSiteName}</h4>
                <h4>{rocketName}</h4>
                <h4>{dateParsed.toDateString()}</h4>
                <h4 style={{ color: success ? "#4BB543" : "#FA113D" }}>
                  {launch}
                </h4>
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
};

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

export default React.memo(LaunchExtendedInfo);
