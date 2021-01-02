import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

//COMPONENTS
import Launch from "./Launch/Launch";
import Button from "../../Shared/Button/Button";
import RecentLaunchSkeleton from "../../Shared/Skeletons/RecentLaunchSkeleton";

//STYLES
import styles from "./RecentLaunches.module.scss";

//REDUX
import { fetchRecentLaunches } from "../../../Store/RecentLaunches/actions";

const RecentLaunches = (props) => {
  const { onFetchRecentLaunch, recentLaunches } = props;

  useEffect(() => {
    if (recentLaunches.docs.length === 0) onFetchRecentLaunch();
  }, [onFetchRecentLaunch, recentLaunches]);

  return (
    <div className={styles.RecentLaunches}>
      <div className={styles.Top}>
        <h2>RECENT LAUNCHES</h2>
        <Link to="/launches/past">
          <Button name="SHOW MORE" />
        </Link>
      </div>

      <div className={styles.Content}>
        {props.loadingRecentLaunches
          ? [1, 2, 3, 4, 5].map((n) => <RecentLaunchSkeleton key={n} />)
          : recentLaunches.docs.map((launch, index) => (
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

const mapStateToProps = (state) => {
  return {
    recentLaunches: state.recentLaunches.recentLaunches,
    loadingRecentLaunches: state.recentLaunches.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchRecentLaunch: () => dispatch(fetchRecentLaunches()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecentLaunches);
