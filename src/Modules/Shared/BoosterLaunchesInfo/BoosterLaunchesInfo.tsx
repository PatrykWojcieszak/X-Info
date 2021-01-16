import React from "react";
import { Link } from "react-router-dom";

//MODELS
import ILaunch from "../../../Types/ILaunch";

//STYLES
import styles from "./BoosterLaunchesInfo.module.scss";

const BoosterLaunchesInfo = ({
  serial,
  block,
  status,
  reuse_count,
  launches,
}: boostersType) => {
  return (
    <div className={styles.Booster}>
      <div className={styles.BoosterInfoContainer}>
        <div className={[styles.InfoElement, styles.One].join(" ")}>
          <h3>Block</h3>
          <h4>{block}</h4>
        </div>
        <div className={[styles.InfoElement, styles.Two].join(" ")}>
          <h3>Serial Number</h3>
          <h4>{serial}</h4>
        </div>
        <div className={[styles.InfoElement, styles.Three].join(" ")}>
          <h3>Launches</h3>
          <h4>{reuse_count ? reuse_count + 1 : launches.length > 0 ? 1 : 0}</h4>
        </div>
        <div className={[styles.InfoElement, styles.Four].join(" ")}>
          <h3>Status</h3>
          <h4>{status}</h4>
        </div>
      </div>
      <div className={styles.MissionsContainer}>
        <h3 style={{ marginLeft: "1.1rem" }}>Missions</h3>
        <div className={styles.MissionListWrapper}>
          {launches.map((launch, index) => (
            <Link key={index} to={`/launch/${launch.flight_number}`}>
              <div className={styles.Mission}>
                <h3>{launch.name}</h3>
                <h4>
                  {new Date(launch.date_utc).toDateString()} | #
                  {launch.flight_number}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

type boostersType = {
  block: number;
  serial: string;
  status: string;
  reuse_count: number;
  launches: ILaunch[];
};

export default BoosterLaunchesInfo;
