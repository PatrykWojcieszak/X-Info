import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";

import Nav from "../shared/nav/nav";
import Countdown from "./countdown/countdown";
import RecentLaunches from "./recentLaunches/recentLaunches";
import UpcomingLaunches from "../shared/upcomingLaunches/upcomingLaunches";
import Footer from "../shared/footer/footer";
import LaunchDetails from "./launchDetails/launchDetails";

import styles from "./home.module.scss";

const Home = () => {
  const [showLaunchDetails, setShowLaunchDetails] = useState(false);

  const topContentAnim = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5 },
    },
  };

  return (
    <div className={styles.Home}>
      <div className={styles.Top}>
        <Nav></Nav>
        <motion.div
          variants={topContentAnim}
          initial="hidden"
          animate="show"
          className={styles.Top__Content}>
          <div className={styles.LaunchTitle}>
            <h2>NEXT LAUNCH: </h2>
            <h2 className={styles.LaunchName}>SENTINEL-6 Michael Freilich</h2>
          </div>
          <Countdown />
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
            {showLaunchDetails ? <LaunchDetails /> : null}
          </AnimatePresence>
        </motion.div>
      </div>
      <div className={styles.Home__Content}>
        <RecentLaunches />
        <UpcomingLaunches />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
