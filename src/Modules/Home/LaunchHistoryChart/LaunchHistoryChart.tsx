import React, { useEffect } from "react";
import { last, range } from "lodash";
import { useTranslation } from "react-i18next";

//COMPONENTS
import { Chart } from "../../Shared/Chart/Chart";

//REDUX
import { RootState } from "../../../Store/rootReducer";
import { fetchPastLaunches } from "../../../Store/PastLaunches/pastLaunchesSlice";
import { useSelector, useDispatch } from "react-redux";

//OTHER
import { getYear } from "../../../Utility/Utility";
import { RocketType } from "../../../Types";

export const LaunchHistoryChart = () => {
  const { t } = useTranslation();

  const upcomingLaunches = useSelector(
    (state: RootState) => state.upcomingLaunches
  );
  const pastLaunches = useSelector((state: RootState) => state.pastLaunches);

  const dispatch = useDispatch();

  useEffect(() => {
    if (pastLaunches.pastLaunches.docs.length === 0)
      dispatch(fetchPastLaunches());
  }, [dispatch, pastLaunches]);

  const launchesYearStart: number = 2006;

  let data = {};

  if (!upcomingLaunches.loading && !pastLaunches.loading) {
    const upcomingLaunchesYears: number[] = upcomingLaunches.upcomingLaunches.docs.map(
      (launch) => getYear(launch)
    );
    upcomingLaunchesYears.sort();

    const launchesStartEnd: number | undefined = last(upcomingLaunchesYears);
    const years = range(
      launchesYearStart,
      launchesStartEnd ? launchesStartEnd + 1 : new Date().getFullYear()
    );

    data = {
      labels: years,
      datasets: [
        {
          label: "Falcon 1",
          backgroundColor: "rgb(255,142,48)",
          data: years.map(
            (year) =>
              pastLaunches.pastLaunches.docs.filter(
                (launch) =>
                  getYear(launch) === year &&
                  launch.rocket.id === RocketType.f1 &&
                  launch.success
              ).length
          ),
        },
        {
          label: t("new") + " Falcon 9",
          backgroundColor: "rgb(0,102,255)",
          data: years.map(
            (year) =>
              pastLaunches.pastLaunches.docs.filter(
                (launch) =>
                  getYear(launch) === year &&
                  launch.rocket.id === RocketType.f9 &&
                  launch.success &&
                  !launch.cores[0].reused
              ).length
          ),
        },
        {
          label: t("used") + " Falcon 9",
          backgroundColor: "rgb(68,149,208)",
          data: years.map(
            (year) =>
              pastLaunches.pastLaunches.docs.filter(
                (launch) =>
                  getYear(launch) === year &&
                  launch.rocket.id === RocketType.f9 &&
                  launch.success &&
                  launch.cores[0].reused
              ).length
          ),
        },
        {
          label: "Falcon Heavy",
          backgroundColor: "rgb(126,237,148)",
          data: years.map(
            (year) =>
              pastLaunches.pastLaunches.docs.filter(
                (launch) =>
                  getYear(launch) === year &&
                  launch.rocket.id === RocketType.fh &&
                  launch.success
              ).length
          ),
        },
        {
          label: t("failure"),
          backgroundColor: "rgb(255, 0, 0)",
          data: years.map(
            (year) =>
              pastLaunches.pastLaunches.docs.filter(
                (launch) =>
                  getYear(launch) === year &&
                  launch.success !== null &&
                  !launch.success
              ).length
          ),
        },
        {
          label: t("planned"),
          backgroundColor: "rgb(255, 255, 255)",
          data: years.map(
            (year) =>
              upcomingLaunches.upcomingLaunches.docs.filter(
                (launch) => getYear(launch) === year
              ).length
          ),
        },
      ],
    };
  }

  return (
    <>
      <Chart data={data} name={t("launchHistoryTitle")} />
    </>
  );
};
