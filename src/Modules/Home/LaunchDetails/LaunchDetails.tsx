import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

//COMPONENTS
import InfoLine from "./InfoLine/InfoLine";

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
  const { t } = useTranslation();
  const formattedDate = new Date(dateLocal);

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
        <InfoLine title={t("launchDate")} value={formattedDate.toUTCString()} />
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
};

type launchDetailsProps = {
  flightNumber: Number;
  dateLocal: string;
  details: string;
  rocketName: string;
  launchpadFullName: string;
};

export default React.memo(LaunchDetails);
