import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";
import { useFetch } from "../../Hooks/useFetch";

//COMPONENTS
import Countdown from "./Countdown/Countdown";
import RecentLaunches from "./RecentLaunches/RecentLaunches";
import UpcomingLaunches from "./UpcomingLaunches/UpcomingLaunches";
import LaunchDetails from "./LaunchDetails/LaunchDetails";

//STYLES
import styles from "./Home.module.scss";

//MODELS
import ILaunch from "../../Models/ILaunch";

//QUERIES
import NextLaunchQuery from "../../Queries/NextLaunchQuery";
import RecentLaunchesQuery from "../../Queries/RecentLaunchesQuery";
import UpcomingLaunchesQuery from "../../Queries/UpcomingLaunchesQuery";

//OTHER
import RandomQuote from "../../Other/ElonMuskQuotes";
import {
  pageVariantsAnim,
  bottomToTopAnim,
} from "../../Animations/Animations_motion";

const endpointURL = "https://api.spacexdata.com/v4/launches/query";

const Home = () => {
  const [showLaunchDetails, setShowLaunchDetails] = useState(false);

  const [nextLaunch, loadingNextLaunch, invokeNextLaunch] = useFetch<ILaunch>(
    endpointURL,
    NextLaunchQuery
  );

  const [
    recentLaunches,
    loadingUpcomingLaunch,
    invokeUpcomingLaunch,
  ] = useFetch<ILaunch>(endpointURL, RecentLaunchesQuery);

  const [
    upcomingLaunches,
    loadingPastLaunch,
    invokePastLaunch,
  ] = useFetch<ILaunch>(endpointURL, UpcomingLaunchesQuery);

  useEffect(() => {
    invokeNextLaunch();
    invokeUpcomingLaunch();
    invokePastLaunch();
  }, [invokeNextLaunch, invokeUpcomingLaunch, invokePastLaunch]);

  return (
    <>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariantsAnim}
        className={styles.Home}>
        {loadingNextLaunch === false ? (
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
              <Countdown dateLocal={nextLaunch.docs[0].date_local} />
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
                  {RandomQuote()} - <span>Elon Musk</span>
                </h2>
              </div>
            </motion.div>
          </div>
        ) : null}
        <div className={styles.Home__Content}>
          {loadingUpcomingLaunch === false ? (
            <RecentLaunches launches={recentLaunches.docs} />
          ) : null}
          {loadingPastLaunch === false ? (
            <UpcomingLaunches launches={upcomingLaunches.docs} />
          ) : null}
        </div>
      </motion.div>
    </>
  );
};

export default Home;
