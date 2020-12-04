import React from "react";

import LaunchExtendedInfo from "../shared/LaunchExtendedInfo/LaunchExtendedInfo";

import fhheavy from "../../resources/images/falconHeavy.png";
import styles from "./Launch.module.scss";
import InfoLine from "../shared/InfoLine/InfoLine";

const Launch = () => {
  return (
    <div className={styles.Launch}>
      <LaunchExtendedInfo showMoreDetailsButton={false} />
      <div className={styles.Row}>
        <div className={styles.Rocket}>
          <h3>FALCON HEAVY</h3>
          <img src={fhheavy} alt="rocket" />
        </div>
        <div className={styles.InfoContainer}>
          <div className={styles.InfoWrapper}>
            <h2>PAYLOAD #1</h2>
            <InfoLine title="MASS" value="70 kg | 229.6 lb" />
            <InfoLine title="MASS" value="70 kg | 229.6 lb" />
            <InfoLine title="MASS" value="70 kg | 229.6 lb" />
            <InfoLine title="MASS" value="70 kg | 229.6 lb" />
            <InfoLine title="MASS" value="70 kg | 229.6 lb" />
            <InfoLine title="MASS" value="70 kg | 229.6 lb" />
          </div>
          <div className={styles.InfoWrapper}>
            <h2>CORE</h2>
            <InfoLine title="MASS" value="70 kg | 229.6 lb" />
            <InfoLine title="MASS" value="70 kg | 229.6 lb" />
            <InfoLine title="MASS" value="70 kg | 229.6 lb" />
            <InfoLine title="MASS" value="70 kg | 229.6 lb" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Launch;
