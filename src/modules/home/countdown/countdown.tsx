import React, { useState, useEffect, useCallback } from "react";
import "moment-precise-range-plugin";

import styles from "./Countdown.module.scss";

interface Time {
  days: Number;
  firstDateWasLater: boolean;
  hours: Number;
  minutes: Number;
  months: Number;
  seconds: Number;
  years: Number;
}

const Countdown = ({ dateLocal }: countdownProps) => {
  const [timer, setTimer] = useState<Time>({
    days: 0,
    firstDateWasLater: true,
    hours: 0,
    minutes: 0,
    months: 0,
    seconds: 0,
    years: 0,
  });

  const moment = require("moment");

  const timeDiff = useCallback(() => {
    const launchDate = new Date(dateLocal);
    const currentDate = new Date();
    const diff = moment().preciseDiff(launchDate, currentDate, true);

    return diff;
  }, [dateLocal, moment]);

  useEffect(() => {
    const interval = setInterval(() => setTimer(timeDiff), 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timeDiff]);

  return (
    <>
      {timer !== undefined ? (
        <div className={styles.Countdown}>
          <div className={styles.Element}>
            <h2>{("0" + timer.days).slice(-2)}</h2>
            <h4>DAYS</h4>
          </div>
          <h2 className={styles.Colon}>:</h2>
          <div className={styles.Element}>
            <h2>{("0" + timer.hours).slice(-2)}</h2>
            <h4>HOURS</h4>
          </div>
          <h2 className={styles.Colon}>:</h2>
          <div className={styles.Element}>
            <h2>{("0" + timer.minutes).slice(-2)}</h2>
            <h4>MINUTES</h4>
          </div>
          <h2 className={styles.Colon}>:</h2>
          <div className={styles.Element}>
            <h2>{("0" + timer.seconds).slice(-2)}</h2>
            <h4>SECONDS</h4>
          </div>{" "}
        </div>
      ) : null}
    </>
  );
};

type countdownProps = {
  dateLocal: string;
};

export default Countdown;
