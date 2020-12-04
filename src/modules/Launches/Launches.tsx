import React, { useState } from "react";
import Button from "../shared/Button/Button";

import Launch from "../shared/LaunchShortInfo/LaunchShortInfo";
import LatestLaunch from "../shared/LaunchExtendedInfo/LaunchExtendedInfo";

import styles from "./Launches.module.scss";

const Launches = () => {
  const [showPastLaunches, setShowPastLaunches] = useState(false);
  const [showUpcomingLaunches, setShowUpcomingLaunches] = useState(true);

  const showPastLaunchesHandler = () => {
    setShowPastLaunches(true);
    setShowUpcomingLaunches(false);
  };

  const showUpcomingLaunchesHandler = () => {
    setShowPastLaunches(false);
    setShowUpcomingLaunches(true);
  };

  return (
    <div className={styles.Launches}>
      <div className={styles.Latest}>
        <h2>LATEST LAUNCH</h2>
        <LatestLaunch showMoreDetailsButton />
      </div>
      <div className={styles.Content}>
        <div className={styles.ButtonsWrapper}>
          <Button
            selected={showUpcomingLaunches}
            clicked={showUpcomingLaunchesHandler}
            name="UPCOMING LAUNCHES"
          />
          <Button
            selected={showPastLaunches}
            clicked={showPastLaunchesHandler}
            name="PAST LAUNCHES"
          />
        </div>
        <Launch />
        <Launch />
        <Launch />
      </div>
    </div>
  );
};

export default Launches;
