import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//MODELS
import IGlobePoint from "../../../Models/IGlobePoint";

//STYLES
import styles from "./StarlinkInfo.module.scss";

const StarlinkInfo = ({ starlink, close }: starlinkProps) => {
  return (
    <div className={styles.StarlinkInfo}>
      <FontAwesomeIcon onClick={close} icon="times" />
      <div className={styles.Left}>
        <h2>STARLINK</h2>
        <div className={styles.InfoContainer}>
          <div className={styles.NameWrapper}>
            <h4>NAME</h4>
            <h4>VERSION</h4>
            <h4>HEIGHT</h4>
            <h4>VELOCITY</h4>
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
        <h2>LAUNCH</h2>
        <Link to={`launch/${starlink.launch?.flight_number}`}>
          <div className={styles.LaunchInfoWrapper}>
            <h3>{starlink.launch?.name}</h3>
            <h4>
              {new Date(starlink.launch?.date_utc).toDateString()} | #
              {starlink.launch?.flight_number}
            </h4>
          </div>
        </Link>
      </div>
    </div>
  );
};

type starlinkProps = {
  starlink: IGlobePoint;
  close: () => void;
};

export default React.memo(StarlinkInfo);
