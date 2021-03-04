import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components/macro";
import { device } from "../../../../resources/styles/helpers/breakpoints";
import {
  flexCenter,
  flexColumn,
} from "../../../../resources/styles/helpers/mixins";

export const MainDetails = ({
  launchName,
  launchDateUtc,
  rocketName,
  success,
  flightNumber,
  datePrecision,
}: mainDetails) => {
  const { t } = useTranslation();

  let datePrec = "key";
  if (datePrecision === "month") datePrec = "keyMonth";

  return (
    <StyledMainDetails as="div">
      <StyledNameDate>
        <h2>{launchName}</h2>
        <h4>{t(datePrec, { date: new Date(launchDateUtc) })}</h4>
      </StyledNameDate>
      <StyledColumn>
        <StyledRow>
          <h4>{t("rocket")}: </h4>
          <h3>{rocketName}</h3>
        </StyledRow>
        {success !== null && success !== undefined ? (
          <StyledRow>
            <h4>{t("launch")}: </h4>
            <h3 style={{ color: success ? "#4BB543" : "#FA113D" }}>
              {success ? t("launchSuccessful") : t("launchFailure")}
            </h3>
          </StyledRow>
        ) : null}
      </StyledColumn>
      <StyledLaunchNumber>#{flightNumber}</StyledLaunchNumber>
    </StyledMainDetails>
  );
};

type mainDetails = {
  launchName: string;
  launchDateUtc: string;
  rocketName: string;
  success?: boolean;
  flightNumber: number;
  datePrecision: string;
};

const StyledMainDetails = styled(flexCenter)`
  flex-direction: column;
  align-items: flex-start;

  @media ${device.large} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StyledNameDate = styled(flexColumn)`
  align-items: flex-start;
  margin-bottom: 0.7rem;
  max-width: 90%;
  min-width: 90%;

  h2 {
    font-size: 1.8rem;
    font-weight: 100;
    color: ${({ theme }) => theme.colors?.blue};
  }

  h4 {
    font-weight: 100;
    font-size: 0.7rem;
    color: ${({ theme }) => theme.colors?.fontSecondary};
  }

  @media ${device.large} {
    margin-bottom: 0.7rem;
    max-width: 60%;
    min-width: 60%;
  }

  @media ${device.desktop} {
    min-width: 50%;
    max-width: 50%;

    h2 {
      font-size: 2.8rem;
    }

    h4 {
      font-size: 1rem;
      margin-top: 0.3rem;
    }
  }
`;

const StyledColumn = styled(flexColumn)`
  align-items: flex-start;
  min-width: 245px;
`;

const StyledRow = styled(flexCenter)`
  margin: 0.5rem 0;
  font-size: 0.9rem;

  h4 {
    font-weight: 100;
    color: ${({ theme }) => theme.colors?.fontSecondary};
  }

  h3 {
    margin-left: 0.6rem;
    color: ${({ theme }) => theme.colors?.fontPrimary};
  }

  @media ${device.large} {
    font-size: 1.2rem;
  }

  @media ${device.desktop} {
    font-size: 1.3rem;
  }
`;

const StyledLaunchNumber = styled.h4`
  color: ${({ theme }) => theme.colors?.fontSecondary};
  font-weight: 100;
  font-size: 0.9rem;

  @media ${device.large} {
    font-size: 1.2rem;
  }

  @media ${device.desktop} {
    font-size: 2rem;
  }
`;
