import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

//COMPONENTS
import Button from "../Shared/Button/Button";
import LaunchExtendedInfo from "../Shared/LaunchExtendedInfo/LaunchExtendedInfo";
import ScrollToTop from "../Shared/ScrollToTop/ScrollToTop";
import UpcomingLaunches from "./UpcomingLaunches/UpcomingLaunches";
import PastLaunches from "./PastLaunches/PastLaunches";

//STYLES
import styles from "./Launches.module.scss";
import { pageVariantsAnim } from "../../Animations/Animations_motion";

//OTHER
import LaunchExtendedInfoSkeleton from "../Shared/Skeletons/LaunchExtendedInfoSkeleton";

//REDUX
import { fetchLatestLaunch } from "../../Store/LatestLaunch/actions";
import { connect } from "react-redux";
import Boosters from "./Boosters/Boosters";

const Launches = (props) => {
  const [showPastLaunches, setShowPastLaunches] = useState(false);
  const [showUpcomingLaunches, setShowUpcomingLaunches] = useState(true);
  const [showBoosters, setShowBoosters] = useState(false);
  const { launchType } = useParams();

  const { onFetchLatestLaunch } = props;

  const showPastLaunchesHandler = () => {
    setShowPastLaunches(true);
    setShowUpcomingLaunches(false);
    setShowBoosters(false);
  };

  const showUpcomingLaunchesHandler = () => {
    setShowPastLaunches(false);
    setShowUpcomingLaunches(true);
    setShowBoosters(false);
  };

  const showBoostersHandler = () => {
    setShowPastLaunches(false);
    setShowUpcomingLaunches(false);
    setShowBoosters(true);
  };

  useEffect(() => {
    onFetchLatestLaunch();

    if (launchType === "past") {
      showPastLaunchesHandler();
    }
  }, [onFetchLatestLaunch, launchType]);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariantsAnim}
      className={styles.Launches}>
      <div className={styles.Latest}>
        <h2>LATEST LAUNCH</h2>
        {props.loadingLatestLaunch ? (
          <LaunchExtendedInfoSkeleton />
        ) : (
          <LaunchExtendedInfo
            showMoreDetailsButton
            details={props.latestLaunch.docs[0].details}
            launchName={props.latestLaunch.docs[0].name}
            date_local={props.latestLaunch.docs[0].date_local}
            date_utc={props.latestLaunch.docs[0].date_utc}
            rocketName={props.latestLaunch.docs[0].rocket.name}
            launchSiteName={props.latestLaunch.docs[0].launchpad.full_name}
            flightNumber={props.latestLaunch.docs[0].flight_number}
            patchImg={props.latestLaunch.docs[0].links.patch.small}
            success={props.latestLaunch.docs[0].success}
            failures={props.latestLaunch.docs[0].failures}
            launchId={props.latestLaunch.docs[0].id}
            date_precision={props.latestLaunch.docs[0].date_precision}
          />
        )}
      </div>
      <div className={styles.Content}>
        {!props.loadingUpcomingLaunches || !props.loadingPastLaunches ? (
          <div className={styles.ButtonsWrapper}>
            <Button
              selected={showUpcomingLaunches}
              clicked={showUpcomingLaunchesHandler}
              name="UPCOMING LAUNCHES"
            />
            <Button
              selected={showPastLaunches}
              clicked={showPastLaunchesHandler}
              name="PAST LAUNCHES"
            />
            <Button
              selected={showBoosters}
              clicked={showBoostersHandler}
              name="BOOSTERS"
            />
          </div>
        ) : null}

        <AnimatePresence>
          {showUpcomingLaunches && <UpcomingLaunches />}
        </AnimatePresence>

        <AnimatePresence>
          {showPastLaunches && <PastLaunches />}
        </AnimatePresence>

        <AnimatePresence>{showBoosters && <Boosters />}</AnimatePresence>
      </div>

      <ScrollToTop />
    </motion.div>
  );
};

const mapStateToProps = (state) => {
  return {
    latestLaunch: state.latestLaunch.latestLaunch,
    loadingLatestLaunch: state.latestLaunch.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchLatestLaunch: () => dispatch(fetchLatestLaunch()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Launches);
