import "moment-precise-range-plugin";
import React from "react";
import styled from "styled-components/macro";
import { useTranslation } from "react-i18next";

import {
  flexCenter,
  flexColumnCenter,
} from "../../../../resources/styles/helpers/mixins";
import { CountdownProps } from "./Countdown.types";
import { device } from "../../../../resources/styles/helpers/breakpoints";

export const Countdown = ({
  days,
  hours,
  minutes,
  seconds,
}: CountdownProps) => {
  const { t } = useTranslation();

  return (
    <>
      <StyledCountdown>
        <StyledElement>
          <StyledNumber>{("0" + days).slice(-2)}</StyledNumber>
          <StyledNumberTitle>{t("countdownDays")}</StyledNumberTitle>
        </StyledElement>
        <StyledColon as="h2">:</StyledColon>
        <StyledElement>
          <StyledNumber>{("0" + hours).slice(-2)}</StyledNumber>
          <StyledNumberTitle>{t("countdownHours")}</StyledNumberTitle>
        </StyledElement>
        <StyledColon as="h2">:</StyledColon>
        <StyledElement>
          <StyledNumber>{("0" + minutes).slice(-2)}</StyledNumber>
          <StyledNumberTitle>{t("countdownMinutes")}</StyledNumberTitle>
        </StyledElement>
        <StyledColon as="h2">:</StyledColon>
        <StyledElement>
          <StyledNumber>{("0" + seconds).slice(-2)}</StyledNumber>
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
    font-size: 9rem;
  }
`;

const StyledNumberTitle = styled.h4`
  color: ${({ theme }) => theme.colors?.fontSecondary};
  font-weight: 300;
  font-size: 0.625rem;

  @media ${device.tablet} {
    font-size: 0.8rem;
  }

  @media ${device.large} {
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
