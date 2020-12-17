import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

//COMPONENTS
import Button from "../shared/Button/Button";
import LaunchShortInfo from "../shared/LaunchShortInfo/LaunchShortInfo";
import LatestLaunch from "../shared/LaunchExtendedInfo/LaunchExtendedInfo";

//STYLES
import styles from "./Launches.module.scss";

//OTHER
import {
  pageVariantsAnim,
  showLaunchesList,
} from "../../Animations/Animations_motion";
import { fetchLatestLaunch } from "../../Store/LatestLaunch/actions";
import { fetchPastLaunches } from "../../Store/PastLaunches/actions";
import { fetchUpcomingLaunches } from "../../Store/UpcomingLaunches/actions";
import { connect } from "react-redux";

const Launches = (props) => {
  const [showPastLaunches, setShowPastLaunches] = useState(false);
  const [showUpcomingLaunches, setShowUpcomingLaunches] = useState(true);
  const { launchType } = useParams();

  const {
    onFetchLatestLaunch,
    onFetchPastLaunches,
    onFetchUpcomingLaunches,
  } = props;

  const showPastLaunchesHandler = () => {
    setShowPastLaunches(true);
    setShowUpcomingLaunches(false);
  };

  const showUpcomingLaunchesHandler = () => {
    setShowPastLaunches(false);
    setShowUpcomingLaunches(true);
  };

  useEffect(() => {
    onFetchLatestLaunch();
    onFetchPastLaunches(1);
    onFetchUpcomingLaunches();

    if (launchType === "past") {
      showPastLaunchesHandler();
    }
  }, [
    onFetchLatestLaunch,
    onFetchPastLaunches,
    onFetchUpcomingLaunches,
    launchType,
  ]);

  const FetchPastLaunches = () => {
    onFetchPastLaunches(props.pastLaunches.nextPage);
  };

  let upcomingLaunchesArr = <></>;
  if (props.loadingUpcomingLaunches === false) {
    upcomingLaunchesArr = (
      <motion.div
        variants={showLaunchesList}
        initial="initial"
        animate="in"
        exit="out"
        style={{ width: "100%" }}>
        {props.upcomingLaunches.docs.map((launch, index) => (
          <LaunchShortInfo
            key={index}
            launchName={launch?.name}
            launchDateUtc={launch?.date_utc}
            rocketName={launch?.rocket.name}
            launchSiteName={launch?.launchpad.full_name}
            customer={launch.payloads[0].customers[0]}
            flightNumber={launch?.flight_number}
            nationality={launch.payloads[0].nationalities[0]}
          />
        ))}
      </motion.div>
    );
  }

  let pastLaunchesArr = <></>;
  if (props.loadingPastLaunches === false) {
    pastLaunchesArr = (
      <motion.div
        variants={showLaunchesList}
        initial="initial"
        animate="in"
        exit="out"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        {props.pastLaunches.docs.map((launch, index) => (
          <LaunchShortInfo
            key={index}
            launchName={launch.name}
            launchDateUtc={launch.date_utc}
            rocketName={launch.rocket.name}
            launchSiteName={launch.launchpad.full_name}
            customer={launch.payloads[0].customers[0]}
            flightNumber={launch.flight_number}
            success={launch.success}
            nationality={launch.payloads[0].nationalities[0]}
          />
        ))}
        {props.pastLaunches.nextPage !== null ? (
          <div style={{ marginTop: "2rem" }}>
            <Button name="LOAD MORE" clicked={FetchPastLaunches} />
          </div>
        ) : null}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariantsAnim}
      className={styles.Launches}>
      <div className={styles.Latest}>
        {props.latestLaunch.docs[0] !== undefined ? (
          <>
            <h2>LATEST LAUNCH</h2>
            <LatestLaunch
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
            />
          </>
        ) : null}
      </div>
      <div className={styles.Content}>
        {props.loadingUpcomingLaunches === false ||
        props.loadingPastLaunches === false ? (
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
          </div>
        ) : null}

        <AnimatePresence>
          {showUpcomingLaunches ? upcomingLaunchesArr : null}
        </AnimatePresence>

        <AnimatePresence>
          {showPastLaunches ? pastLaunchesArr : null}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const mapStateToProps = (state) => {
  return {
    latestLaunch: state.latestLaunch.latestLaunch,
    loadingLatestLaunch: state.latestLaunch.loading,
    pastLaunches: state.pastLaunches.pastLaunches,
    loadingPastLaunches: state.pastLaunches.loading,
    upcomingLaunches: state.upcomingLaunches.upcomingLaunches,
    loadingUpcomingLaunches: state.upcomingLaunches.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchLatestLaunch: () => dispatch(fetchLatestLaunch()),
    onFetchPastLaunches: (page: number) => dispatch(fetchPastLaunches(page)),
    onFetchUpcomingLaunches: () => dispatch(fetchUpcomingLaunches()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Launches);
