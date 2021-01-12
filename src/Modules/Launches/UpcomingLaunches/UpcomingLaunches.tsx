import React, { useEffect } from "react";

//COMPONENTS
import LaunchShortInfo from "../../Shared/LaunchShortInfo/LaunchShortInfo";
import LaunchShortInfoSkeleton from "../../Shared/Skeletons/LaunchShortInfoSkeleton";

//STYLES
import styles from "./UpcomingLaunches.module.scss";
import { motion } from "framer-motion";
import { showLaunchesList } from "../../../Animations/Animations_motion";

//REDUX
import { fetchUpcomingLaunches } from "../../../Store/UpcomingLaunches/actions";
import { connect } from "react-redux";

const UpcomingLaunches = (props) => {
  const { onFetchUpcomingLaunches } = props;

  useEffect(() => {
    onFetchUpcomingLaunches();
  }, [onFetchUpcomingLaunches]);

  let upcomingLaunchesArr = (
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

  if (!props.loadingUpcomingLaunches) {
    upcomingLaunchesArr = (
      <motion.div
        variants={showLaunchesList}
        initial="initial"
        animate="in"
        exit="out"
        className={styles.LaunchesWrapper}>
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

  return <>{upcomingLaunchesArr}</>;
};

const mapStateToProps = (state) => {
  return {
    upcomingLaunches: state.upcomingLaunches.upcomingLaunches,
    loadingUpcomingLaunches: state.upcomingLaunches.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchUpcomingLaunches: () => dispatch(fetchUpcomingLaunches()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingLaunches);
