import React from "react";

//COMPONENTS
import LaunchShortInfo from "../../Shared/LaunchShortInfo/LaunchShortInfo";
import LaunchShortInfoSkeleton from "../../Shared/Skeletons/LaunchShortInfoSkeleton";
import NotFoundLaunches from "../../Shared/NotFoundLaunches/NotFoundLaunches";

//STYLES
import styles from "./UpcomingLaunches.module.scss";
import { motion } from "framer-motion";
import { showLaunchesList } from "../../../Animations/Animations_motion";

//TYPES
import { Launch } from "../../../Types";

const UpcomingLaunches = ({ launches, loading }: upcomingLaunchesProps) => {
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

  if (!loading) {
    upcomingLaunchesArr = (
      <motion.div
        variants={showLaunchesList}
        initial="initial"
        animate="in"
        exit="out"
        className={styles.LaunchesWrapper}>
        {launches.map((launch, index) => (
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

  if (launches.length === 0)
    upcomingLaunchesArr = (
      <motion.div
        variants={showLaunchesList}
        initial="initial"
        animate="in"
        exit="out"
        className={styles.LaunchesWrapper}>
        <NotFoundLaunches />
      </motion.div>
    );

  return <>{upcomingLaunchesArr}</>;
};

type upcomingLaunchesProps = {
  launches: Launch[];
  loading: boolean;
};

export default UpcomingLaunches;
