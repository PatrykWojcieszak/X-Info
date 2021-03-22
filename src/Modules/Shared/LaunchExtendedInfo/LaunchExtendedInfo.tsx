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
          <Patch
            patchImg={launch.links.patch.small}
            showMoreDetailsButton={showMoreDetailsButton}
          />
          <StyledRightContainer>
            <MainDetails launch={launch} />
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

const StyledLatestLaunch = styled(flexColumnCenter)`
  @media ${device.tablet} {
    align-items: flex-start;
    flex-direction: row;
  }
`;

const StyledRightContainer = styled.div`
  width: 100%;
`;
