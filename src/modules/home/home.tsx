import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";
import Axios from "axios";

import Countdown from "./Countdown/Countdown";
import RecentLaunches from "./RecentLaunches/RecentLaunches";
import UpcomingLaunches from "./UpcomingLaunches/UpcomingLaunches";
import LaunchDetails from "./LaunchDetails/LaunchDetails";

import styles from "./Home.module.scss";

import Launch_model from "../../Models/Launch/Launch_model";

const Home = () => {
  const [nextLaunch, setNextLaunch] = useState<Launch_model | undefined>(
    undefined
  );
  const [showLaunchDetails, setShowLaunchDetails] = useState(false);

  const topContentAnim = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.25 },
    },
  };

  useEffect(() => {
    Axios.get<Launch_model>("https://api.spacexdata.com/v4/launches/next")
      .then((res) => {
        // console.log(res.data);
        setNextLaunch(res.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <>
      {nextLaunch !== undefined ? (
        <div className={styles.Home}>
          <div className={styles.Top}>
            <motion.div
              variants={topContentAnim}
              initial="hidden"
              animate="show"
              className={styles.Top__Content}>
              <div className={styles.LaunchTitle}>
                <h2>NEXT LAUNCH: </h2>
                <h2 className={styles.LaunchName}>{nextLaunch.name}</h2>
              </div>
              <Countdown dateLocal={nextLaunch.date_local} />
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
                    flightNumber={nextLaunch.flight_number}
                    dateLocal={nextLaunch.date_local}
                    details={nextLaunch.details}
                  />
                ) : null}
              </AnimatePresence>
            </motion.div>
          </div>
          <div className={styles.Home__Content}>
            <RecentLaunches />
            <UpcomingLaunches />
          </div>
        </div>
      ) : (
        <p>Fetching data...</p>
      )}
    </>
  );
};

export default Home;
