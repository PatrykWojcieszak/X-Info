import React from "react";

//COMPONENTS
import { LaunchShortInfoSkeleton } from "../../Shared/Skeletons/LaunchShortInfoSkeleton";
import { NotFoundLaunches, LaunchShortInfo } from "../../Shared";

//STYLES
import styles from "./UpcomingLaunches.module.scss";
import { motion } from "framer-motion";
import { showLaunchesList } from "../../../Animations/Animations_motion";

//TYPES
import { Launch } from "../../../Types";

export const UpcomingLaunches = ({
  launches,
  loading,
}: upcomingLaunchesProps) => {
  let upcomingLaunchesArr = (
    <>
      {[1, 2, 3, 4, 5].map((n) => (
        <LaunchShortInfoSkeleton key={n} />
      ))}
    </>
  );

  if (!loading) {
    upcomingLaunchesArr = (
      <>
        {launches.map((launch, index) => (
          <LaunchShortInfo
            key={index}
            id={launch.id}
            launchName={launch?.name}
            launchDateUtc={launch?.date_utc}
            rocketName={launch?.rocket.name}
            launchSiteName={launch?.launchpad.full_name}
            customers={launch.payloads[0]?.customers}
            flightNumber={launch?.flight_number}
            nationality={launch.payloads[0]?.nationalities[0]}
            datePrecision={launch.date_precision}
          />
        ))}
      </>
    );
  }

  if (launches.length === 0) upcomingLaunchesArr = <NotFoundLaunches />;

  return (
    <>
      <motion.div
        variants={showLaunchesList}
        initial="initial"
        animate="in"
        exit="out"
        className={styles.LaunchesWrapper}>
        {upcomingLaunchesArr}
      </motion.div>
    </>
  );
};

type upcomingLaunchesProps = {
  launches: Launch[];
  loading: boolean;
};
