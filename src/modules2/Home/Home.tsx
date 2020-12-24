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
import { fetchRecentLaunches } from "../../Store/RecentLaunches/actions";
import { fetchUpcomingLaunches } from "../../Store/UpcomingLaunches/actions";
import { pageVariantsAnim } from "../../Animations/Animations_motion";
import NextLaunch from "./NextLaunch/NextLaunch";

const Home = (props) => {
  const {
    onFetchNextLaunch,
    onFetchUpcomingLaunch,
    onFetchRecentLaunch,
    nextLaunch,
    upcomingLaunches,
    recentLaunches,
  } = props;

  useEffect(() => {
    if (nextLaunch.docs[0] === undefined) onFetchNextLaunch();
    if (upcomingLaunches.docs.length === 0) onFetchUpcomingLaunch();
    if (recentLaunches.docs.length === 0) onFetchRecentLaunch();
  }, [
    onFetchNextLaunch,
    onFetchUpcomingLaunch,
    onFetchRecentLaunch,
    nextLaunch,
    upcomingLaunches,
    recentLaunches,
  ]);

  return (
    <>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariantsAnim}
        className={styles.Home}>
        {props.loadingNextLaunch === false ? (
          <NextLaunch elonMuskQuote={RandomQuote()} nextLaunch={nextLaunch} />
        ) : null}
        <div className={styles.Home__Content}>
          {props.loadingRecentLaunches === false ? (
            <RecentLaunches launches={props.recentLaunches.docs} />
          ) : null}
          {props.loadingUpcomingLaunches === false ? (
            <UpcomingLaunches launches={props.upcomingLaunches.docs} />
          ) : null}
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
    recentLaunches: state.recentLaunches.recentLaunches,
    loadingRecentLaunches: state.recentLaunches.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchNextLaunch: () => dispatch(fetchNextLaunch()),
    onFetchUpcomingLaunch: () => dispatch(fetchUpcomingLaunches()),
    onFetchRecentLaunch: () => dispatch(fetchRecentLaunches()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
