import React from "react";

import Launch from "./launch/launch";
import Button from "../button/button";

import styles from "./upcomingLaunches.module.scss";

const upcomingLaunches = () => {
  return (
    <div className={styles.UpcomingLaunches}>
      <h2>UPCOMING LAUNCHES</h2>
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
