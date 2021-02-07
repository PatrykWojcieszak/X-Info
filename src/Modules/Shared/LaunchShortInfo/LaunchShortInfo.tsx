import React from "react";
import { Link } from "react-router-dom";

//COMPONENTS
import { SecondaryDetails } from "./SecondaryDetails/SecondaryDetails";
import { MainDetails } from "./MainDetails/MainDetails";

//STYLES
import styles from "./LaunchShortInfo.module.scss";

//OTHER
import { Flag } from "./Flag/Flag";

export const LaunchShortInfo = React.memo(
  ({
    launchName,
    launchDateUtc,
    rocketName,
    launchSiteName,
    customer,
    flightNumber,
    success,
    nationality,
    datePrecision,
  }: launchShortInfoProps) => {
    return (
      <Link to={`/launch/${flightNumber}`}>
        <div className={styles.Launch}>
          <MainDetails
            launchName={launchName}
            rocketName={rocketName}
            flightNumber={flightNumber}
            success={success}
            launchDateUtc={launchDateUtc}
            datePrecision={datePrecision}
          />
          <SecondaryDetails
            launchSiteName={launchSiteName}
            customer={customer}
          />
          <Flag nationality={nationality} />
        </div>
      </Link>
    );
  }
);

type launchShortInfoProps = {
  launchName: string;
  launchDateUtc: string;
  rocketName: string;
  launchSiteName: string;
  customer: string;
  flightNumber: number;
  success?: boolean;
  nationality: string;
  datePrecision: string;
};
