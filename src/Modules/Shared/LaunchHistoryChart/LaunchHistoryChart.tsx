import React, { useEffect } from "react";
import last from "lodash/last";
import range from "lodash/range";
import { Bar } from "react-chartjs-2";

//STYLES
import styles from "./LaunchHistoryChart.module.scss";

//REDUX
import { connect } from "react-redux";
import { fetchPastLaunches } from "../../../Store/PastLaunches/actions";
import { fetchUpcomingLaunches } from "../../../Store/UpcomingLaunches/actions";

//OTHER
import { getYear } from "../../../Utility/Utility";

const LaunchHistoryChart = (props) => {
  const { onFetchUpcomingLaunches, onFetchPastLaunches } = props;

  useEffect(() => {
    onFetchUpcomingLaunches();
    onFetchPastLaunches(1);
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
          backgroundColor: "rgb(255, 99, 132)",
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
          label: "New Falcon 9",
          backgroundColor: "rgb(120, 99, 132)",
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
          label: "Used Falcon 9",
          backgroundColor: "rgb(255, 99, 0)",
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
          backgroundColor: "rgb(255, 0, 132)",
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
          label: "Failure",
          backgroundColor: "rgb(255, 0, 0)",
          data: years.map(
            (year) =>
              props.pastLaunches.docs.filter(
                (launch) => getYear(launch) === year && !launch.success
              ).length
          ),
        },
        {
          label: "Planned",
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
    onFetchPastLaunches: (page: number) => dispatch(fetchPastLaunches(page)),
    onFetchUpcomingLaunches: () => dispatch(fetchUpcomingLaunches()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LaunchHistoryChart);
