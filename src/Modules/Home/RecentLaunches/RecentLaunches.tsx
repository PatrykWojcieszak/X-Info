import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

//COMPONENTS
import { Launch } from "./Launch/Launch";
import { Button } from "../../Shared";
import { RecentLaunchSkeleton } from "../../Shared/Skeletons/RecentLaunchSkeleton";

//STYLES
import styles from "./RecentLaunches.module.scss";

//REDUX
import { fetchRecentLaunches } from "../../../Store/RecentLaunches/actions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Store/rootReducer";

export const RecentLaunches = () => {
  const { t } = useTranslation();

  const recentLaunches = useSelector(
    (state: RootState) => state.recentLaunches
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecentLaunches());
  }, [dispatch]);

  return (
    <div className={styles.RecentLaunches}>
      <div className={styles.Top}>
        <h2>{t("recentLaunchesTitle")}</h2>
        <Link to="/launches/past">
          <Button name={t("showMore")} styleType="primary" />
        </Link>
      </div>
      <div className={styles.Content}>
        {recentLaunches.loading
          ? [1, 2, 3, 4, 5].map((n) => <RecentLaunchSkeleton key={n} />)
          : recentLaunches.recentLaunches.docs.map((launch, index) => (
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
