import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";
import { connect } from "react-redux";

//COMPONENTS
import Countdown from "./Countdown/Countdown";
import RecentLaunches from "./RecentLaunches/RecentLaunches";
import UpcomingLaunches from "./UpcomingLaunches/UpcomingLaunches";
import LaunchDetails from "./LaunchDetails/LaunchDetails";

//STYLES
import styles from "./Home.module.scss";

//OTHER
import RandomQuote from "../../Other/ElonMuskQuotes";
import { fetchNextLaunch } from "../../Store/NextLaunch/actions";
import { fetchRecentLaunches } from "../../Store/RecentLaunches/actions";
import { fetchUpcomingLaunches } from "../../Store/UpcomingLaunches/actions";
import {
  pageVariantsAnim,
  bottomToTopAnim,
} from "../../Animations/Animations_motion";

const Home = (props) => {
  const [showLaunchDetails, setShowLaunchDetails] = useState(false);

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
          <div className={styles.Top}>
            <motion.div
              variants={bottomToTopAnim}
              initial="hidden"
              animate="show"
              className={styles.Top__Content}>
              <div className={styles.LaunchTitle}>
                <h2>NEXT LAUNCH: </h2>
                <h2 className={styles.LaunchName}>
                  {props.nextLaunch.docs[0].name}
                </h2>
              </div>
              <Countdown dateLocal={props.nextLaunch.docs[0].date_local} />
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
                    flightNumber={props.nextLaunch.docs[0].flight_number}
                    dateLocal={props.nextLaunch.docs[0].date_local}
                    details={props.nextLaunch.docs[0].details}
                    rocketName={props.nextLaunch.docs[0].rocket.name}
                    launchpadFullName={
                      props.nextLaunch.docs[0].launchpad.full_name
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
