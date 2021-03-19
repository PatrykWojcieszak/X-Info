import React from "react";
import { Link } from "react-router-dom";

import { Flag } from "./Flag/Flag";
import styled from "styled-components/macro";
import { useTranslation } from "react-i18next";
import { device } from "../../../resources/styles/helpers/breakpoints";
import { Details } from "./Details/Details";

export const LaunchShortInfo = React.memo(
  ({
    launchName,
    launchDateUtc,
    rocketName,
    launchSiteName,
    customers,
    flightNumber,
    success,
    nationality,
    datePrecision,
    id,
  }: launchShortInfoProps) => {
    const { t } = useTranslation();
    let datePrec = "key";
    if (datePrecision === "month") datePrec = "keyMonth";

    return (
      <Link to={`/launch/${id}`}>
        <StyledLaunchShortInfo>
          <StyledMissionName>{launchName}</StyledMissionName>
          <StyledRow>
            <StyledDate>
              {t(datePrec, { date: new Date(launchDateUtc) })}
            </StyledDate>
            <StyledLaunchNumber>#{flightNumber}</StyledLaunchNumber>
          </StyledRow>
          <Details
            customers={customers}
            success={success}
            rocketName={rocketName}
            launchSiteName={launchSiteName}
          />
          {nationality && <Flag nationality={nationality} />}
        </StyledLaunchShortInfo>
      </Link>
    );
  }
);

type launchShortInfoProps = {
  launchName: string;
  launchDateUtc: string;
  rocketName: string;
  launchSiteName: string;
  customers: string[];
  flightNumber: number;
  success?: boolean;
  nationality: string;
  datePrecision: string;
  id: string;
};

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
    background-color: ${({ theme }) => theme.colors?.dark};
  }
`;
