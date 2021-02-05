import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

//COMPONENTS
import { InfoLine } from "../../../Shared";

//STYLES
import styles from "./FirstStage.module.scss";
import { rightToLeftAnim } from "../../../../Animations/Animations_motion";
import { Engines, FirstStage as FirstStageType } from "../../../../Types";

export const FirstStage = ({ firstStage, engines }: firstStageProps) => {
  const { t } = useTranslation();

  return (
    <motion.div
      variants={rightToLeftAnim}
      initial="hidden"
      animate="show"
      exit="exit"
      className={styles.Details}>
      {firstStage.engines && (
        <InfoLine title={t("engines")} value={`${firstStage.engines}`} />
      )}

      {(firstStage.thrust_sea_level.kN || firstStage.thrust_sea_level.lbf) && (
        <InfoLine
          title={t("thrustAtSeaLevel")}
          value={`${firstStage.thrust_sea_level.kN} kn | ${firstStage.thrust_sea_level.lbf} lbf`}
        />
      )}

      {(firstStage.thrust_vacuum.kN || firstStage.thrust_vacuum.lbf) && (
        <InfoLine
          title={t("thrustVacuum")}
          value={`${firstStage.thrust_vacuum.kN} kn | ${firstStage.thrust_vacuum.lbf} lbf`}
        />
      )}

      {firstStage.fuel_amount_tons && (
        <InfoLine
          title={t("fuelAmount")}
          value={`${firstStage.fuel_amount_tons} tons`}
        />
      )}

      {firstStage.burn_time_sec && (
        <InfoLine
          title={t("burnTime")}
          value={`${firstStage.burn_time_sec} sec `}
        />
      )}

      {engines.type && (
        <InfoLine title={t("type")} value={`${engines.type} `} />
      )}

      {engines.version && (
        <InfoLine title={t("version")} value={`${engines.version}`} />
      )}

      {engines.layout && (
        <InfoLine title={t("layout")} value={`${engines.layout}`} />
      )}

      <InfoLine
        title={t("reusable")}
        value={firstStage.reusable ? "YES" : "NO"}
      />

      {engines.propellant_1 && (
        <InfoLine
          title={`${t("propellant")} 1`}
          value={`${engines.propellant_1}`}
        />
      )}

      {engines.propellant_2 && (
        <InfoLine
          title={`${t("propellant")} 2`}
          value={`${engines.propellant_2}`}
        />
      )}
    </motion.div>
  );
};

type firstStageProps = {
  firstStage: FirstStageType;
  engines: Engines;
};
