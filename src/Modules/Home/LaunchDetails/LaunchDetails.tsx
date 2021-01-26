import React from "react";
import { motion } from "framer-motion";

//STYLES
import styles from "./LaunchDetails.module.scss";
import { launchDetailsAnim } from "../../../Animations/Animations_motion";

const LaunchDetails = ({
  flightNumber,
  dateLocal,
  details,
  rocketName,
  launchpadFullName,
}: launchDetailsProps) => {
  const formattedDate = new Date(dateLocal);

  return (
    <motion.div
      variants={launchDetailsAnim}
      initial="hidden"
      animate="show"
      className={styles.LaunchDetails}>
      <div className={styles.TitleContainer}>
        {flightNumber && <h3>FLIGHT:</h3>}
        {dateLocal && <h3>LAUNCH DATE:</h3>}
        {rocketName && <h3>ROCKET:</h3>}
        {launchpadFullName && <h3>LAUNCH SITE:</h3>}
        {details && <h3>DETAILS:</h3>}
      </div>
      <div className={styles.ValuesContainer}>
        <h3>{flightNumber}</h3>
        <h3>{formattedDate.toUTCString()}</h3>
        <h3>{rocketName}</h3>
        <h3>{launchpadFullName}</h3>
        <h3>{details}</h3>
      </div>
    </motion.div>
  );
};

type launchDetailsProps = {
  flightNumber: Number;
  dateLocal: string;
  details: string;
  rocketName: string;
  launchpadFullName: string;
};

export default React.memo(LaunchDetails);
