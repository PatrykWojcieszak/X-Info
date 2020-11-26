import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Nav from "../shared/nav/nav";
import Countdown from "./countdown/countdown";
import RecentLaunches from "./recentLaunches/recentLaunches";
import UpcomingLaunches from "../shared/upcomingLaunches/upcomingLaunches";
import Footer from "../shared/footer/footer";
import LaunchDetails from "./launchDetails/launchDetails";

import styles from "./home.module.scss";

const Home = () => {
  const [showLaunchDetails, setShowLaunchDetails] = useState(false);

  return (
    <div className={styles.Home}>
      <div className={styles.Top}>
        <Nav></Nav>
        <div className={styles.Top__Content}>
          <div className={styles.LaunchTitle}>
            <h2>NEXT LAUNCH: </h2>
            <h2 className={styles.LaunchName}>SENTINEL-6 Michael Freilich</h2>
          </div>
          <Countdown />
          {showLaunchDetails ? null : (
            <div className={styles.ShowMore}>
              <FontAwesomeIcon
                icon="arrow-down"
                onClick={() => setShowLaunchDetails(!showLaunchDetails)}
              />
              <h4>SHOW DETAILS</h4>
            </div>
          )}
          {showLaunchDetails ? <LaunchDetails /> : null}
        </div>
      </div>
      <div className={styles.Home__Content}>
        <RecentLaunches />
        <UpcomingLaunches />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
