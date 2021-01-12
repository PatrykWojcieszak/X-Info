import React, { useEffect } from "react";

//COMPONENTS
import Button from "../../Shared/Button/Button";
import LaunchShortInfo from "../../Shared/LaunchShortInfo/LaunchShortInfo";
import LaunchShortInfoSkeleton from "../../Shared/Skeletons/LaunchShortInfoSkeleton";
import Spinner from "../../Shared/Spinner/Spinner";

//STYLES
import styles from "./PastLaunches.module.scss";

//REDUX
import { fetchPastLaunches } from "../../../Store/PastLaunches/actions";
import { connect } from "react-redux";
import { motion } from "framer-motion";
import { showLaunchesList } from "../../../Animations/Animations_motion";

const PastLaunches = (props) => {
  const { onFetchPastLaunches } = props;

  const FetchPastLaunches = () => {
    onFetchPastLaunches(props.pastLaunches.nextPage);
  };

  useEffect(() => {
    onFetchPastLaunches(1);
  }, [onFetchPastLaunches]);

  let pastLaunchesArr = (
    <motion.div
      variants={showLaunchesList}
      initial="initial"
      animate="in"
      exit="out"
      className={styles.LaunchesWrapper}>
      {[1, 2, 3, 4, 5].map((n) => (
        <LaunchShortInfoSkeleton key={n} />
      ))}
    </motion.div>
  );

  if (props.pastLaunches.docs.length > 0) {
    pastLaunchesArr = (
      <motion.div
        variants={showLaunchesList}
        initial="initial"
        animate="in"
        exit="out"
        className={styles.LaunchesWrapper}>
        {props.pastLaunches.docs.map((launch, index) => (
          <LaunchShortInfo
            key={index}
            launchName={launch.name}
            launchDateUtc={launch.date_utc}
            rocketName={launch.rocket.name}
            launchSiteName={launch.launchpad.full_name}
            customer={launch.payloads[0].customers[0]}
            flightNumber={launch.flight_number}
            success={launch.success}
            nationality={launch.payloads[0].nationalities[0]}
          />
        ))}
        {props.pastLaunches.nextPage ? (
          <div
            style={{
              marginTop: "2rem",
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}>
            {props.loadingPastLaunches ? <Spinner /> : null}
            <Button
              disabled={props.loadingPastLaunches}
              name="LOAD MORE"
              clicked={FetchPastLaunches}
            />
          </div>
        ) : null}
      </motion.div>
    );
  }

  return <>{pastLaunchesArr}</>;
};

const mapStateToProps = (state) => {
  return {
    pastLaunches: state.pastLaunches.pastLaunches,
    loadingPastLaunches: state.pastLaunches.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchPastLaunches: (page: number) => dispatch(fetchPastLaunches(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PastLaunches);
