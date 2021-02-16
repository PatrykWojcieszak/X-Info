import React from "react";
import { motion } from "framer-motion";

import styles from "./HeroImage.module.scss";
import { bottomToTopAnim } from "../../../Animations/Animations_motion";
import { RocketQuotes } from "../../../Other/RocketQuotes";
import { RocketType } from "../../../Types";

export const HeroImage = ({ vehicle }: heroImageProps) => {
  const rocketInfo = {
    img: [styles.HeroImage],
    quote: "",
    name: "",
  };

  if (vehicle === RocketType.f1) {
    rocketInfo.img.push(styles.Falcon1);
    rocketInfo.quote = RocketQuotes[0];
    rocketInfo.name = "Falcon 1";
  } else if (vehicle === RocketType.f9) {
    rocketInfo.img.push(styles.Falcon9);
    rocketInfo.quote = RocketQuotes[1];
    rocketInfo.name = "Falcon 9";
  } else if (vehicle === RocketType.fh) {
    rocketInfo.img.push(styles.FalconHeavy);
    rocketInfo.quote = RocketQuotes[2];
    rocketInfo.name = "Falcon Heavy";
  }
  if (vehicle === RocketType.starship) {
    rocketInfo.img.push(styles.Starship);
    rocketInfo.quote = RocketQuotes[3];
    rocketInfo.name = "Starship";
  }

  return (
    <div className={rocketInfo.img.join(" ")}>
      <motion.div
        variants={bottomToTopAnim}
        initial="hidden"
        animate="show"
        exit="exit"
        className={styles.HeroText}>
        <h2>{rocketInfo.name}</h2>
        <h4>
          {rocketInfo.quote} - <span>Elon Musk</span>
        </h4>
      </motion.div>
    </div>
  );
};

type heroImageProps = {
  vehicle: string;
};
