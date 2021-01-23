import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

//COMPONENTS
import Button from "../../Shared/Button/Button";
import LaunchShortInfo from "../../Shared/LaunchShortInfo/LaunchShortInfo";

//STYLES
import styles from "./UpcomingLaunches.module.scss";

//MODELS
import LaunchShortInfoSkeleton from "../../Shared/Skeletons/LaunchShortInfoSkeleton";

//REDUX
import { fetchUpcomingLaunches } from "../../../Store/UpcomingLaunches/actions";

const UpcomingLaunches = (props) => {
  const { t } = useTranslation();
  const { onFetchUpcomingLaunch, upcomingLaunches } = props;

  useEffect(() => {
    if (upcomingLaunches.docs.length === 0) onFetchUpcomingLaunch();
  }, [onFetchUpcomingLaunch, upcomingLaunches]);

  return (
    <div className={styles.UpcomingLaunches}>
      <div className={styles.Top}>
        <h2>{t("upcomingLaunchesTitle")}</h2>
      </div>
      <div className={styles.Content}>
        {props.loadingUpcomingLaunches
          ? [1, 2, 3, 4, 5].map((n) => <LaunchShortInfoSkeleton key={n} />)
          : upcomingLaunches.docs
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
          <Button name="SHOW ALL" styleType="primary" />
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    upcomingLaunches: state.upcomingLaunches.upcomingLaunches,
    loadingUpcomingLaunches: state.upcomingLaunches.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchUpcomingLaunch: () => dispatch(fetchUpcomingLaunches()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingLaunches);
