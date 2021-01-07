import React from "react";
import { motion } from "framer-motion";
import "moment-precise-range-plugin";

//COMPONENTS
import RecentLaunches from "./RecentLaunches/RecentLaunches";
import UpcomingLaunches from "./UpcomingLaunches/UpcomingLaunches";
import NextLaunch from "./NextLaunch/NextLaunch";

//STYLES
import styles from "./Home.module.scss";
import { pageVariantsAnim } from "../../Animations/Animations_motion";

//OTHER
import RandomQuote from "../../Other/ElonMuskQuotes";

const Home = () => {
  return (
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
      </div>
    </motion.div>
  );
};

export default Home;
