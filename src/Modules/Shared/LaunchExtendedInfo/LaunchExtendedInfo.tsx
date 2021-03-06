import React from "react";
import { Link } from "react-router-dom";

//COMPONENTS
import { MainDetails } from "./MainDetails/MainDetails";
import { Failures } from "./Failures/Failures";
import { Patch } from "./Patch/Patch";

//TYPES
import { Launch } from "../../../Types";
import styled from "styled-components/macro";
import { device } from "../../../resources/styles/helpers/breakpoints";
import { flexColumnCenter } from "../../../resources/styles/helpers/mixins";

export const LaunchExtendedInfo = React.memo(
  ({ showMoreDetailsButton, launch }: LaunchExtendedInfoProps) => {
    return (
      <Link
        style={{ cursor: showMoreDetailsButton ? "pointer" : "default" }}
        to={showMoreDetailsButton ? `/launch/${launch.id}` : "#"}>
        <StyledLatestLaunch>
          <StyledLeftContainer>
            <Patch
              patchImg={launch.links.patch.small}
              showMoreDetailsButton={showMoreDetailsButton}
            />
          </StyledLeftContainer>
          <StyledRightContainer>
            <MainDetails
              launchName={launch.name}
              details={launch.details}
              flightNumber={launch.flight_number}
              launchSiteName={launch.launchpad.full_name}
              rocketName={launch.rocket.name}
              date_precision={launch.date_precision}
              date_utc={launch.date_utc}
              success={launch.success}
            />
            {!launch.success && launch.failures.length > 0 ? (
              <Failures failures={launch.failures} />
            ) : null}
          </StyledRightContainer>
        </StyledLatestLaunch>
      </Link>
    );
  }
);

type LaunchExtendedInfoProps = {
  showMoreDetailsButton: boolean;
  launch: Launch;
};

const StyledLatestLaunch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const StyledLeftContainer = styled(flexColumnCenter)`
  margin-right: 1.5rem;
  margin-bottom: 2rem;

  @media ${device.tablet} {
    margin-bottom: 0;
    justify-content: flex-start;
  }
`;

const StyledRightContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
`;
