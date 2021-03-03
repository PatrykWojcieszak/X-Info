import React from "react";
import { Bar } from "react-chartjs-2";
import styled from "styled-components/macro";
import { device } from "../../../resources/styles/helpers/breakpoints";

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
    <StyledChartContainer>
      <StyledTitle>{name}</StyledTitle>
      <Bar data={data} options={options} />
    </StyledChartContainer>
  );
};

type chartProps = {
  data: {};
  name: string;
};

const StyledChartContainer = styled.div`
  width: 100%;
  margin-bottom: 3rem;

  > div {
    margin-bottom: 2rem;
  }
`;

const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.colors?.fontPrimary};
  font-weight: 100;
  font-size: 1.1rem;
  margin-bottom: 2rem;

  @media ${device.tablet} {
    font-size: 1.5rem;
  }

  @media ${device.large} {
    font-size: 2.5rem;
  }
`;
