import React from "react";

import styles from "./LaunchShortInfo.module.scss";

const LaunchShortInfo = ({
  launchName,
  launchDateUtc,
  rocketName,
  launchSiteName,
  customer,
  flightNumber,
}: launchShortInfoProps) => {
  const dateParsed = new Date(launchDateUtc);

  return (
    <div className={styles.Launch}>
      <div className={styles.Top}>
        <div className={styles.Name_Date}>
          <h2>{launchName}</h2>
          <h4>{dateParsed.toDateString()}</h4>
        </div>
        <div className={styles.RocketType}>
          <h4>ROCKET: </h4>
          <h3>{rocketName}</h3>
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
        src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
        alt="flag"
      />
    </div>
  );
};

type launchShortInfoProps = {
  launchName: string;
  launchDateUtc: string;
  rocketName: string;
  launchSiteName: string;
  customer: string;
  flightNumber: Number;
};

export default LaunchShortInfo;
