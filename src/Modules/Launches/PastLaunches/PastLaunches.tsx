import React, { useState } from "react";
import { motion } from "framer-motion";

//COMPONENTS
import Button from "../../Shared/Button/Button";
import LaunchShortInfo from "../../Shared/LaunchShortInfo/LaunchShortInfo";
import LaunchShortInfoSkeleton from "../../Shared/Skeletons/LaunchShortInfoSkeleton";
import NotFoundLaunches from "../../Shared/NotFoundLaunches/NotFoundLaunches";

//STYLES
import styles from "./PastLaunches.module.scss";
import { showLaunchesList } from "../../../Animations/Animations_motion";

//TYPES
import { Launch } from "../../../Types";

const PastLaunches = ({ launches, loading }: pastLaunchesProps) => {
  const [numberOfLaunches, setNumberOfLaunches] = useState(5);

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

  if (!loading) {
    pastLaunchesArr = (
      <motion.div
        variants={showLaunchesList}
        initial="initial"
        animate="in"
        exit="out"
        className={styles.LaunchesWrapper}>
        {launches.slice(0, numberOfLaunches).map((launch, index) => (
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
        {launches.length >= numberOfLaunches && (
          <div
            style={{
              marginTop: "2rem",
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}>
            <Button
              disabled={loading}
              name="LOAD MORE"
              styleType="primary"
              clicked={() => setNumberOfLaunches(numberOfLaunches + 5)}
            />
          </div>
        )}
      </motion.div>
    );
  }

  if (launches.length === 0)
    pastLaunchesArr = (
      <motion.div
        variants={showLaunchesList}
        initial="initial"
        animate="in"
        exit="out"
        className={styles.LaunchesWrapper}>
        <NotFoundLaunches />
      </motion.div>
    );

  return <>{pastLaunchesArr}</>;
};

type pastLaunchesProps = {
  launches: Launch[];
  loading: boolean;
};

export default PastLaunches;
