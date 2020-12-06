import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";
import Axios from "axios";

//COMPONENTS
import Countdown from "./Countdown/Countdown";
import RecentLaunches from "./RecentLaunches/RecentLaunches";
import UpcomingLaunches from "./UpcomingLaunches/UpcomingLaunches";
import LaunchDetails from "./LaunchDetails/LaunchDetails";

//STYLES
import styles from "./Home.module.scss";

//MODELS
import ILaunch from "../../Models/ILaunch";
import IQueryResult from "../../Models/IQueryResult";

//QUERIES
import NextLaunchQuery from "../../Queries/NextLaunchQuery";
import RecentLaunchesQuery from "../../Queries/RecentLaunchesQuery";
import UpcomingLaunchesQuery from "../../Queries/UpcomingLaunchesQuery";

//OTHER
import RandomQuote from "../../Other/ElonMuskQuotes";

const Home = () => {
  const [showLaunchDetails, setShowLaunchDetails] = useState(false);

  const [nextLaunch, setNextLaunch] = useState<
    IQueryResult<ILaunch> | undefined
  >(undefined);
  const [recentLaunches, setRecentLaunches] = useState<
    IQueryResult<ILaunch> | undefined
  >(undefined);
  const [upcomingLaunches, setUpcomingLaunches] = useState<
    IQueryResult<ILaunch> | undefined
  >(undefined);

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
    Axios.post<IQueryResult<ILaunch>>(
      "https://api.spacexdata.com/v4/launches/query",
      NextLaunchQuery
    )
      .then((res) => {
        setNextLaunch(res.data);
      })
      .catch((err) => {});

    Axios.post<IQueryResult<ILaunch>>(
      "https://api.spacexdata.com/v4/launches/query",
      RecentLaunchesQuery
    )
      .then((res) => {
        setRecentLaunches(res.data);
      })
      .catch((err) => {});

    Axios.post<IQueryResult<ILaunch>>(
      "https://api.spacexdata.com/v4/launches/query",
      UpcomingLaunchesQuery
    )
      .then((res) => {
        console.log(res.data);
        setUpcomingLaunches(res.data);
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
          <div className={styles.Home__Content}>
            {recentLaunches !== undefined ? (
              <RecentLaunches launches={recentLaunches.docs} />
            ) : null}
            {upcomingLaunches !== undefined ? (
              <UpcomingLaunches launches={upcomingLaunches.docs} />
            ) : null}
          </div>
        </div>
      ) : (
        <p>Fetching data...</p>
      )}
    </>
  );
};

export default Home;
