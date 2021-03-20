import React from "react";
import { Link } from "react-router-dom";

import { Flag } from "./Flag/Flag";
import styled from "styled-components/macro";
import { useTranslation } from "react-i18next";
import { device } from "../../../resources/styles/helpers/breakpoints";
import { Details } from "./Details/Details";
import { LaunchShortInfoProps } from "./LaunchShortInfo.types";

export const LaunchShortInfo = React.memo(
  ({ launch }: LaunchShortInfoProps) => {
    const { t } = useTranslation();
    let datePrec = "key";
    if (launch.date_precision === "month") datePrec = "keyMonth";

    return (
      <Link to={`/launch/${launch.id}`}>
        <StyledLaunchShortInfo>
          <StyledMissionName>{launch.name}</StyledMissionName>
          <StyledRow>
            <StyledDate>
              {t(datePrec, { date: new Date(launch.date_utc) })}
            </StyledDate>
            <StyledLaunchNumber>#{launch.flight_number}</StyledLaunchNumber>
          </StyledRow>
          <Details
            customers={launch.payloads[0]?.customers}
            success={launch.success}
            rocketName={launch.rocket.name}
            launchSiteName={launch.launchpad.full_name}
            upcoming={launch.upcoming}
            boosterLanded={launch.cores[0]?.landing_success}
            fairingRecovered={launch.fairings.recovered}
          />
          {launch.payloads[0]?.nationalities[0] && (
            <Flag nationality={launch.payloads[0]?.nationalities[0]} />
          )}
        </StyledLaunchShortInfo>
      </Link>
    );
  }
);

const StyledMissionName = styled.h2`
  font-size: 1.7rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors?.blue};
  margin-bottom: 0.4rem;
`;

const StyledText = styled.h4`
  font-weight: 300;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors?.fontSecondary};
`;

const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
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

const StyledLaunchShortInfo = styled.div`
  background-color: ${({ theme }) => theme.colors?.foreground};
  border-radius: 0.625rem;
  width: 100%;
  padding: 0.5rem;
  position: relative;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;

  &:hover {
    filter: brightness(125%);
  }
`;
