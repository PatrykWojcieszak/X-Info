import React from "react";
import { Link } from "react-router-dom";

//COMPONENTS
import Launch from "./Launch/Launch";
import Button from "../../Shared/Button/Button";

//STYLES
import styles from "./RecentLaunches.module.scss";

//MODELS
import Launch_model from "../../../Models/ILaunch";
import SkeletonElement from "../../Shared/Skeletons/SkeletonElement";

const RecentLaunches = ({ launches }: recentLaunchesProps) => {
  return (
    <div className={styles.RecentLaunches}>
      <div className={styles.Top}>
        <h2>RECENT LAUNCHES</h2>
        <Link to="/launches/past">
          <Button name="SHOW MORE" />
        </Link>
      </div>

      <SkeletonElement type="Text" />
      <SkeletonElement type="Title" />
      <SkeletonElement type="Avatar" />
      <SkeletonElement type="Thumbnail" />

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

export default React.memo(RecentLaunches);
