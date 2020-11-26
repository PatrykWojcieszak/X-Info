import React from "react";

import Launch from "./launch/launch";
import Button from "../../shared/button/button";

import styles from "./recentLaunches.module.scss";

const recentLaunches = () => {
  return (
    <div className={styles.RecentLaunches}>
      <div className={styles.Top}>
        <h2>RECENT LAUNCHES</h2>
        <Button name="SHOW MORE" />
      </div>
      <div className={styles.Content}>
        <Launch />
        <Launch />
        <Launch />
        <Launch />
        <Launch />
      </div>
    </div>
  );
};

export default recentLaunches;
