import React from "react";

import styles from "./launch.module.scss";

const launch = () => {
  return (
    <div className={styles.Launch}>
      <div className={styles.Top}>
        <div className={styles.Name_Date}>
          <h2>Sentinel-6 Michael Freilich</h2>
          <h4>11.21.2020</h4>
        </div>
        <div className={styles.RocketType}>
          <h4>ROCKET: </h4>
          <h3>Falcon 9</h3>
        </div>
        <h4 className={styles.LaunchNumber}>#110</h4>
      </div>
      <div className={styles.Content}>
        <div className={styles.Content__Element}>
          <h4>LAUNCH SITE: </h4>
          <h3>Kennedy Space Center Historic Launch Complex 39A</h3>
        </div>
        <div className={styles.Content__Element}>
          <h4>CUSTOMER: </h4>
          <h3>Nasa (CCtCAP)</h3>
        </div>
      </div>
    </div>
  );
};

export default launch;
