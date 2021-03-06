import React from "react";
import { Link } from "react-router-dom";

//COMPONENTS
import { SecondaryDetails } from "./SecondaryDetails/SecondaryDetails";
import { MainDetails } from "./MainDetails/MainDetails";

//OTHER
import { Flag } from "./Flag/Flag";
import styled from "styled-components/macro";

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
    return (
      <Link to={`/launch/${id}`}>
        <StyledLaunchShortInfo>
          <MainDetails
            launchName={launchName}
            rocketName={rocketName}
            flightNumber={flightNumber}
            success={success}
            launchDateUtc={launchDateUtc}
            datePrecision={datePrecision}
          />
          <SecondaryDetails
            launchSiteName={launchSiteName}
            customers={customers}
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

const StyledLaunchShortInfo = styled.div`
  background-color: ${({ theme }) => theme.colors?.foreground};
  border-radius: 0.6rem;
  width: 100%;
  padding: 0.5rem;
  position: relative;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors?.dark};
  }
`;
