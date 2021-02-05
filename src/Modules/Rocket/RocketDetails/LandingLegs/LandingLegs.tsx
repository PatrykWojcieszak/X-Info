import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

//COMPONENTS
import { InfoLine } from "../../../Shared";

//STYLES
import styles from "./LandingLegs.module.scss";
import { rightToLeftAnim } from "../../../../Animations/Animations_motion";

//TYPES
import { LandingLegs as LandingLegsType } from "../../../../Types";

export const LandingLegs = ({ landingLegs }: landingLegsProps) => {
  const { t } = useTranslation();

  return (
    <motion.div
      variants={rightToLeftAnim}
      initial="hidden"
      animate="show"
      exit="exit"
      className={styles.LandingLegs}>
      {landingLegs.number && (
        <InfoLine title={t("number")} value={`${landingLegs.number}`} />
      )}

      {landingLegs.material && (
        <InfoLine title={t("material")} value={`${landingLegs.material} `} />
      )}
    </motion.div>
  );
};

type landingLegsProps = {
  landingLegs: LandingLegsType;
};
