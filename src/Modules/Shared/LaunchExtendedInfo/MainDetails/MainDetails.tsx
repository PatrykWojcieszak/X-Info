import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components/macro";
import { device } from "../../../../resources/styles/helpers/breakpoints";
import { Details } from "./Details/Details";
import { MainDetailsProps } from "./MainDetails.types";

export const MainDetails = ({ launch }: MainDetailsProps) => {
  const { t } = useTranslation();

  let datePrec = "key";
  if (launch.date_precision === "month") datePrec = "keyMonth";

  return (
    <StyledMainDetailsContainer>
      <StyledMissionName>{launch.name}</StyledMissionName>
      <StyledRow>
        <StyledDate>
          {t(datePrec, { date: new Date(launch.date_utc) })}
        </StyledDate>
        <StyledLaunchNumber>#{launch.flight_number}</StyledLaunchNumber>
      </StyledRow>
      <StyledMissionDescription>{launch.details} </StyledMissionDescription>
      <Details
        rocketName={launch.rocket.name}
        launchSiteName={launch.launchpad.full_name}
        fairingsRecovered={launch.fairings?.recovered}
        boosterLanded={launch.cores[0]?.landing_success}
        missionSuccessful={launch.success}
        missionBeforeLaunch={launch.upcoming}
      />
    </StyledMainDetailsContainer>
  );
};

const StyledMainDetailsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors?.foreground};
  border-radius: 0.8rem;
  padding: 1rem;
  position: relative;
`;

const StyledMissionName = styled.h2`
  color: ${({ theme }) => theme.colors?.blue};
  font-size: 1.75rem;
  font-weight: 300;
  text-align: left;
  margin-bottom: 0.5rem;

  @media ${device.tablet} {
    font-size: 2.5rem;
  }
`;

const StyledRow = styled.div`
  color: ${({ theme }) => theme.colors?.fontSecondary};
  display: flex;
  justify-content: space-between;
`;

const StyledText = styled.h4`
  font-weight: 300;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors?.fontSecondary};
`;

const StyledDate = styled(StyledText)``;

const StyledLaunchNumber = styled(StyledText)`
  @media ${device.mobile} {
    font-size: 1.7rem;
    position: absolute;
    top: 15px;
    right: 15px;
  }
`;

const StyledMissionDescription = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors?.fontSecondary};

  @media ${device.tablet} {
    max-width: 80%;
    font-size: 1rem;
  }
`;
