import React, { useState } from "react";
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
import { pageVariants } from "../../Animations/Animations_motion";
import IResponseData from "../../Models/IResponseData";

const endpointURL = "https://api.spacexdata.com/v4/launches/query";

const Home = () => {
  const [showLaunchDetails, setShowLaunchDetails] = useState(false);

  const nextLaunch: IResponseData<ILaunch> = useFetch<ILaunch>(
    endpointURL,
    NextLaunchQuery
  );

  const recentLaunches: IResponseData<ILaunch> = useFetch<ILaunch>(
    endpointURL,
    RecentLaunchesQuery
  );

  const upcomingLaunches: IResponseData<ILaunch> = useFetch<ILaunch>(
    endpointURL,
    UpcomingLaunchesQuery
  );

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

  return (
    <>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        className={styles.Home}>
        {nextLaunch.data.docs.length > 0 ? (
          <div className={styles.Top}>
            <motion.div
              variants={topContentAnim}
              initial="hidden"
              animate="show"
              className={styles.Top__Content}>
              <div className={styles.LaunchTitle}>
                <h2>NEXT LAUNCH: </h2>
                <h2 className={styles.LaunchName}>
                  {nextLaunch.data.docs[0].name}
                </h2>
              </div>
              <Countdown dateLocal={nextLaunch.data.docs[0].date_local} />
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
                    flightNumber={nextLaunch.data.docs[0].flight_number}
                    dateLocal={nextLaunch.data.docs[0].date_local}
                    details={nextLaunch.data.docs[0].details}
                    rocketName={nextLaunch.data.docs[0].rocket.name}
                    launchpadFullName={
                      nextLaunch.data.docs[0].launchpad.full_name
                    }
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
          {recentLaunches.data.docs.length > 0 ? (
            <RecentLaunches launches={recentLaunches.data.docs} />
          ) : null}
          {upcomingLaunches.data.docs.length > 0 ? (
            <UpcomingLaunches launches={upcomingLaunches.data.docs} />
          ) : null}
        </div>
      </motion.div>
    </>
  );
};

export default Home;
