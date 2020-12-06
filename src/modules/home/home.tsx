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
import QueryResult_model from "../../Models/QueryResult/QueryResult_model";

const Home = () => {
  const [showLaunchDetails, setShowLaunchDetails] = useState(false);

  const [nextLaunch, setNextLaunch] = useState<
    QueryResult_model<Launch_model> | undefined
  >(undefined);
  const [recentLaunches, setRecentLaunches] = useState<
    QueryResult_model<Launch_model> | undefined
  >(undefined);
  const [upcomingLaunches, setUpcomingLaunches] = useState<
    QueryResult_model<Launch_model> | undefined
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

  const nextLaunchQuery = {
    query: {
      upcoming: true,
    },
    options: {
      limit: 5,
      select: {
        name: 1,
        date_local: 1,
        flight_number: 1,
        details: 1,
      },
      sort: {
        flight_number: "asc",
      },
      populate: [
        {
          path: "launchpad",
          select: {
            name: 1,
            full_name: 1,
          },
        },
        {
          path: "rocket",
          select: {
            name: 1,
          },
        },
      ],
    },
  };

  const recentLaunchesQuery = {
    query: {
      date_utc: {
        $gte: "2020-06-06T00:00:00.000Z",
        $lte: "2020-12-06T00:00:00.000Z",
      },
    },
    options: {
      limit: 5,
      select: {
        name: 1,
        date_local: 1,
        date_utc: 1,
        success: 1,
        links: 1,
      },
      sort: {
        flight_number: "desc",
      },
    },
  };

  const upcomingLaunchesQuery = {
    query: {
      upcoming: true,
    },
    options: {
      select: {
        name: 1,
        date_local: 1,
        date_utc: 1,
        flight_number: 1,
      },
      sort: {
        flight_number: "asc",
      },
      populate: [
        {
          path: "launchpad",
          select: {
            name: 1,
            full_name: 1,
          },
        },
        {
          path: "rocket",
          select: {
            name: 1,
          },
        },
        {
          path: "payloads",
          select: {
            customers: 1,
          },
        },
      ],
    },
  };

  useEffect(() => {
    Axios.post<QueryResult_model<Launch_model>>(
      "https://api.spacexdata.com/v4/launches/query",
      nextLaunchQuery
    )
      .then((res) => {
        setNextLaunch(res.data);
      })
      .catch((err) => {});

    Axios.post<QueryResult_model<Launch_model>>(
      "https://api.spacexdata.com/v4/launches/query",
      recentLaunchesQuery
    )
      .then((res) => {
        setRecentLaunches(res.data);
      })
      .catch((err) => {});

    Axios.post<QueryResult_model<Launch_model>>(
      "https://api.spacexdata.com/v4/launches/query",
      upcomingLaunchesQuery
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
