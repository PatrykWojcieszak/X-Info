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
    customers,
    flightNumber,
    success,
    nationality,
    datePrecision,
    id,
  }: launchShortInfoProps) => {
    return (
      <Link to={`/launch/${id}`}>
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
            customers={customers}
          />
          {nationality && <Flag nationality={nationality} />}
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
  customers: string[];
  flightNumber: number;
  success?: boolean;
  nationality: string;
  datePrecision: string;
  id: string;
};
