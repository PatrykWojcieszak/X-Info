import React, { useState, useCallback, useEffect } from "react";
import "moment-precise-range-plugin";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

//COMPONENTS
import { LaunchDetails } from "./LaunchDetails/LaunchDetails";
import { Countdown } from "../Countdown/Countdown";
import { YouTubeFrame } from "../../Shared/YoutubeFrame/YouTubeFrame";
import { LaunchName } from "./LaunchName/LaunchName";

//MODELS
import { Time } from "../../../Types";

//STYLES
import styles from "./NextLaunch.module.scss";
import { bottomToTopAnim } from "../../../Animations/Animations_motion";

//REDUX
import { fetchNextLaunch } from "../../../Store/NextLaunch/nextLaunchSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Store/rootReducer";

const initialTime: Time = {
  days: 0,
  firstDateWasLater: true,
  hours: 4,
  minutes: 20,
  months: 0,
  seconds: 69,
  years: 0,
};

export const NextLaunch = ({ elonMuskQuote }: nextLaunchProps) => {
  const { t } = useTranslation();

  const [showLaunchDetails, setShowLaunchDetails] = useState(false);
  const [timer, setTimer] = useState<Time>(initialTime);
  const nextLaunch = useSelector((state: RootState) => state.nextLaunch);

  const dispatch = useDispatch();

  useEffect(() => {
    if (nextLaunch.nextLaunch.docs.length === 0) dispatch(fetchNextLaunch());
  }, [dispatch, nextLaunch]);

  const moment = require("moment");
  const dateLocal = nextLaunch.nextLaunch.docs[0]?.date_local;

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

  let nextLaunchWrapper = <div className={styles.Top}></div>;

  if (
    !nextLaunch.loading &&
    (nextLaunchWrapper = (
      <AnimatePresence>
        <div className={styles.Top}>
          <motion.div
            variants={bottomToTopAnim}
            initial="hidden"
            animate="show"
            exit="exit"
            className={styles.Top__Content}>
            <LaunchName
              launchName={nextLaunch.nextLaunch.docs[0].name}
              dateLocal={nextLaunch.nextLaunch.docs[0]?.date_local}
            />
            {timer && (
              <Countdown
                days={timer.days}
                hours={timer.hours}
                minutes={timer.minutes}
                seconds={timer.seconds}
              />
            )}
            {!showLaunchDetails && (
              <div className={styles.ShowMore}>
                <FontAwesomeIcon
                  icon="arrow-down"
                  onClick={() => setShowLaunchDetails(!showLaunchDetails)}
                />
                <h4>{t("showDetails")}</h4>
              </div>
            )}
            <AnimatePresence>
              {showLaunchDetails && (
                <LaunchDetails
                  flightNumber={nextLaunch.nextLaunch.docs[0].flight_number}
                  dateLocal={nextLaunch.nextLaunch.docs[0].date_local}
                  details={nextLaunch.nextLaunch.docs[0].details}
                  rocketName={nextLaunch.nextLaunch.docs[0].rocket.name}
                  datePrecision={nextLaunch.nextLaunch.docs[0].date_precision}
                  launchpadFullName={
                    nextLaunch.nextLaunch.docs[0].launchpad.full_name
                  }
                />
              )}
            </AnimatePresence>
            <div className={styles.QuoteContainer}>
              <h2>
                {elonMuskQuote} - <span>Elon Musk</span>
              </h2>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    ))
  )
    if (
      timer.days === 0 &&
      timer.hours === 0 &&
      timer.minutes < 2 &&
      nextLaunch.nextLaunch.docs[0]?.links.youtube_id
    )
      nextLaunchWrapper = (
        <AnimatePresence>
          <motion.div
            className={styles.YouTubeContainer}
            variants={bottomToTopAnim}
            initial="hidden"
            animate="show"
            exit="exit">
            <YouTubeFrame
              url={nextLaunch.nextLaunch.docs[0]?.links.youtube_id}
            />
          </motion.div>
        </AnimatePresence>
      );

  return <div className={styles.NextLaunch}>{nextLaunchWrapper}</div>;
};

type nextLaunchProps = {
  elonMuskQuote: string;
};
