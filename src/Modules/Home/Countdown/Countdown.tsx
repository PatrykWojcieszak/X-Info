import React from "react";
import "moment-precise-range-plugin";

//STYLES
import styles from "./Countdown.module.scss";

const Countdown = ({ days, hours, minutes, seconds }: countdownProps) => {
  return (
    <>
      <div className={styles.Countdown}>
        <div className={styles.Element}>
          <h2>{("0" + days).slice(-2)}</h2>
          <h4>DAYS</h4>
        </div>
        <h2 className={styles.Colon}>:</h2>
        <div className={styles.Element}>
          <h2>{("0" + hours).slice(-2)}</h2>
          <h4>HOURS</h4>
        </div>
        <h2 className={styles.Colon}>:</h2>
        <div className={styles.Element}>
          <h2>{("0" + minutes).slice(-2)}</h2>
          <h4>MINUTES</h4>
        </div>
        <h2 className={styles.Colon}>:</h2>
        <div className={styles.Element}>
          <h2>{("0" + seconds).slice(-2)}</h2>
          <h4>SECONDS</h4>
        </div>
      </div>
    </>
  );
};

type countdownProps = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default React.memo(Countdown);
