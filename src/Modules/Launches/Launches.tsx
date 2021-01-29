import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

//COMPONENTS
import { UpcomingLaunches } from "./UpcomingLaunches/UpcomingLaunches";
import { PastLaunches } from "./PastLaunches/PastLaunches";
import Boosters from "./Boosters/Boosters";
import {
  Filter,
  Modal,
  Dropdown,
  ScrollToTop,
  SEO,
  LaunchExtendedInfo,
  Button,
} from "../Shared";

//STYLES
import styles from "./Launches.module.scss";
import { pageVariantsAnim } from "../../Animations/Animations_motion";

//OTHER
import { LaunchExtendedInfoSkeleton } from "../Shared/Skeletons/LaunchExtendedInfoSkeleton";
import { launchesPageTitle, launchesPageDescription } from "../Shared/SEO/Tags";

//REDUX
import { fetchLatestLaunch } from "../../Store/LatestLaunch/actions";
import { fetchPastLaunches } from "../../Store/PastLaunches/actions";
import { fetchUpcomingLaunches } from "../../Store/UpcomingLaunches/actions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store";

//TYPES
import { Launch, QueryResult } from "../../Types";
import { changeDDElementToTrue } from "../../Utility/Utility";
import {
  filterLaunchSite,
  filterRockets,
  filterStatus,
  launchesFilterPast,
  launchesFilterUpcoming,
} from "../../Other/DDLists";

const Launches = () => {
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

  const latestLaunch = useSelector((root: RootState) => root.latestLaunch);
  const upcomingLaunches = useSelector(
    (root: RootState) => root.upcomingLaunches
  );
  const pastLaunches = useSelector((root: RootState) => root.pastLaunches);

  const { t } = useTranslation();
  const { launchType } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLatestLaunch());
    dispatch(fetchPastLaunches());
    dispatch(fetchUpcomingLaunches());

    if (launchType === "past") {
      setLaunchTypeFilter(launchesFilterPast);
    }
  }, [dispatch, launchType]);

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
    <>
      <SEO title={launchesPageTitle} description={launchesPageDescription} />
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariantsAnim}
        className={styles.Launches}>
        <div className={styles.Latest}>
          <h2>{t("latestLaunchTitle")}</h2>
          {latestLaunch.loading ? (
            <LaunchExtendedInfoSkeleton />
          ) : (
            <LaunchExtendedInfo
              showMoreDetailsButton
              details={latestLaunch.latestLaunch.docs[0].details}
              launchName={latestLaunch.latestLaunch.docs[0].name}
              date_local={latestLaunch.latestLaunch.docs[0].date_local}
              date_utc={latestLaunch.latestLaunch.docs[0].date_utc}
              rocketName={latestLaunch.latestLaunch.docs[0].rocket.name}
              launchSiteName={
                latestLaunch.latestLaunch.docs[0].launchpad.full_name
              }
              flightNumber={latestLaunch.latestLaunch.docs[0].flight_number}
              patchImg={latestLaunch.latestLaunch.docs[0].links.patch.small}
              success={latestLaunch.latestLaunch.docs[0].success}
              failures={latestLaunch.latestLaunch.docs[0].failures}
              launchId={latestLaunch.latestLaunch.docs[0].id}
              date_precision={latestLaunch.latestLaunch.docs[0].date_precision}
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
                name={t("filter")}
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
                  launchSiteSelected={(id: number) =>
                    launchSiteFilterHandler(id)
                  }
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
                launches={filter(upcomingLaunches.upcomingLaunches)}
                loading={upcomingLaunches.loading}
              />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {launchTypeFilter[1].selected && (
              <PastLaunches
                launches={filter(pastLaunches.pastLaunches)}
                loading={pastLaunches.loading}
              />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {launchTypeFilter[2].selected && <Boosters />}
          </AnimatePresence>
        </div>

        <ScrollToTop />
      </motion.div>
    </>
  );
};

export default Launches;
