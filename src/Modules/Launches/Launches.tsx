import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

//COMPONENTS
import Button from "../Shared/Button/Button";
import LaunchShortInfo from "../Shared/LaunchShortInfo/LaunchShortInfo";
import LaunchExtendedInfo from "../Shared/LaunchExtendedInfo/LaunchExtendedInfo";
import Spinner from "../Shared/Spinner/Spinner";
import ScrollToTop from "../Shared/ScrollToTop/ScrollToTop";
import BoosterLaunchesInfo from "../Shared/BoosterLaunchesInfo/BoosterLaunchesInfo";

//STYLES
import styles from "./Launches.module.scss";
import {
  pageVariantsAnim,
  showLaunchesList,
} from "../../Animations/Animations_motion";

//OTHER
import LaunchShortInfoSkeleton from "../Shared/Skeletons/LaunchShortInfoSkeleton";
import LaunchExtendedInfoSkeleton from "../Shared/Skeletons/LaunchExtendedInfoSkeleton";

//REDUX
import { fetchLatestLaunch } from "../../Store/LatestLaunch/actions";
import { fetchPastLaunches } from "../../Store/PastLaunches/actions";
import { fetchBoosters } from "../../Store/Boosters/actions";
import { connect } from "react-redux";
import UpcomingLaunches from "./UpcomingLaunches/UpcomingLaunches";

const Launches = (props) => {
  const [showPastLaunches, setShowPastLaunches] = useState(false);
  const [showUpcomingLaunches, setShowUpcomingLaunches] = useState(true);
  const [showBoosters, setShowBoosters] = useState(false);
  const { launchType } = useParams();

  const { onFetchLatestLaunch, onFetchPastLaunches, onFetchBoosters } = props;

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
    onFetchPastLaunches(1);
    onFetchLatestLaunch();
    onFetchBoosters(1);

    if (launchType === "past") {
      showPastLaunchesHandler();
    }
  }, [onFetchLatestLaunch, onFetchPastLaunches, onFetchBoosters, launchType]);

  const FetchPastLaunches = () => {
    onFetchPastLaunches(props.pastLaunches.nextPage);
  };

  const FetchBoosters = () => {
    onFetchBoosters(props.boosters.nextPage);
  };

  let boostersArr = (
    <motion.div
      variants={showLaunchesList}
      initial="initial"
      animate="in"
      exit="out"
      className={styles.LaunchesWrapper}>
      {[1, 2, 3, 4, 5].map((n) => (
        <LaunchShortInfoSkeleton key={n} />
      ))}
    </motion.div>
  );

  if (props.boosters.docs.length > 0) {
    boostersArr = (
      <motion.div
        variants={showLaunchesList}
        initial="initial"
        animate="in"
        exit="out"
        className={styles.LaunchesWrapper}>
        {props.boosters.docs.map((booster, index) => (
          <BoosterLaunchesInfo
            key={index}
            block={booster.block}
            serial={booster.serial}
            status={booster.status}
            reuse_count={booster.reuse_count}
            launches={booster.launches}
          />
        ))}
        {props.boosters.nextPage ? (
          <div
            style={{
              marginTop: "2rem",
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}>
            {showBoosters && props.loadingBoosters ? <Spinner /> : null}
            <Button
              disabled={props.loadingBoosters}
              name="LOAD MORE"
              clicked={FetchBoosters}
            />
          </div>
        ) : null}
      </motion.div>
    );
  }

  let pastLaunchesArr = (
    <motion.div
      variants={showLaunchesList}
      initial="initial"
      animate="in"
      exit="out"
      className={styles.LaunchesWrapper}>
      {[1, 2, 3, 4, 5].map((n) => (
        <LaunchShortInfoSkeleton key={n} />
      ))}
    </motion.div>
  );

  if (props.pastLaunches.docs.length > 0) {
    pastLaunchesArr = (
      <motion.div
        variants={showLaunchesList}
        initial="initial"
        animate="in"
        exit="out"
        className={styles.LaunchesWrapper}>
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
        {props.pastLaunches.nextPage ? (
          <div
            style={{
              marginTop: "2rem",
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}>
            {showPastLaunches && props.loadingPastLaunches ? <Spinner /> : null}
            <Button
              disabled={props.loadingPastLaunches}
              name="LOAD MORE"
              clicked={FetchPastLaunches}
            />
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

        <AnimatePresence>{showPastLaunches && pastLaunchesArr}</AnimatePresence>
        <AnimatePresence>{showBoosters && boostersArr}</AnimatePresence>
      </div>

      <ScrollToTop />
    </motion.div>
  );
};

const mapStateToProps = (state) => {
  return {
    latestLaunch: state.latestLaunch.latestLaunch,
    loadingLatestLaunch: state.latestLaunch.loading,
    pastLaunches: state.pastLaunches.pastLaunches,
    loadingPastLaunches: state.pastLaunches.loading,
    boosters: state.boosters.boosters,
    loadingBoosters: state.boosters.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchLatestLaunch: () => dispatch(fetchLatestLaunch()),
    onFetchPastLaunches: (page: number) => dispatch(fetchPastLaunches(page)),
    onFetchBoosters: (page: number) => dispatch(fetchBoosters(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Launches);
