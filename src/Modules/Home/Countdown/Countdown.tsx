import React from "react";
import "moment-precise-range-plugin";
import { useTranslation } from "react-i18next";

//STYLES
import {
  flexCenter,
  flexColumnCenter,
} from "../../../resources/styles/helpers/mixins";
import styled from "styled-components/macro";
import { device } from "../../../resources/styles/helpers/breakpoints";

export const Countdown = ({
  days,
  hours,
  minutes,
  seconds,
}: countdownProps) => {
  const { t } = useTranslation();

  return (
    <>
      <StyledCountdown>
        <StyledElement>
          <h2>{("0" + days).slice(-2)}</h2>
          <h4>{t("countdownDays")}</h4>
        </StyledElement>
        <StyledColon as="h2">:</StyledColon>
        <StyledElement>
          <h2>{("0" + hours).slice(-2)}</h2>
          <h4>{t("countdownHours")}</h4>
        </StyledElement>
        <StyledColon as="h2">:</StyledColon>
        <StyledElement>
          <h2>{("0" + minutes).slice(-2)}</h2>
          <h4>{t("countdownMinutes")}</h4>
        </StyledElement>
        <StyledColon as="h2">:</StyledColon>
        <StyledElement>
          <h2>{("0" + seconds).slice(-2)}</h2>
          <h4>{t("countdownSeconds")}</h4>
        </StyledElement>
      </StyledCountdown>
    </>
  );
};

type countdownProps = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const StyledCountdown = styled(flexCenter)`
  justify-content: space-between;
  width: 100%;
`;

const StyledElement = styled(flexColumnCenter)`
  h2 {
    font-family: "Roboto", monospace;
    color: ${({ theme }) => theme.colors?.blue};
    font-size: 3rem;
    font-weight: 400;
  }

  h4 {
    color: ${({ theme }) => theme.colors?.fontPrimary};
    font-weight: 100;
    font-size: 0.6rem;
  }

  @media ${device.tablet} {
    h2 {
      font-size: 4rem;
    }
    h4 {
      font-size: 0.8rem;
    }
  }

  @media ${device.large} {
    h2 {
      font-size: 6rem;
    }
    h4 {
      font-size: 1rem;
    }
  }

  @media ${device.desktop} {
    h2 {
      font-size: 10rem;
    }

    h4 {
      font-size: 1rem;
    }
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
