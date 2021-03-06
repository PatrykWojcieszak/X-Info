import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

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
import styled from "styled-components/macro";
import { device } from "../../resources/styles/helpers/breakpoints";
import { flexColumnCenter } from "../../resources/styles/helpers/mixins";

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
      <StyledLaunches
        as={motion.div}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariantsAnim}>
        <StyledLatest>
          <h2>{t("latestLaunchTitle")}</h2>
          {latestLaunch.loading ? (
            <LaunchExtendedInfoSkeleton />
          ) : (
            <LaunchExtendedInfo
              showMoreDetailsButton
              launch={latestLaunch.latestLaunch.docs[0]}
            />
          )}
        </StyledLatest>
        <StyledContent>
          <StyledButtonsWrapper>
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
          </StyledButtonsWrapper>

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
        </StyledContent>

        <ScrollToTop />
      </StyledLaunches>
    </>
  );
};

export default Launches;

const StyledLaunches = styled(flexColumnCenter)`
  margin-top: 8rem;
  padding: 0 1rem;

  @media ${device.tablet} {
    padding: 0 3rem;
  }

  @media ${device.large} {
    padding: 0 7rem;
  }

  @media ${device.desktop} {
    padding: 0 14rem;
  }
`;

const StyledLatest = styled.div`
  margin-bottom: 3rem;

  h2 {
    font-weight: 100;
    color: ${({ theme }) => theme.colors?.fontPrimary};
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  @media ${device.tablet} {
    h2 {
      font-size: 3rem;
    }
  }
`;

const StyledContent = styled(flexColumnCenter)`
  margin: 7rem 0;
  width: 100%;
`;

const StyledButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 2rem;
  justify-content: space-evenly;

  @media ${device.tablet} {
    justify-content: flex-start;

    > * {
      margin-right: 3rem;
    }
  }
`;
