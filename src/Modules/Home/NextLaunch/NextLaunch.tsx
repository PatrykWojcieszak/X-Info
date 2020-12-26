import React, { useState, useCallback, useEffect } from "react";
import "moment-precise-range-plugin";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//COMPONENTS
import LaunchDetails from "../LaunchDetails/LaunchDetails";
import Countdown from "../Countdown/Countdown";

//MODELS
import { ITime } from "../../../Models/ITime";
import ILaunch from "../../../Models/ILaunch";
import IQueryResult from "../../../Models/IQueryResult";

//STYLES
import styles from "./NextLaunch.module.scss";

//OTHER
import { bottomToTopAnim } from "../../../Animations/Animations_motion";

const initialTime: ITime = {
  days: 0,
  firstDateWasLater: true,
  hours: 4,
  minutes: 20,
  months: 0,
  seconds: 69,
  years: 0,
};

const NextLaunch = ({ elonMuskQuote, nextLaunch }: nextLaunchProps) => {
  const [showLaunchDetails, setShowLaunchDetails] = useState(false);
  const [timer, setTimer] = useState<ITime>(initialTime);

  const moment = require("moment");
  const dateLocal = nextLaunch.docs[0].date_local;

  const timeDiff = useCallback(() => {
    const launchDate = new Date(dateLocal);
    const currentDate = new Date();
    const diff = moment().preciseDiff(launchDate, currentDate, true);

    return diff;
  }, [dateLocal, moment]);

  useEffect(() => {
    const timeDifference = timeDiff;

    const interval = setInterval(() => setTimer(timeDifference), 1000);

    if (
      timer.days === 0 &&
      timer.hours === 0 &&
      timer.minutes === 0 &&
      timer.seconds === 0
    )
      clearInterval(interval);

    return () => {
      clearInterval(interval);
    };
  }, [timer, timeDiff]);

  let nextLaunchWrapper = (
    <AnimatePresence>
      <div className={styles.Top}>
        <motion.div
          variants={bottomToTopAnim}
          initial="hidden"
          animate="show"
          exit="exit"
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
    </AnimatePresence>
  );

  if (timer.days === 0 && timer.hours === 0 && timer.minutes < 2)
    nextLaunchWrapper = (
      <AnimatePresence>
        <motion.div
          className={styles.YouTubeContainer}
          variants={bottomToTopAnim}
          initial="hidden"
          animate="show"
          exit="exit">
          <iframe
            title="spacex video"
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${nextLaunch.docs[0].links.youtube_id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </motion.div>
      </AnimatePresence>
    );

  return <div className={styles.NextLaunch}>{nextLaunchWrapper}</div>;
};

type nextLaunchProps = {
  elonMuskQuote: string;
  nextLaunch: IQueryResult<ILaunch>;
};

export default NextLaunch;
