import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Nav from "../shared/nav/nav";
import Countdown from "./countdown/countdown";
import RecentLaunches from './recentLaunches/recentLaunches';

import styles from "./home.module.scss";

const home = () => {
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
          <div className={styles.ShowMore}>
            <FontAwesomeIcon icon="arrow-down" />
            <h4>SHOW DETAILS</h4>
          </div>
        </div>
      </div>
      <div className={styles.Home__Content}>
        <RecentLaunches/>
      </div>
    </div>
  );
};

export default home;
