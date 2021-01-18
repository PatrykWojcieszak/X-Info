import React, { useEffect } from "react";
import last from "lodash/last";
import range from "lodash/range";
import { Bar } from "react-chartjs-2";
import { useTranslation } from "react-i18next";

//STYLES
import styles from "./LaunchHistoryChart.module.scss";

//REDUX
import { connect } from "react-redux";
import { fetchPastLaunches } from "../../../Store/PastLaunches/actions";
import { fetchUpcomingLaunches } from "../../../Store/UpcomingLaunches/actions";

//OTHER
import { getYear } from "../../../Utility/Utility";

const LaunchHistoryChart = (props) => {
  const { t } = useTranslation();
  const { onFetchUpcomingLaunches, onFetchPastLaunches } = props;

  useEffect(() => {
    onFetchUpcomingLaunches();
    onFetchPastLaunches();
  }, [onFetchUpcomingLaunches, onFetchPastLaunches]);

  const launchesYearStart: number = 2006;

  let data = {};

  if (!props.loadingUpcomingLaunches && !props.loadingPastLaunches) {
    const upcomingLaunches: number[] = props.upcomingLaunches.docs.map(
      (launch) => getYear(launch)
    );
    upcomingLaunches.sort();

    const launchesStartEnd: number | undefined = last(upcomingLaunches);
    const years = range(
      launchesYearStart,
      launchesStartEnd ? launchesStartEnd + 1 : new Date().getFullYear()
    );

    data = {
      labels: years,
      datasets: [
        {
          label: "Falcon 1",
          backgroundColor: "rgb(255, 51, 204)",
          data: years.map(
            (year) =>
              props.pastLaunches.docs.filter(
                (launch) =>
                  getYear(launch) === year &&
                  launch.rocket.name === "Falcon 1" &&
                  launch.success
              ).length
          ),
        },
        {
          label: t("new") + "Falcon 9",
          backgroundColor: "rgb(0, 0, 204)",
          data: years.map(
            (year) =>
              props.pastLaunches.docs.filter(
                (launch) =>
                  getYear(launch) === year &&
                  launch.rocket.name === "Falcon 9" &&
                  launch.success &&
                  !launch.cores[0].reused
              ).length
          ),
        },
        {
          label: t("used") + "Falcon 9",
          backgroundColor: "rgb(0, 102, 255)",
          data: years.map(
            (year) =>
              props.pastLaunches.docs.filter(
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
          backgroundColor: "rgb(51, 204, 51)",
          data: years.map(
            (year) =>
              props.pastLaunches.docs.filter(
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
              props.pastLaunches.docs.filter(
                (launch) => getYear(launch) === year && !launch.success
              ).length
          ),
        },
        {
          label: t("planned"),
          backgroundColor: "rgb(255, 255, 255)",
          data: years.map(
            (year) =>
              props.upcomingLaunches.docs.filter(
                (launch) => getYear(launch) === year
              ).length
          ),
        },
      ],
    };
  }

  const options = {
    scales: {
      yAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
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

const mapStateToProps = (state) => {
  return {
    pastLaunches: state.pastLaunches.pastLaunches,
    loadingPastLaunches: state.pastLaunches.loading,
    upcomingLaunches: state.upcomingLaunches.upcomingLaunches,
    loadingUpcomingLaunches: state.upcomingLaunches.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchPastLaunches: () => dispatch(fetchPastLaunches()),
    onFetchUpcomingLaunches: () => dispatch(fetchUpcomingLaunches()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LaunchHistoryChart);
