import React from "react";

import styles from "./Countdown.module.scss";

const Countdown = () => {
  return (
    <div className={styles.Countdown}>
      <div className={styles.Element}>
        <h2>04</h2>
        <h4>DAYS</h4>
      </div>
      <div className={styles.Colon}>
        <h2>:</h2>
      </div>
      <div className={styles.Element}>
        <h2>12</h2>
        <h4>HOURS</h4>
      </div>
      <div className={styles.Colon}>
        <h2>:</h2>
      </div>
      <div className={styles.Element}>
        <h2>48</h2>
        <h4>MINUTES</h4>
      </div>
      <div className={styles.Colon}>
        <h2>:</h2>
      </div>
      <div className={styles.Element}>
        <h2>32</h2>
        <h4>SECONDS</h4>
      </div>
    </div>
  );
};

export default Countdown;
