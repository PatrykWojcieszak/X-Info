import React from "react";
import { Link } from "react-router-dom";

//STYLES
import styles from "./LaunchExtendedInfo.module.scss";

//TYPES
import { Failure } from "../../../Types";
import { Patch } from "./Patch/Patch";
import { Failures } from "./Failures/Failures";
import { MainDetails } from "./MainDetails/MainDetails";

export const LaunchExtendedInfo = React.memo(
  ({
    showMoreDetailsButton,
    details,
    launchName,
    date_utc,
    date_local,
    rocketName,
    launchSiteName,
    flightNumber,
    patchImg,
    success,
    failures,
    launchId,
    date_precision,
  }: LaunchExtendedInfoProps) => {
    return (
      <Link
        style={{ cursor: showMoreDetailsButton ? "pointer" : "default" }}
        to={showMoreDetailsButton ? `/launch/${flightNumber}` : "#"}>
        <div className={styles.LatestLaunch}>
          <div className={styles.LeftContainer}>
            <Patch
              patchImg={patchImg}
              showMoreDetailsButton={showMoreDetailsButton}
            />
          </div>
          <div className={styles.RightContainer}>
            <MainDetails
              launchName={launchName}
              details={details}
              flightNumber={flightNumber}
              launchSiteName={launchSiteName}
              rocketName={rocketName}
              date_precision={date_precision}
              date_utc={date_utc}
              success={success}
            />
            {!success && failures.length > 0 ? (
              <Failures failures={failures} />
            ) : null}
          </div>
        </div>
      </Link>
    );
  }
);

type LaunchExtendedInfoProps = {
  showMoreDetailsButton: boolean;
  details: string;
  launchName: string;
  date_utc: string;
  date_local: string;
  rocketName: string;
  launchSiteName: string;
  flightNumber: number;
  patchImg: string;
  success: boolean;
  failures: Failure[];
  launchId: string;
  date_precision: string;
};
