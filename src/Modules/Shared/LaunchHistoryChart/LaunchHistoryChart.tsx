import React, { useEffect } from "react";
import last from "lodash/last";
import range from "lodash/range";
import { Bar } from "react-chartjs-2";
import { useTranslation } from "react-i18next";

//STYLES
import styles from "./LaunchHistoryChart.module.scss";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Store/rootReducer";
import { fetchPastLaunches } from "../../../Store/PastLaunches/actions";
import { fetchUpcomingLaunches } from "../../../Store/UpcomingLaunches/upcomingLaunchesSlice";

//OTHER
import { getYear } from "../../../Utility/Utility";

export const LaunchHistoryChart = () => {
  const { t } = useTranslation();
  const upcomingLaunches = useSelector(
    (state: RootState) => state.upcomingLaunches
  );
  const pastLaunches = useSelector((state: RootState) => state.pastLaunches);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPastLaunches());
    dispatch(fetchUpcomingLaunches());
  }, [dispatch]);

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
                  launch.rocket.name === "Falcon 1" &&
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
                  launch.rocket.name === "Falcon 9" &&
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
                  launch.rocket.name === "Falcon 9" &&
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
                  launch.rocket.name === "Falcon Heavy" &&
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

  const options = {
    defaultFontColor: "white",
    defaultColor: "white",
    title: {
      display: false,
    },
    legend: {
      position: "bottom",
      labels: {
        fontColor: "white",
      },
    },
    responsive: true,
    scales: {
      xAxes: [
        {
          stacked: true,
          gridLines: {
            display: false,
          },
          ticks: {
            fontColor: "white",
          },
        },
      ],
      yAxes: [
        {
          stacked: true,
          gridLines: {
            display: true,
            color: "white",
            zeroLineColor: "white",
          },
          ticks: {
            fontColor: "white",
          },
        },
      ],
    },
  };

  return (
    <div className={styles.ChartContainer}>
      <div className={styles.Top}>
        <h2>{t("launchHistoryTitle")}</h2>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
};
