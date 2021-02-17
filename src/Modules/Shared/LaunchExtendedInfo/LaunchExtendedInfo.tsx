import React from "react";
import { Link } from "react-router-dom";

//COMPONENTS
import { MainDetails } from "./MainDetails/MainDetails";
import { Failures } from "./Failures/Failures";
import { Patch } from "./Patch/Patch";

//STYLES
import styles from "./LaunchExtendedInfo.module.scss";

//TYPES
import { Launch } from "../../../Types";

export const LaunchExtendedInfo = React.memo(
  ({ showMoreDetailsButton, launch }: LaunchExtendedInfoProps) => {
    return (
      <Link
        style={{ cursor: showMoreDetailsButton ? "pointer" : "default" }}
        to={showMoreDetailsButton ? `/launch/${launch.id}` : "#"}>
        <div className={styles.LatestLaunch}>
          <div className={styles.LeftContainer}>
            <Patch
              patchImg={launch.links.patch.small}
              showMoreDetailsButton={showMoreDetailsButton}
            />
          </div>
          <div className={styles.RightContainer}>
            <MainDetails
              launchName={launch.name}
              details={launch.details}
              flightNumber={launch.flight_number}
              launchSiteName={launch.launchpad.full_name}
              rocketName={launch.rocket.name}
              date_precision={launch.date_precision}
              date_utc={launch.date_utc}
              success={launch.success}
            />
            {!launch.success && launch.failures.length > 0 ? (
              <Failures failures={launch.failures} />
            ) : null}
          </div>
        </div>
      </Link>
    );
  }
);

type LaunchExtendedInfoProps = {
  showMoreDetailsButton: boolean;
  launch: Launch;
};
