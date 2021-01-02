import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { connect } from "react-redux";
import "moment-precise-range-plugin";

//COMPONENTS
import RecentLaunches from "./RecentLaunches/RecentLaunches";
import UpcomingLaunches from "./UpcomingLaunches/UpcomingLaunches";

//STYLES
import styles from "./Home.module.scss";

//OTHER
import RandomQuote from "../../Other/ElonMuskQuotes";
import { fetchNextLaunch } from "../../Store/NextLaunch/actions";

import { pageVariantsAnim } from "../../Animations/Animations_motion";
import NextLaunch from "./NextLaunch/NextLaunch";
import Spinner from "../Shared/Spinner/Spinner";

const Home = (props) => {
  const {
    onFetchNextLaunch,
    onFetchUpcomingLaunch,
    nextLaunch,
    upcomingLaunches,
  } = props;

  useEffect(() => {
    if (!nextLaunch.docs[0]) onFetchNextLaunch();
    if (upcomingLaunches.docs.length === 0) onFetchUpcomingLaunch();
  }, [onFetchNextLaunch, onFetchUpcomingLaunch, nextLaunch, upcomingLaunches]);

  return (
    <>
      {(props.loadingNextLaunch || props.loadingUpcomingLaunches) && (
        <Spinner />
      )}
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariantsAnim}
        className={styles.Home}>
        {!props.loadingNextLaunch && (
          <NextLaunch elonMuskQuote={RandomQuote()} nextLaunch={nextLaunch} />
        )}
        <div className={styles.Home__Content}>
          <RecentLaunches />
          <UpcomingLaunches />
        </div>
      </motion.div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    nextLaunch: state.nextLaunch.nextLaunch,
    loadingNextLaunch: state.nextLaunch.loading,
    upcomingLaunches: state.upcomingLaunches.upcomingLaunches,
    loadingUpcomingLaunches: state.upcomingLaunches.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchNextLaunch: () => dispatch(fetchNextLaunch()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
