import React from "react";

//STYLES
import styles from "./BoosterLaunchesInfo.module.scss";

const BoosterLaunchesInfo = (props) => {
  return (
    <div className={styles.Booster}>
      <div className={styles.BoosterInfoContainer}>
        <div className={styles.InfoElement}>
          <h3>Block</h3>
          <h4>5</h4>
        </div>
        <div className={styles.InfoElement}>
          <h3>Launches</h3>
          <h4>4</h4>
        </div>
        <div className={styles.InfoElement}>
          <h3>Serial Number</h3>
          <h4>B1060</h4>
        </div>
        <div className={styles.InfoElement}>
          <h3>Status</h3>
          <h4>Unknown</h4>
        </div>
      </div>
      <div className={styles.MissionsContainer}>
        <h3 style={{ marginLeft: "1.1rem" }}>Missions</h3>
        <div className={styles.MissionListWrapper}>
          <div className={styles.Mission}>
            <h3>GPS III SV03 (Columbus)</h3>
            <h4>2020-06-30 | #97</h4>
          </div>
          <div className={styles.Mission}>
            <h3>GPS III SV03 (Columbus)</h3>
            <h4>2020-06-30 | #97</h4>
          </div>
          <div className={styles.Mission}>
            <h3>GPS III SV03 (Columbus)</h3>
            <h4>2020-06-30 | #97</h4>
          </div>
          <div className={styles.Mission}>
            <h3>GPS III SV03 (Columbus)</h3>
            <h4>2020-06-30 | #97</h4>
          </div>
          <div className={styles.Mission}>
            <h3>GPS III SV03 (Columbus)</h3>
            <h4>2020-06-30 | #97</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoosterLaunchesInfo;
