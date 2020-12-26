import React from "react";
import { Link } from "react-router-dom";

//STYLES
import styles from "./LaunchShortInfo.module.scss";

//OTHER
import { getCountryCode } from "../../../Other/GetCountryCode";

const LaunchShortInfo = ({
  launchName,
  launchDateUtc,
  rocketName,
  launchSiteName,
  customer,
  flightNumber,
  success,
  nationality,
}: launchShortInfoProps) => {
  const countryCode = getCountryCode(nationality);
  const dateParsed = new Date(launchDateUtc);

  return (
    <Link to={`/launch/${flightNumber}`}>
      <div className={styles.Launch}>
        <div className={styles.Top}>
          <div className={styles.Name_Date}>
            <h2>{launchName}</h2>
            <h4>{dateParsed.toDateString()}</h4>
          </div>
          <div className={styles.Column}>
            <div className={styles.Row}>
              <h4>ROCKET: </h4>
              <h3>{rocketName}</h3>
            </div>
            {success !== undefined ? (
              <div className={styles.Row}>
                <h4>LAUNCH: </h4>
                <h3 style={{ color: success ? "#4BB543" : "#FA113D" }}>
                  {success ? "SUCCESSFUL" : "FAILURE"}
                </h3>
              </div>
            ) : null}
          </div>
          <h4 className={styles.LaunchNumber}>#{flightNumber}</h4>
        </div>
        <div className={styles.Content}>
          <div className={styles.Content__Element}>
            <h4 className={styles.Title}>LAUNCH SITE: </h4>
            <h4 className={styles.Title}>CUSTOMER: </h4>
          </div>
          <div className={styles.Content__Element}>
            <h4 className={styles.Value}>{launchSiteName}</h4>
            <h4 className={styles.Value}>{customer}</h4>
          </div>
        </div>
        <img
          className={styles.Flag}
          src={`https://www.countryflags.io/${countryCode}/flat/64.png`}
          alt="flag"
        />
      </div>
    </Link>
  );
};

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

export default React.memo(LaunchShortInfo);
