import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

//COMPONENTS
import { InfoLine } from "./InfoLine/InfoLine";

//STYLES
import styles from "./LaunchDetails.module.scss";
import { launchDetailsAnim } from "../../../Animations/Animations_motion";

export const LaunchDetails = React.memo(
  ({
    flightNumber,
    dateLocal,
    details,
    rocketName,
    launchpadFullName,
  }: launchDetailsProps) => {
    const { t } = useTranslation();

    return (
      <motion.div
        variants={launchDetailsAnim}
        initial="hidden"
        animate="show"
        className={styles.LaunchDetails}>
        {flightNumber && (
          <InfoLine title={t("flight")} value={flightNumber.toString()} />
        )}
        {dateLocal && (
          <InfoLine
            title={t("launchDate")}
            value={t("key", { date: new Date(dateLocal) })}
          />
        )}
        {rocketName && <InfoLine title={t("rocket")} value={rocketName} />}
        {launchpadFullName && (
          <InfoLine
            title={t("launchSite")}
            value={launchpadFullName.toString()}
          />
        )}
        {details && <InfoLine title={t("details")} value={details} />}
      </motion.div>
    );
  }
);

type launchDetailsProps = {
  flightNumber: Number;
  dateLocal: string;
  details: string;
  rocketName: string;
  launchpadFullName: string;
};
