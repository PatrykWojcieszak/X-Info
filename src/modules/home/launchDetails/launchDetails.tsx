import React from "react";
import { motion } from "framer-motion";

import styles from "./launchDetails.module.scss";

const launchDetails = () => {
  const launchDetailsAnim = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  return (
    <motion.div
      variants={launchDetailsAnim}
      initial="hidden"
      animate="show"
      className={styles.LaunchDetails}>
      <div className={styles.TitleContainer}>
        <h3>FLIGHT:</h3>
        <h3>LAUNCH DATE:</h3>
        <h3>ROCKET:</h3>
        <h3>LAUNCH SITE:</h3>
        <h3>DETAILS:</h3>
      </div>
      <div className={styles.ValuesContainer}>
        <h3>#108</h3>
        <h3>Sat Nov 21 2020 18:17:00 GMT+0100</h3>
        <h3>Falcon 9</h3>
        <h3>Vandenberg Air Force Base Space Launch Complex 4E</h3>
        <h3>
          SpaceX's 20th and final Crew Resupply Mission under the original NASA
          CRS contract, this mission brings essential supplies to the
          International Space Station using SpaceX's reusable Dragon spacecraft.
          It is the last scheduled flight of a Dragon 1 capsule. (CRS-21 and up
          under the new Commercial Resupply Services 2 contract will use Dragon
          2.) The external payload for this mission is the Bartolomeo ISS
          external payload hosting platform. Falcon 9 and Dragon will launch
          from SLC-40, Cape Canaveral Air Force Station and the booster will
          land at LZ-1. The mission will be complete with return and recovery of
          the Dragon capsule and down cargo.
        </h3>
      </div>
    </motion.div>
  );
};

export default launchDetails;
