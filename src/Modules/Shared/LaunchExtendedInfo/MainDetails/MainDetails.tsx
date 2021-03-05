import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components/macro";
import { device } from "../../../../resources/styles/helpers/breakpoints";

export const MainDetails = ({
  launchName,
  details,
  flightNumber,
  launchSiteName,
  rocketName,
  date_utc,
  success,
  date_precision,
}: mainDetailsProps) => {
  const { t } = useTranslation();

  let launch = success ? t("launchSuccessful") : t("launchFailure");

  if (
    new Date(date_utc) > new Date() ||
    ["quarter", "half", "year", "month"].includes(date_precision)
  )
    launch = t("launchNotLaunchedYet");

  let datePrec = "key";
  if (date_precision === "month") datePrec = "keyMonth";

  return (
    <StyledMainDetailsContainer>
      <h2>{launchName}</h2>
      <p>{details} </p>
      <StyledLaunchNumber>#{flightNumber}</StyledLaunchNumber>
      <StyledDetailsWrapper>
        <StyledTitlesContainer>
          {launchSiteName && <h4>{t("launchSite")}:</h4>}
          {rocketName && <h4>{t("rocket")}:</h4>}
          {date_utc && <h4>{t("date")}:</h4>}
          {success !== null && <h4>{t("launch")}:</h4>}
        </StyledTitlesContainer>
        <StyledValuesContainer>
          {launchSiteName && <h4>{launchSiteName}</h4>}
          {rocketName && <h4>{rocketName}</h4>}
          {date_utc && <h4>{t(datePrec, { date: new Date(date_utc) })}</h4>}
          {success !== null && (
            <h4 style={{ color: success ? "#4BB543" : "#FA113D" }}>{launch}</h4>
          )}
        </StyledValuesContainer>
      </StyledDetailsWrapper>
    </StyledMainDetailsContainer>
  );
};

type mainDetailsProps = {
  launchName: string;
  details: string;
  flightNumber: number;
  launchSiteName: string;
  rocketName: string;
  date_utc: string;
  success: boolean;
  date_precision: string;
};

const StyledMainDetailsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors?.foreground};
  border-radius: 0.8rem;
  padding: 1rem;
  position: relative;

  h2,
  h4,
  p {
    font-weight: 100;
  }

  p {
    max-width: 90%;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors?.fontSecondary};
  }

  h2 {
    color: ${({ theme }) => theme.colors?.blue};
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  @media ${device.tablet} {
    h2 {
      font-size: 3rem;
    }

    p {
      max-width: 80%;
      font-size: 1.1rem;
    }
  }
`;

const StyledLaunchNumber = styled.h4`
  position: absolute;
  right: 1rem;
  top: 1rem;
  color: ${({ theme }) => theme.colors?.fontSecondary};
  font-weight: 100;
  font-size: 1.2rem;

  @media ${device.tablet} {
    font-size: 2rem;
  }
`;

const StyledDetailsWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const StyledTitlesContainer = styled.div`
  margin-right: 1rem;

  h4 {
    color: ${({ theme }) => theme.colors?.fontSecondary};
    margin-top: 0.5rem;
    font-size: 0.8rem;
  }

  @media ${device.tablet} {
    h4 {
      font-size: 1rem;
    }
  }
`;

const StyledValuesContainer = styled.div`
  h4 {
    color: ${({ theme }) => theme.colors?.fontPrimary};
    font-weight: 300;
    margin-top: 0.5rem;
    font-size: 0.8rem;
  }

  @media ${device.tablet} {
    h4 {
      font-size: 1rem;
    }
  }
`;
