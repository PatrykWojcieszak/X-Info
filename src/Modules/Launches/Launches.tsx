import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

//COMPONENTS
import LaunchExtendedInfo from "../Shared/LaunchExtendedInfo/LaunchExtendedInfo";
import ScrollToTop from "../Shared/ScrollToTop/ScrollToTop";
import UpcomingLaunches from "./UpcomingLaunches/UpcomingLaunches";
import PastLaunches from "./PastLaunches/PastLaunches";
import Dropdown from "../Shared/Dropdown/Dropdown";
import Boosters from "./Boosters/Boosters";
import Button from "../Shared/Button/Button";
import Modal from "../Shared/Modal/Modal";
import Filter from "../Shared/Filter/Filter";

//STYLES
import styles from "./Launches.module.scss";
import { pageVariantsAnim } from "../../Animations/Animations_motion";

//OTHER
import LaunchExtendedInfoSkeleton from "../Shared/Skeletons/LaunchExtendedInfoSkeleton";

//REDUX
import { fetchLatestLaunch } from "../../Store/LatestLaunch/actions";
import { fetchPastLaunches } from "../../Store/PastLaunches/actions";
import { fetchUpcomingLaunches } from "../../Store/UpcomingLaunches/actions";
import { connect } from "react-redux";

//TYPES
import { Launch, QueryResult } from "../../Types";
import { changeDDElementToTrue } from "../../Utility/Utility";

const launchesFilterUpcoming = [
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

const launchesFilterPast = [
  {
    id: 0,
    title: "UPCOMING LAUNCHES",
    selected: false,
    key: "launchesType",
  },
  {
    id: 1,
    title: "PAST LAUNCHES",
    selected: true,
    key: "launchesType",
  },
  {
    id: 2,
    title: "BOOSTERS",
    selected: false,
    key: "launchesType",
  },
];

const filterRockets = [
  {
    id: 0,
    title: "All",
    selected: true,
    key: "rockets",
  },
  {
    id: 1,
    title: "Falcon 1",
    selected: false,
    key: "rockets",
  },
  {
    id: 2,
    title: "Falcon 9",
    selected: false,
    key: "rockets",
  },
  {
    id: 3,
    title: "Falcon Heavy",
    selected: false,
    key: "rockets",
  },
  {
    id: 4,
    title: "Starship",
    selected: false,
    key: "rockets",
  },
];

const filterLaunchSite = [
  {
    id: 0,
    title: "All",
    selected: true,
    key: "launchSite",
  },
  {
    id: 1,
    title: "VAFB SLC 3W",
    selected: false,
    key: "5e9e4501f5090910d4566f83",
  },
  {
    id: 2,
    title: "CCSFS SLC 40",
    selected: false,
    key: "5e9e4501f509094ba4566f84",
  },
  {
    id: 3,
    title: "STLS",
    selected: false,
    key: "5e9e4502f5090927f8566f85",
  },
  {
    id: 4,
    title: "Kwajalein Atoll",
    selected: false,
    key: "5e9e4502f5090995de566f86",
  },
  {
    id: 5,
    title: "VAFB SLC 4E",
    selected: false,
    key: "5e9e4502f509092b78566f87",
  },
  {
    id: 6,
    title: "KSC LC 39A",
    selected: false,
    key: "5e9e4502f509094188566f88",
  },
];

const filterStatus = [
  {
    id: 0,
    title: "All",
    selected: true,
    key: "status",
  },
  {
    id: 1,
    title: "Success",
    selected: false,
    key: "true",
  },
  {
    id: 2,
    title: "Failure",
    selected: false,
    key: "false",
  },
];

const Launches = (props) => {
  const [isLaunchesTypeDDOpen, setIsLaunchesTypeDDOpen] = useState(false);
  const [launchTypeFilter, setLaunchTypeFilter] = useState(
    launchesFilterUpcoming
  );
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [rocketTypeFilter, setRocketTypeFilter] = useState(filterRockets);
  const [launchSiteFilter, setLaunchSiteFilter] = useState(filterLaunchSite);
  const [launchStatusFilter, setLaunchStatusFilter] = useState(filterStatus);
  const [dateFromFilter, setDateFromFilter] = useState(new Date("2006"));
  const [dateToFilter, setDateToFilter] = useState(
    new Date(new Date().setFullYear(new Date().getFullYear() + 1))
  );

  const { launchType } = useParams();
  const {
    onFetchLatestLaunch,
    onFetchPastLaunches,
    onFetchUpcomingLaunches,
  } = props;

  const filter = (arr: QueryResult<Launch>): Launch[] => {
    let temp = { ...arr };

    temp.docs = temp.docs.filter(
      (x) =>
        new Date(x.date_utc) >= dateFromFilter &&
        new Date(x.date_utc) <= dateToFilter
    );

    if (!rocketTypeFilter[0].selected)
      temp.docs = temp.docs.filter(
        (x) => x.rocket.name === rocketTypeFilter.find((t) => t.selected)?.title
      );

    if (!launchStatusFilter[0].selected) {
      temp.docs = temp.docs.filter(
        (x) =>
          String(x.success) === launchStatusFilter.find((t) => t.selected)?.key
      );
    }

    if (!launchSiteFilter[0].selected) {
      temp.docs = temp.docs.filter(
        (x) => x.launchpad.id === launchSiteFilter.find((t) => t.selected)?.key
      );
    }

    return temp.docs;
  };

  useEffect(() => {
    onFetchLatestLaunch();
    onFetchPastLaunches();
    onFetchUpcomingLaunches();

    if (launchType === "past") {
      setLaunchTypeFilter(launchesFilterPast);
    }
  }, [
    onFetchLatestLaunch,
    launchType,
    onFetchPastLaunches,
    onFetchUpcomingLaunches,
  ]);

  const toggleLaunchTypeHandler = (isOpen: boolean) => {
    setIsLaunchesTypeDDOpen(isOpen);
  };

  const launchTypeFilterSelectedHandler = (id: number) => {
    const newArr = changeDDElementToTrue(launchTypeFilter, id);
    setLaunchTypeFilter(newArr);
  };

  const rocketTypeFilterHandler = (id: number) => {
    const newArr = changeDDElementToTrue(rocketTypeFilter, id);
    setRocketTypeFilter(newArr);
  };

  const launchSiteFilterHandler = (id: number) => {
    const newArr = changeDDElementToTrue(launchSiteFilter, id);
    setLaunchSiteFilter(newArr);
  };

  const launchStatusFilterHandler = (id: number) => {
    const newArr = changeDDElementToTrue(launchStatusFilter, id);
    setLaunchStatusFilter(newArr);
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
            title={launchTypeFilter.find((x) => x.selected)?.title}
            list={launchTypeFilter}
            isListOpen={isLaunchesTypeDDOpen}
            styleType="primary"
            toggleList={(isOpen: boolean) => toggleLaunchTypeHandler(isOpen)}
            selectedElement={(id: number) =>
              launchTypeFilterSelectedHandler(id)
            }
          />
          {!launchTypeFilter[2].selected && (
            <Button
              name="FILTER"
              styleType="primary"
              clicked={() => setShowFilterModal(!showFilterModal)}
            />
          )}
        </div>

        <AnimatePresence>
          {showFilterModal && (
            <Modal
              show={showFilterModal}
              closeModal={() => setShowFilterModal(false)}>
              <Filter
                rocketsFilterList={rocketTypeFilter}
                rocketSelected={(id: number) => rocketTypeFilterHandler(id)}
                launchSitesFilterList={launchSiteFilter}
                launchSiteSelected={(id: number) => launchSiteFilterHandler(id)}
                statusesFilterList={launchStatusFilter}
                launchStatusSelected={(id: number) =>
                  launchStatusFilterHandler(id)
                }
                dateFrom={dateFromFilter}
                setDateFrom={(dateFrom: Date) => setDateFromFilter(dateFrom)}
                setDateTo={(dateTo: Date) => setDateToFilter(dateTo)}
                dateTo={dateToFilter}
              />
            </Modal>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {launchTypeFilter[0].selected && (
            <UpcomingLaunches
              launches={filter(props.upcomingLaunches)}
              loading={props.loadingUpcomingLaunches}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {launchTypeFilter[1].selected && (
            <PastLaunches
              launches={filter(props.pastLaunches)}
              loading={props.loadingPastLaunches}
            />
          )}
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
    pastLaunches: state.pastLaunches.pastLaunches,
    loadingPastLaunches: state.pastLaunches.loading,
    upcomingLaunches: state.upcomingLaunches.upcomingLaunches,
    loadingUpcomingLaunches: state.upcomingLaunches.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchLatestLaunch: () => dispatch(fetchLatestLaunch()),
    onFetchPastLaunches: () => dispatch(fetchPastLaunches()),
    onFetchUpcomingLaunches: () => dispatch(fetchUpcomingLaunches()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Launches);
