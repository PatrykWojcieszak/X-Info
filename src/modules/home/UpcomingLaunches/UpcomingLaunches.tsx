import React from "react";

import Button from "../../shared/Button/Button";
import Launch from "../../shared/LaunchShortInfo/LaunchShortInfo";

import styles from "./UpcomingLaunches.module.scss";

const UpcomingLaunches = () => {
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

export default UpcomingLaunches;
