import React, { useState, useCallback, useEffect } from "react";
import "moment-precise-range-plugin";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

//COMPONENTS
import { LaunchDetails } from "../LaunchDetails/LaunchDetails";
import { Countdown } from "../Countdown/Countdown";

//MODELS
import { Time } from "../../../Types";

//STYLES
import styles from "./NextLaunch.module.scss";
import { bottomToTopAnim } from "../../../Animations/Animations_motion";

//REDUX
import { fetchNextLaunch } from "../../../Store/NextLaunch/actions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Store";

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
    dispatch(fetchNextLaunch());
  }, [dispatch]);

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

  const isAfterLaunch = (): boolean => {
    if (
      timer.days === 0 &&
      timer.hours === 0 &&
      timer.minutes === 0 &&
      timer.seconds === 0
    )
      return true;
    else return false;
  };

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
            <div className={styles.LaunchTitle}>
              <h2>
                {isAfterLaunch() ? t("currentLaunch") : t("nextLaunchTitle")}:{" "}
              </h2>
              <h2 className={styles.LaunchName}>
                {nextLaunch.nextLaunch.docs[0].name}
              </h2>
            </div>
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
            <iframe
              title="SpaceX video"
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${nextLaunch.nextLaunch.docs[0]?.links.youtube_id}`}
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
};
