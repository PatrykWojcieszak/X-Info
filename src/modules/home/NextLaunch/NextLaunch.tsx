import React, { useState, useCallback, useEffect } from "react";
import "moment-precise-range-plugin";
import { motion, AnimatePresence } from "framer-motion";

//STYLES
import styles from "./NextLaunch.module.scss";
import { ITime } from "../../../Models/ITime";
import { bottomToTopAnim } from "../../../Animations/Animations_motion";
import Countdown from "../Countdown/Countdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LaunchDetails from "../LaunchDetails/LaunchDetails";
import IQueryResult from "../../../Models/IQueryResult";
import ILaunch from "../../../Models/ILaunch";

const NextLaunch = ({ elonMuskQuote, nextLaunch }: nextLaunchProps) => {
  const [showLaunchDetails, setShowLaunchDetails] = useState(false);
  const [timer, setTimer] = useState<ITime>({
    days: 0,
    firstDateWasLater: true,
    hours: 0,
    minutes: 0,
    months: 0,
    seconds: 0,
    years: 0,
  });

  const moment = require("moment");
  const dateLocal = nextLaunch.docs[0].date_local;

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
    <div className={styles.Top}>
      <motion.div
        variants={bottomToTopAnim}
        initial="hidden"
        animate="show"
        className={styles.Top__Content}>
        <div className={styles.LaunchTitle}>
          <h2>NEXT LAUNCH: </h2>
          <h2 className={styles.LaunchName}>{nextLaunch.docs[0].name}</h2>
        </div>
        {timer !== undefined ? (
          <Countdown
            days={timer.days}
            hours={timer.hours}
            minutes={timer.minutes}
            seconds={timer.seconds}
          />
        ) : null}
        {showLaunchDetails ? null : (
          <div className={styles.ShowMore}>
            <FontAwesomeIcon
              icon="arrow-down"
              onClick={() => setShowLaunchDetails(!showLaunchDetails)}
            />
            <h4>SHOW DETAILS</h4>
          </div>
        )}
        <AnimatePresence>
          {showLaunchDetails ? (
            <LaunchDetails
              flightNumber={nextLaunch.docs[0].flight_number}
              dateLocal={nextLaunch.docs[0].date_local}
              details={nextLaunch.docs[0].details}
              rocketName={nextLaunch.docs[0].rocket.name}
              launchpadFullName={nextLaunch.docs[0].launchpad.full_name}
            />
          ) : null}
        </AnimatePresence>
        <div className={styles.QuoteContainer}>
          <h2>
            {elonMuskQuote} - <span>Elon Musk</span>
          </h2>
        </div>
      </motion.div>
    </div>
  );
};

type nextLaunchProps = {
  elonMuskQuote: string;
  nextLaunch: IQueryResult<ILaunch>;
};

export default NextLaunch;
