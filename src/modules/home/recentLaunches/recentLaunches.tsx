import React from "react";

import Launch from "./Launch/Launch";
import Button from "../../shared/Button/Button";

import styles from "./RecentLaunches.module.scss";

const RecentLaunches = () => {
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

export default RecentLaunches;
