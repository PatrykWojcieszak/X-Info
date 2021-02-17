import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

//COMPONENTS
import { UpcomingLaunches } from "./UpcomingLaunches/UpcomingLaunches";
import { PastLaunches } from "./PastLaunches/PastLaunches";
import { Boosters } from "./Boosters/Boosters";
import {
  Filter,
  Modal,
  Dropdown,
  ScrollToTop,
  SEO,
  LaunchExtendedInfo,
  Button,
  CustomDatePicker,
} from "../Shared";

//STYLES
import styles from "./Launches.module.scss";
import { pageVariantsAnim } from "../../Animations/Animations_motion";

//OTHER
import { LaunchExtendedInfoSkeleton } from "../Shared/Skeletons/LaunchExtendedInfoSkeleton";
import { launchesPageTitle, launchesPageDescription } from "../Shared/SEO/Tags";

//REDUX
import { fetchLatestLaunch } from "../../Store/LatestLaunch/latestLaunchSlice";
import { fetchPastLaunches } from "../../Store/PastLaunches/pastLaunchesSlice";
import { fetchUpcomingLaunches } from "../../Store/UpcomingLaunches/upcomingLaunchesSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store/rootReducer";
import {
  clearFilter,
  setFilterRocket,
  setFilterDateFrom,
  setFilterDateTo,
  setLaunchpadFilter,
  setLaunchStatusFilter,
} from "../../Store/LaunchesFilter/LaunchesFilterSlice";

//TYPES
import {
  DropdownElement,
  FilterElement,
  Launch,
  QueryResult,
} from "../../Types";
import { changeDDElementToTrue } from "../../Utility/Utility";
import { launchedDDList } from "../../Other/DDLists";

const Launches = () => {
  const [launchTypeFilter, setLaunchTypeFilter] = useState(launchedDDList);
  const [showFilterModal, setShowFilterModal] = useState(false);

  const latestLaunch = useSelector((root: RootState) => root.latestLaunch);
  const upcomingLaunches = useSelector(
    (root: RootState) => root.upcomingLaunches
  );
  const pastLaunches = useSelector((root: RootState) => root.pastLaunches);

  const { filters } = useSelector((root: RootState) => root.launchesFilter);

  const { t } = useTranslation();
  const { launchType } = useParams();

  const dispatch = useDispatch();

  const changeDropdownTranslations = () => {
    const temp = launchedDDList.map((item) => {
      return {
        id: item.id,
        selected: item.selected,
        key: item.key,
        title: t(item.key),
      };
    });

    setLaunchTypeFilter(temp);
  };

  i18n.on("languageChanged init", () => {
    changeDropdownTranslations();
  });

  useEffect(() => {
    if (latestLaunch.latestLaunch.docs.length === 0)
      dispatch(fetchLatestLaunch());
    if (pastLaunches.pastLaunches.docs.length === 0)
      dispatch(fetchPastLaunches());
    if (upcomingLaunches.upcomingLaunches.docs.length === 0)
      dispatch(fetchUpcomingLaunches());

    let newFilter: DropdownElement[] = [];
    if (launchType === "past") {
      newFilter = changeDDElementToTrue(launchedDDList, 1);
    } else {
      newFilter = changeDDElementToTrue(launchedDDList, 0);
    }
    setLaunchTypeFilter(newFilter);
  }, [dispatch, launchType, latestLaunch, pastLaunches, upcomingLaunches]);

  const filter = (arr: QueryResult<Launch>): Launch[] => {
    let temp = { ...arr };

    temp.docs = temp.docs.filter(
      (x) =>
        new Date(x.date_utc) >= new Date(filters[1].value as number) &&
        new Date(x.date_utc) <= new Date(filters[2].value as number)
    );

    if (!filters[0].value[0].selected as boolean) {
      const rocketFilter = filters[0].value as DropdownElement[];
      temp.docs = temp.docs.filter(
        (x) => x.rocket.name === rocketFilter.find((t) => t.selected)?.title
      );
    }

    if (!filters[3].value[0].selected as boolean) {
      const launchStatus = filters[3].value as DropdownElement[];
      temp.docs = temp.docs.filter(
        (x) => x.launchpad.id === launchStatus.find((t) => t.selected)?.key
      );
    }

    if (!filters[4].value[0].selected as boolean) {
      const launchPadFilter = filters[4].value as DropdownElement[];
      temp.docs = temp.docs.filter(
        (x) =>
          String(x.success) === launchPadFilter.find((t) => t.selected)?.key
      );
    }

    return temp.docs;
  };

  const launchTypeFilterSelectedHandler = (id: number) => {
    const newArr = changeDDElementToTrue(launchTypeFilter, id);
    setLaunchTypeFilter(newArr);
  };

  const filtersArr: FilterElement[] = [
    {
      name: "rocket",
      element: (
        <Dropdown
          list={filters[0].value as DropdownElement[]}
          styleType="secondary"
          selectedElement={(id: number) => dispatch(setFilterRocket({ id }))}
        />
      ),
    },
    {
      name: "dateFrom",
      element: (
        <CustomDatePicker
          date={new Date(filters[1].value as number)}
          dateChanged={(date: Date) => dispatch(setFilterDateFrom({ date }))}
        />
      ),
    },
    {
      name: "dateTo",
      element: (
        <CustomDatePicker
          date={new Date(filters[2].value as number)}
          dateChanged={(date: Date) => dispatch(setFilterDateTo({ date }))}
        />
      ),
    },
    {
      name: "launchSite",
      element: (
        <Dropdown
          list={filters[3].value as DropdownElement[]}
          styleType="secondary"
          selectedElement={(id: number) => dispatch(setLaunchpadFilter({ id }))}
        />
      ),
    },
    {
      name: "status",
      element: (
        <Dropdown
          list={filters[4].value as DropdownElement[]}
          styleType="secondary"
          selectedElement={(id: number) =>
            dispatch(setLaunchStatusFilter({ id }))
          }
        />
      ),
    },
  ];

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
              launch={latestLaunch.latestLaunch.docs[0]}
            />
          )}
        </div>
        <div className={styles.Content}>
          <div className={styles.ButtonsWrapper}>
            <Dropdown
              list={launchTypeFilter}
              styleType="primary"
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
                  clearFilter={() => dispatch(clearFilter())}
                  filters={filtersArr}
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
