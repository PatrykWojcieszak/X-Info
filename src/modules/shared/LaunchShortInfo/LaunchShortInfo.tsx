import React from "react";

import styles from "./LaunchShortInfo.module.scss";

const LaunchShortInfo = () => {
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
          <h4 className={styles.Title}>LAUNCH SITE: </h4>
          <h4 className={styles.Title}>CUSTOMER: </h4>
        </div>
        <div className={styles.Content__Element}>
          <h4 className={styles.Value}>
            Kennedy Space Center Historic Launch Complex 39A
          </h4>
          <h4 className={styles.Value}>Nasa (CCtCAP)</h4>
        </div>
      </div>
      <img
        className={styles.Flag}
        src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
        alt="flag"
      />
    </div>
  );
};

export default LaunchShortInfo;
