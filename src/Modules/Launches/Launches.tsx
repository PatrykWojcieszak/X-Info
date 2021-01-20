import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

//COMPONENTS
import LaunchExtendedInfo from "../Shared/LaunchExtendedInfo/LaunchExtendedInfo";
import ScrollToTop from "../Shared/ScrollToTop/ScrollToTop";
import UpcomingLaunches from "./UpcomingLaunches/UpcomingLaunches";
import PastLaunches from "./PastLaunches/PastLaunches";
import Dropdown from "../Shared/Dropdown/Dropdown";
import Boosters from "./Boosters/Boosters";

//STYLES
import styles from "./Launches.module.scss";
import { pageVariantsAnim } from "../../Animations/Animations_motion";

//OTHER
import LaunchExtendedInfoSkeleton from "../Shared/Skeletons/LaunchExtendedInfoSkeleton";

//REDUX
import { fetchLatestLaunch } from "../../Store/LatestLaunch/actions";
import { connect } from "react-redux";

//TYPES
import { DropdownElement } from "../../Types";

const launchesFilter = [
  {
    id: 0,
    title: "UPCOMING LAUNCHES",
    selected: true,
    key: "launchesType",
  },
  {
    id: 1,
    title: "PAST LAUNCHES",
    selected: false,
    key: "launchesType",
  },
  {
    id: 2,
    title: "BOOSTERS",
    selected: false,
    key: "launchesType",
  },
];

const Launches = (props) => {
  const [isLaunchesTypeDDOpen, setIsLaunchesTypeDDOpen] = useState(false);
  const [launchTypeFilter, setLaunchTypeFilter] = useState(launchesFilter);
  const { launchType } = useParams();

  const { onFetchLatestLaunch } = props;

  const launchTypeFilterSelectedHandler = useCallback(
    (element: DropdownElement) => {
      const temp = [...launchTypeFilter];

      temp.forEach((element) => (element.selected = false));
      temp[element.id].selected = true;

      setLaunchTypeFilter(temp);
    },
    [launchTypeFilter]
  );

  useEffect(() => {
    onFetchLatestLaunch();

    if (launchType === "past") {
      launchTypeFilterSelectedHandler({
        id: 1,
        title: "PAST LAUNCHES",
        selected: false,
        key: "launchesType",
      });
    }
  }, [onFetchLatestLaunch, launchType, launchTypeFilterSelectedHandler]);

  const toggleLaunchTypeHandler = (isOpen: boolean) => {
    setIsLaunchesTypeDDOpen(isOpen);
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariantsAnim}
      className={styles.Launches}>
      <div className={styles.Latest}>
        <h2>LATEST LAUNCH</h2>
        {props.loadingLatestLaunch ? (
          <LaunchExtendedInfoSkeleton />
        ) : (
          <LaunchExtendedInfo
            showMoreDetailsButton
            details={props.latestLaunch.docs[0].details}
            launchName={props.latestLaunch.docs[0].name}
            date_local={props.latestLaunch.docs[0].date_local}
            date_utc={props.latestLaunch.docs[0].date_utc}
            rocketName={props.latestLaunch.docs[0].rocket.name}
            launchSiteName={props.latestLaunch.docs[0].launchpad.full_name}
            flightNumber={props.latestLaunch.docs[0].flight_number}
            patchImg={props.latestLaunch.docs[0].links.patch.small}
            success={props.latestLaunch.docs[0].success}
            failures={props.latestLaunch.docs[0].failures}
            launchId={props.latestLaunch.docs[0].id}
            date_precision={props.latestLaunch.docs[0].date_precision}
          />
        )}
      </div>
      <div className={styles.Content}>
        <div className={styles.ButtonsWrapper}>
          <Dropdown
            title="UPCOMING LAUNCHES"
            list={launchTypeFilter}
            isListOpen={isLaunchesTypeDDOpen}
            toggleList={(isOpen: boolean) => toggleLaunchTypeHandler(isOpen)}
            selectedElement={(element: DropdownElement) =>
              launchTypeFilterSelectedHandler(element)
            }
          />
        </div>

        <AnimatePresence>
          {launchTypeFilter[0].selected && <UpcomingLaunches />}
        </AnimatePresence>

        <AnimatePresence>
          {launchTypeFilter[1].selected && <PastLaunches />}
        </AnimatePresence>

        <AnimatePresence>
          {launchTypeFilter[2].selected && <Boosters />}
        </AnimatePresence>
      </div>

      <ScrollToTop />
    </motion.div>
  );
};

const mapStateToProps = (state) => {
  return {
    latestLaunch: state.latestLaunch.latestLaunch,
    loadingLatestLaunch: state.latestLaunch.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchLatestLaunch: () => dispatch(fetchLatestLaunch()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Launches);
