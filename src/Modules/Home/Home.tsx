import React from "react";
import { motion } from "framer-motion";
import "moment-precise-range-plugin";

//COMPONENTS
import { RecentLaunches } from "./RecentLaunches/RecentLaunches";
import { UpcomingLaunches } from "./UpcomingLaunches/UpcomingLaunches";
import { NextLaunch } from "./NextLaunch/NextLaunch";
import { SEO } from "../Shared";
import { LaunchHistoryChart } from "./LaunchHistoryChart/LaunchHistoryChart";

//STYLES
import styles from "./Home.module.scss";
import { pageVariantsAnim } from "../../Animations/Animations_motion";

//OTHER
import RandomQuote from "../../Other/ElonMuskQuotes";
import { homePageTitle, homePageDescription } from "../Shared/SEO/Tags";

const Home = () => {
  return (
    <>
      <SEO title={homePageTitle} description={homePageDescription} />
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariantsAnim}
        className={styles.Home}>
        <NextLaunch elonMuskQuote={RandomQuote()} />
        <div className={styles.Home__Content}>
          <RecentLaunches />
          <UpcomingLaunches />
          <LaunchHistoryChart />
        </div>
      </motion.div>
    </>
  );
};

export default Home;
