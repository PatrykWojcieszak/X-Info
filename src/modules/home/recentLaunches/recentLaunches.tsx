import React from "react";
import { Link } from "react-router-dom";

import Launch from "./Launch/Launch";
import Button from "../../shared/Button/Button";

import styles from "./RecentLaunches.module.scss";
import Launch_model from "../../../Models/ILaunch";

const RecentLaunches = ({ launches }: recentLaunchesProps) => {
  return (
    <div className={styles.RecentLaunches}>
      <div className={styles.Top}>
        <h2>RECENT LAUNCHES</h2>
        <Link to="/launches/past">
          <Button name="SHOW MORE" />
        </Link>
      </div>
      <div className={styles.Content}>
        {launches.map((launch, index) => (
          <Launch
            flightNumber={launch.flight_number}
            key={index}
            name={launch.name}
            patch={launch.links.patch.small}
            date={launch.date_local}
            success={launch.success}
          />
        ))}
      </div>
    </div>
  );
};

type recentLaunchesProps = {
  launches: Launch_model[];
};

export default RecentLaunches;
