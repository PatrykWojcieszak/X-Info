import React from "react";
import { Bar } from "react-chartjs-2";

//STYLES
import styles from "./Chart.module.scss";

export const Chart = ({ name, data }: chartProps) => {
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
        <h2>{name}</h2>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
};

type chartProps = {
  data: {};
  name: string;
};
