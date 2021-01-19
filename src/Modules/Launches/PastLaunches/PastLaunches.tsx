import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

//COMPONENTS
import Button from "../../Shared/Button/Button";
import LaunchShortInfo from "../../Shared/LaunchShortInfo/LaunchShortInfo";
import LaunchShortInfoSkeleton from "../../Shared/Skeletons/LaunchShortInfoSkeleton";

//STYLES
import styles from "./PastLaunches.module.scss";

//REDUX
import { fetchPastLaunches } from "../../../Store/PastLaunches/actions";
import { connect } from "react-redux";
import { motion } from "framer-motion";
import { showLaunchesList } from "../../../Animations/Animations_motion";

const PastLaunches = (props) => {
  const { t } = useTranslation();
  const [numberOfLaunches, setNumberOfLaunches] = useState(5);

  const { onFetchPastLaunches } = props;

  useEffect(() => {
    onFetchPastLaunches();
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
        {props.pastLaunches.docs
          .slice(0, numberOfLaunches)
          .map((launch, index) => (
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
        {props.pastLaunches.docs.length >= numberOfLaunches && (
          <div
            style={{
              marginTop: "2rem",
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}>
            <Button
              disabled={props.loadingPastLaunches}
              name={t("loadMore")}
              clicked={() => setNumberOfLaunches(numberOfLaunches + 5)}
            />
          </div>
        )}
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
    onFetchPastLaunches: () => dispatch(fetchPastLaunches()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PastLaunches);
