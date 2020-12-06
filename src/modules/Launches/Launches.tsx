import React, { useState, useEffect } from "react";
import Axios from "axios";

//COMPONENTS
import Button from "../shared/Button/Button";
import Launch from "../shared/LaunchShortInfo/LaunchShortInfo";
import LatestLaunch from "../shared/LaunchExtendedInfo/LaunchExtendedInfo";

//STYLES
import styles from "./Launches.module.scss";

//MODELS
import ILaunch from "../../Models/ILaunch";
import LatestLaunchQuery from "../../Queries/LatestLaunchQuery";
import IQueryResult from "../../Models/IQueryResult";

const Launches = () => {
  const [showPastLaunches, setShowPastLaunches] = useState(false);
  const [showUpcomingLaunches, setShowUpcomingLaunches] = useState(true);
  const [latestLaunch, setLatestLaunch] = useState<ILaunch | undefined>(
    undefined
  );

  useEffect(() => {
    Axios.post<IQueryResult<ILaunch>>(
      "https://api.spacexdata.com/v4/launches/query",
      LatestLaunchQuery
    )
      .then((res) => {
        console.log(res.data);
        setLatestLaunch(res.data.docs[0]);
      })
      .catch((err) => {});
  }, []);

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
        {latestLaunch !== undefined ? (
          <>
            <h2>LATEST LAUNCH</h2>
            <LatestLaunch
              showMoreDetailsButton
              details={latestLaunch.details}
              launchName={latestLaunch.name}
              date_local={latestLaunch.date_local}
              date_utc={latestLaunch.date_utc}
              rocketName={latestLaunch.rocket.name}
              launchSiteName={latestLaunch.launchpad.full_name}
              flightNumber={latestLaunch.flight_number}
              patchImg={latestLaunch.links.patch.small}
              success={latestLaunch.success}
              failures={latestLaunch.failures}
            />{" "}
          </>
        ) : null}
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
        {/* <Launch />
        <Launch />
        <Launch /> */}
      </div>
    </div>
  );
};

export default Launches;
