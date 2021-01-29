import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

//COMPONENTS
import { Button, LaunchShortInfo, NotFoundLaunches } from "../../Shared";
import { LaunchShortInfoSkeleton } from "../../Shared/Skeletons/LaunchShortInfoSkeleton";

//STYLES
import styles from "./PastLaunches.module.scss";
import { showLaunchesList } from "../../../Animations/Animations_motion";

//TYPES
import { Launch } from "../../../Types";

export const PastLaunches = ({ launches, loading }: pastLaunchesProps) => {
  const [numberOfLaunches, setNumberOfLaunches] = useState(5);
  const { t } = useTranslation();

  let pastLaunchesArr = (
    <>
      {[1, 2, 3, 4, 5].map((n) => (
        <LaunchShortInfoSkeleton key={n} />
      ))}
    </>
  );

  if (!loading) {
    pastLaunchesArr = (
      <>
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
              name={t("loadMore")}
              styleType="primary"
              clicked={() => setNumberOfLaunches(numberOfLaunches + 5)}
            />
          </div>
        )}
      </>
    );
  }

  if (launches.length === 0) pastLaunchesArr = <NotFoundLaunches />;

  return (
    <>
      <motion.div
        variants={showLaunchesList}
        initial="initial"
        animate="in"
        exit="out"
        className={styles.LaunchesWrapper}>
        {pastLaunchesArr}
      </motion.div>
    </>
  );
};

type pastLaunchesProps = {
  launches: Launch[];
  loading: boolean;
};
