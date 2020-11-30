import React from "react";

import Launch from "./launch/launch";
import Button from "../button/button";

import styles from "./upcomingLaunches.module.scss";

const upcomingLaunches = () => {
  return (
    <div className={styles.UpcomingLaunches}>
      <div className={styles.Top}>
        <h2>UPCOMING LAUNCHES</h2>
      </div>
      <Launch />
      <Launch />
      <Launch />
      <Launch />
      <Launch />
      <Launch />
      <div className={styles.ButtonWrapper}>
        <Button name="SHOW ALL" />
      </div>
    </div>
  );
};

export default upcomingLaunches;
