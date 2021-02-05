import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

//COMPONENTS
import { InfoLine } from "../../../Shared";

//STYLES
import styles from "./Overview.module.scss";
import { rightToLeftAnim } from "../../../../Animations/Animations_motion";

//TYPES
import { Length, Mass, PayloadWeights } from "../../../../Types";

export const Overview = ({
  height,
  diameter,
  mass,
  payloads,
}: overviewProps) => {
  const { t } = useTranslation();

  return (
    <motion.div
      variants={rightToLeftAnim}
      initial="hidden"
      animate="show"
      exit="exit"
      className={styles.Overview}>
      {height.meters || height.feet ? (
        <InfoLine
          title={t("height")}
          value={`${height.meters} m | ${height.feet} ft`}
        />
      ) : null}

      {diameter.meters || diameter.feet ? (
        <InfoLine
          title={t("diameter")}
          value={`${diameter.meters} m | ${diameter.feet} ft`}
        />
      ) : null}

      {mass.kg || mass.lb ? (
        <InfoLine title={t("mass")} value={`${mass.kg} kg | ${mass.lb} lb`} />
      ) : null}

      {payloads.map((payload, index) => (
        <InfoLine
          key={index}
          title={payload.id}
          value={`${payload.kg} kg | ${payload.lb} lb`}
        />
      ))}
    </motion.div>
  );
};

type overviewProps = {
  height: Length;
  diameter: Length;
  mass: Mass;
  payloads: PayloadWeights[];
};
