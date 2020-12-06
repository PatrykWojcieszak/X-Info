import React from "react";

import Button from "../../shared/Button/Button";
import LaunchShortInfo from "../../shared/LaunchShortInfo/LaunchShortInfo";

import styles from "./UpcomingLaunches.module.scss";

import Launch_model from "../../../Models/ILaunch";

const UpcomingLaunches = ({ launches }: upcomingLaunchesProps) => {
  return (
    <div className={styles.UpcomingLaunches}>
      <div className={styles.Top}>
        <h2>UPCOMING LAUNCHES</h2>
      </div>
      {launches.map((launch, index) => (
        <LaunchShortInfo
          key={index}
          launchName={launch.name}
          launchDateUtc={launch.date_utc}
          rocketName={launch.rocket.name}
          launchSiteName={launch.launchpad.full_name}
          customer={launch.payloads[0].customers[0]}
          flightNumber={launch.flight_number}
        />
      ))}
      <div className={styles.ButtonWrapper}>
        <Button name="SHOW ALL" />
      </div>
    </div>
  );
};

type upcomingLaunchesProps = {
  launches: Launch_model[];
};

export default UpcomingLaunches;
