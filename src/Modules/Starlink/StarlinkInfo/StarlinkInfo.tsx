import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

//COMPONENTS
import { StarlinkDetails } from "./StarlinkDetails/StarlinkDetails";
import { MissionDetails } from "./MissionDetails/MissionDetails";

//TYPES
import { GlobePoint } from "../../../Types";

//STYLES
import styles from "./StarlinkInfo.module.scss";
import { pageVariantsAnim } from "../../../Animations/Animations_motion";

export const StarlinkInfo = React.memo(({ starlink, close }: starlinkProps) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariantsAnim}
      className={styles.StarlinkInfo}>
      <FontAwesomeIcon onClick={close} icon="times" />
      <StarlinkDetails
        label={starlink.label}
        version={starlink.version}
        height={Number(starlink.height_km)}
        velocity={Number(starlink.velocity_kms)}
      />
      <MissionDetails
        name={starlink.launch.name}
        dateUtc={starlink.launch.date_utc}
        id={starlink.launch.id}
        flightNumber={starlink.launch.flight_number}
      />
    </motion.div>
  );
});

type starlinkProps = {
  starlink: GlobePoint;
  close: () => void;
};
