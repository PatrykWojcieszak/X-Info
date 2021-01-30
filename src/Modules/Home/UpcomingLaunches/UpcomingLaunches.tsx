import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

//COMPONENTS
import { Button, LaunchShortInfo } from "../../Shared";
import { LaunchShortInfoSkeleton } from "../../Shared/Skeletons/LaunchShortInfoSkeleton";

//STYLES
import styles from "./UpcomingLaunches.module.scss";

//REDUX
import { fetchUpcomingLaunches } from "../../../Store/UpcomingLaunches/upcomingLaunchesSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Store/rootReducer";

export const UpcomingLaunches = () => {
  const { t } = useTranslation();

  const upcomingLaunches = useSelector(
    (state: RootState) => state.upcomingLaunches
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (upcomingLaunches.upcomingLaunches.docs.length === 0)
      dispatch(fetchUpcomingLaunches());
  }, [dispatch, upcomingLaunches]);

  return (
    <div className={styles.UpcomingLaunches}>
      <div className={styles.Top}>
        <h2>{t("upcomingLaunchesTitle")}</h2>
      </div>
      <div className={styles.Content}>
        {upcomingLaunches.loading
          ? [1, 2, 3, 4, 5].map((n) => <LaunchShortInfoSkeleton key={n} />)
          : upcomingLaunches.upcomingLaunches.docs
              .slice(0, 5)
              .map((launch, index) => (
                <LaunchShortInfo
                  key={index}
                  launchName={launch.name}
                  launchDateUtc={launch.date_utc}
                  rocketName={launch.rocket.name}
                  launchSiteName={launch.launchpad.full_name}
                  customer={launch.payloads[0].customers[0]}
                  flightNumber={launch.flight_number}
                  nationality={launch.payloads[0].nationalities[0]}
                />
              ))}
      </div>
      <div className={styles.ButtonWrapper}>
        <Link to="/launches/upcoming">
          <Button name={t("showAll")} styleType="primary" />
        </Link>
      </div>
    </div>
  );
};
