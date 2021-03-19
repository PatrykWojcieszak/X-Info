import React from "react";

//COMPONENTS
import { LaunchShortInfoSkeleton } from "../../Shared/Skeletons/LaunchShortInfoSkeleton";
import { NotFoundLaunches, LaunchShortInfo } from "../../Shared";

//STYLES
import { motion } from "framer-motion";
import { showLaunchesList } from "../../../Animations/Animations_motion";

//TYPES
import { Launch } from "../../../Types";
import { flexColumnCenter } from "../../../resources/styles/helpers/mixins";
import styled from "styled-components/macro";

export const UpcomingLaunches = ({
  launches,
  loading,
}: upcomingLaunchesProps) => {
  let upcomingLaunchesArr = (
    <>
      {[1, 2, 3, 4, 5].map((n) => (
        <LaunchShortInfoSkeleton key={n} />
      ))}
    </>
  );

  if (!loading) {
    upcomingLaunchesArr = (
      <>
        {launches.map((launch) => (
          <LaunchShortInfo key={launch.id} launch={launch} />
        ))}
      </>
    );
  }

  if (launches.length === 0) upcomingLaunchesArr = <NotFoundLaunches />;

  return (
    <>
      <StyledLaunchesWrapper
        as={motion.div}
        variants={showLaunchesList}
        initial="initial"
        animate="in"
        exit="out">
        {upcomingLaunchesArr}
      </StyledLaunchesWrapper>
    </>
  );
};

type upcomingLaunchesProps = {
  launches: Launch[];
  loading: boolean;
};

const StyledLaunchesWrapper = styled(flexColumnCenter)`
  width: 100%;
  position: relative;

  > * {
    margin: 1rem 0;
    width: 100%;
  }
`;
