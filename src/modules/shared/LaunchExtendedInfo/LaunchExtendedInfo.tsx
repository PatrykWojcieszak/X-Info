import React from "react";
import { Link } from "react-router-dom";

//COMPONENTS
import Button from "../Button/Button";

//STYLES
import styles from "./LaunchExtendedInfo.module.scss";

//MODELS
import IFailure from "../../../Models/IFailure";

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
}: LaunchExtendedInfoProps) => {
  const dateParsed = new Date(date_utc);

  return (
    <div className={styles.LatestLaunch}>
      <div className={styles.LeftContainer}>
        <img src={patchImg} alt="mission patch" />
        {showMoreDetailsButton ? (
          <Link to={`/launch/${flightNumber}`}>
            <Button name="MORE DETAILS" />
          </Link>
        ) : null}
      </div>
      <div className={styles.RightContainer}>
        <div className={styles.MainInfoContainer}>
          <h2>{launchName}</h2>
          <p>{details} </p>
          <h4 className={styles.LaunchNumber}>#{flightNumber}</h4>
          <div className={styles.DetailsWrapper}>
            <div className={styles.TitlesContainer}>
              <h4>LAUNCH SITE:</h4>
              <h4>ROCKET:</h4>
              <h4>DATE:</h4>
              <h4>LAUNCH:</h4>
            </div>
            <div className={styles.ValuesContainer}>
              <h4>{launchSiteName}</h4>
              <h4>{rocketName}</h4>
              <h4>{dateParsed.toDateString()}</h4>
              <h4 style={{ color: success ? "#4BB543" : "#FA113D" }}>
                {success ? "SUCCESSFUL" : "FAILURE"}
              </h4>
            </div>
          </div>
        </div>
        {success ? null : (
          <div className={styles.FailureContainer}>
            {/* <p>
              The rocket and Amos-6 payload were lost in a launch pad explosion
              on September 1, 2016 during propellant fill prior to a static fire
              test. The pad was clear of personnel and there were no injuries.
            </p> */}
            <h4>FAILURES:</h4>
            <ul>
              {failures.map((failure, index) => (
                <li key={index}>{failure.reason}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
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
  failures: IFailure[];
  launchId: string;
};

export default LaunchExtendedInfo;
