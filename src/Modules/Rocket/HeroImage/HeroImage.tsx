import React from "react";
import { motion } from "framer-motion";

import styles from "./HeroImage.module.scss";
import { bottomToTopAnim } from "../../../Animations/Animations_motion";
import { RocketQuotes } from "../../../Other/RocketQuotes";

export const HeroImage = ({ vehicle }: heroImageProps) => {
  const rocketHeroImg = [styles.HeroImage];
  let rocketQuote = "";

  if (vehicle === "Falcon 1") {
    rocketHeroImg.push(styles.Falcon1);
    rocketQuote = RocketQuotes[0];
  } else if (vehicle === "Falcon 9") {
    rocketHeroImg.push(styles.Falcon9);
    rocketQuote = RocketQuotes[1];
  } else if (vehicle === "Falcon Heavy") {
    rocketHeroImg.push(styles.FalconHeavy);
    rocketQuote = RocketQuotes[2];
  }
  if (vehicle === "Starship") {
    rocketHeroImg.push(styles.Starship);
    rocketQuote = RocketQuotes[3];
  }

  return (
    <div className={rocketHeroImg.join(" ")}>
      <motion.div
        variants={bottomToTopAnim}
        initial="hidden"
        animate="show"
        exit="exit"
        className={styles.HeroText}>
        <h2>{vehicle}</h2>
        <h4>
          {rocketQuote} - <span>Elon Musk</span>
        </h4>
      </motion.div>
    </div>
  );
};

type heroImageProps = {
  vehicle: string;
};
