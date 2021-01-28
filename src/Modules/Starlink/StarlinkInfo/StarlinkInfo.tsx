import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

//TYPES
import { GlobePoint } from "../../../Types";

//STYLES
import styles from "./StarlinkInfo.module.scss";
import { pageVariantsAnim } from "../../../Animations/Animations_motion";

const StarlinkInfo = ({ starlink, close }: starlinkProps) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariantsAnim}
      className={styles.StarlinkInfo}>
      <FontAwesomeIcon onClick={close} icon="times" />
      <div className={styles.Left}>
        <h2>STARLINK</h2>
        <div className={styles.InfoContainer}>
          <div className={styles.NameWrapper}>
            <h4>{t("name")}</h4>
            <h4>{t("version")}</h4>
            <h4>{t("height")}</h4>
            <h4>{t("velocity")}</h4>
          </div>
          <div className={styles.ValuesWrapper}>
            <h4>{starlink.label}</h4>
            <h4>{starlink.version}</h4>
            <h4>{Number(starlink.height_km).toFixed(2)} km</h4>
            <h4>{Number(starlink.velocity_kms).toFixed(2)} kms</h4>
          </div>
        </div>
      </div>
      <div className={styles.Right}>
        <h2>{t("launch")}</h2>
        <Link to={`launch/${starlink.launch?.flight_number}`}>
          <div className={styles.LaunchInfoWrapper}>
            <h3>{starlink.launch?.name}</h3>
            <h4>
              {t("key", { date: new Date(starlink.launch?.date_utc) })} | #
              {starlink.launch?.flight_number}
            </h4>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

type starlinkProps = {
  starlink: GlobePoint;
  close: () => void;
};

export default React.memo(StarlinkInfo);
