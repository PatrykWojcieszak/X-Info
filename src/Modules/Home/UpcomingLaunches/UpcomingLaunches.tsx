import React from "react";
import { Link } from "react-router-dom";

//COMPONENTS
import Button from "../../Shared/Button/Button";
import LaunchShortInfo from "../../Shared/LaunchShortInfo/LaunchShortInfo";

//STYLES
import styles from "./UpcomingLaunches.module.scss";

//MODELS
import Launch_model from "../../../Models/ILaunch";

const UpcomingLaunches = ({ launches }: upcomingLaunchesProps) => {
  return (
    <div className={styles.UpcomingLaunches}>
      <div className={styles.Top}>
        <h2>UPCOMING LAUNCHES</h2>
      </div>
      {launches.slice(0, 5).map((launch, index) => (
        <LaunchShortInfo
          key={index}
          launchName={launch.name}
          launchDateUtc={launch.date_utc}
          rocketName={launch.rocket.name}
          launchSiteName={launch.launchpad.full_name}
          customer={launch.payloads[0].customers[0]}
          flightNumber={launch.flight_number}
          nationality={launch.payloads[0].nationalities[0]}
        />
      ))}
      <div className={styles.ButtonWrapper}>
        <Link to="/launches/upcoming">
          <Button name="SHOW ALL" />
        </Link>
      </div>
    </div>
  );
};

type upcomingLaunchesProps = {
  launches: Launch_model[];
};

export default React.memo(UpcomingLaunches);
