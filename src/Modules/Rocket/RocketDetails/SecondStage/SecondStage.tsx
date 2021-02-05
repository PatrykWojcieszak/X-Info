import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

//COMPONENTS
import { InfoLine } from "../../../Shared";

//STYLES
import styles from "./SecondStage.module.scss";
import { rightToLeftAnim } from "../../../../Animations/Animations_motion";

//TYPES
import { SecondStage as SecondStageType } from "../../../../Types";

export const SecondStage = ({ secondStage }: secondStageProps) => {
  const { t } = useTranslation();

  return (
    <motion.div
      variants={rightToLeftAnim}
      initial="hidden"
      animate="show"
      exit="exit"
      className={styles.SecondStage}>
      {secondStage.engines && (
        <InfoLine title={t("engines")} value={`${secondStage.engines}`} />
      )}

      {(secondStage.thrust.kN || secondStage.thrust.lbf) && (
        <InfoLine
          title={t("thrust")}
          value={`${secondStage.thrust.kN} kn | ${secondStage.thrust.lbf} lbf`}
        />
      )}

      {secondStage.fuel_amount_tons && (
        <InfoLine
          title={t("fuelAmount")}
          value={`${secondStage.fuel_amount_tons} tons`}
        />
      )}

      {secondStage.burn_time_sec && (
        <InfoLine
          title={t("burnTime")}
          value={`${secondStage.burn_time_sec} sec`}
        />
      )}
    </motion.div>
  );
};

type secondStageProps = {
  secondStage: SecondStageType;
};
