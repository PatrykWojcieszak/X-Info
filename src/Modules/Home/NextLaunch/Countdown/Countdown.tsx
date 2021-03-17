import React, { useEffect, useCallback, useState } from "react";
import "moment-precise-range-plugin";
import { useTranslation } from "react-i18next";

//STYLES
import styled from "styled-components/macro";
import { device } from "../../../../resources/styles/helpers/breakpoints";
import {
  flexCenter,
  flexColumnCenter,
} from "../../../../resources/styles/helpers/mixins";
import { CountdownProps } from "./Countdown.types";
import { Time } from "../../../../Types";

const initialTime: Time = {
  days: 0,
  firstDateWasLater: true,
  hours: 4,
  minutes: 20,
  months: 0,
  seconds: 69,
  years: 0,
};

export const Countdown = ({ date }: CountdownProps) => {
  const { t } = useTranslation();
  const [timer, setTimer] = useState<Time>(initialTime);

  const moment = require("moment");

  const timeDiff = useCallback(() => {
    const launchDate = new Date(date);
    const currentDate = new Date();
    const diff = moment().preciseDiff(launchDate, currentDate, true);

    return diff;
  }, [date, moment]);

  useEffect(() => {
    const timeDifference = timeDiff;
    const interval = setInterval(() => setTimer(timeDifference), 1000);

    if (
      timer.days === 0 &&
      timer.hours === 0 &&
      timer.minutes === 0 &&
      timer.seconds === 0
    )
      clearInterval(interval);

    return () => {
      clearInterval(interval);
    };
  }, [timer, timeDiff]);

  return (
    <>
      <StyledCountdown>
        <StyledElement>
          <StyledNumber>{("0" + timer.days).slice(-2)}</StyledNumber>
          <StyledNumberTitle>{t("countdownDays")}</StyledNumberTitle>
        </StyledElement>
        <StyledColon as="h2">:</StyledColon>
        <StyledElement>
          <StyledNumber>{("0" + timer.hours).slice(-2)}</StyledNumber>
          <StyledNumberTitle>{t("countdownHours")}</StyledNumberTitle>
        </StyledElement>
        <StyledColon as="h2">:</StyledColon>
        <StyledElement>
          <StyledNumber>{("0" + timer.minutes).slice(-2)}</StyledNumber>
          <StyledNumberTitle>{t("countdownMinutes")}</StyledNumberTitle>
        </StyledElement>
        <StyledColon as="h2">:</StyledColon>
        <StyledElement>
          <StyledNumber>{("0" + timer.seconds).slice(-2)}</StyledNumber>
          <StyledNumberTitle>{t("countdownSeconds")}</StyledNumberTitle>
        </StyledElement>
      </StyledCountdown>
    </>
  );
};

const StyledCountdown = styled(flexCenter)`
  justify-content: space-between;
  width: 100%;
`;

const StyledElement = styled(flexColumnCenter)``;

const StyledNumber = styled.h2`
  font-family: "Roboto", monospace;
  color: ${({ theme }) => theme.colors?.blue};
  font-size: 3rem;
  font-weight: 400;

  @media ${device.tablet} {
    font-size: 4rem;
  }

  @media ${device.large} {
    font-size: 6rem;
  }

  @media ${device.desktop} {
    font-size: 10rem;
  }
`;

const StyledNumberTitle = styled.h4`
  color: ${({ theme }) => theme.colors?.fontPrimary};
  font-weight: 300;
  font-size: 0.625rem;

  @media ${device.tablet} {
    font-size: 0.8rem;
  }

  @media ${device.large} {
    font-size: 1rem;
  }

  @media ${device.desktop} {
    font-size: 1rem;
  }
`;

const StyledColon = styled(flexCenter)`
  color: ${({ theme }) => theme.colors?.blue};
  font-size: 2rem;

  @media ${device.tablet} {
    font-size: 3rem;
  }

  @media ${device.large} {
    font-size: 4rem;
  }

  @media ${device.desktop} {
    font-size: 6rem;
  }
`;
