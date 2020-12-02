import React from "react";

import styles from "./LatestLaunch.module.scss";
import patch from "../../../resources/images/patch.png";
import Button from "../../shared/Button/Button";

const LatestLaunch = ({ showMoreDetailsButton }: latestLaunchProps) => {
  return (
    <div className={styles.LatestLaunch}>
      <div className={styles.LeftContainer}>
        <img src={patch} alt="mission patch" />
        {showMoreDetailsButton ? <Button name="MORE DETAILS" /> : null}
      </div>
      <div className={styles.RightContainer}>
        <div className={styles.MainInfoContainer}>
          <h2>Sentinel-6 Michael Freilich</h2>
          <p>
            SpaceX will launch GPS Block III Space Vehicle 04 from SLC-40, Cape
            Canaveral AFS aboard a Falcon 9. GPS III is owned and operated by
            the US Air Force and produced by Lockheed Martin. This will be the
            fourth GPS III satellite launched and the third launched by SpaceX.
            The satellite will be delivered into a MEO transfer orbit. The
            booster for this mission will land on an ASDS.
          </p>
          <h4 className={styles.LaunchNumber}>#112</h4>
          <div className={styles.DetailsWrapper}>
            <div className={styles.TitlesContainer}>
              <h4>LAUNCH SITE:</h4>
              <h4>ROCKET:</h4>
              <h4>DATE:</h4>
              <h4>LAUNCH:</h4>
            </div>
            <div className={styles.ValuesContainer}>
              <h4>Kennedy Space Center Historic Launch Complex 39A</h4>
              <h4>Falcon 9</h4>
              <h4>11.21.2020</h4>
              <h4 style={{ color: true ? "#4BB543" : "#FA113D" }}>
                SUCCESSFUL
              </h4>
            </div>
          </div>
        </div>
        <div className={styles.FailureContainer}>
          <p>
            The rocket and Amos-6 payload were lost in a launch pad explosion on
            September 1, 2016 during propellant fill prior to a static fire
            test. The pad was clear of personnel and there were no injuries.
          </p>
          <h4>FAILURES:</h4>
          <ul>
            <li>
              buckled liner in several of the COPV tanks, causing perforations
              that allowed liquid and/or solid oxygen to accumulate underneath
              the lining, which was ignited by friction.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

type latestLaunchProps = {
  showMoreDetailsButton: boolean;
};

export default LatestLaunch;
