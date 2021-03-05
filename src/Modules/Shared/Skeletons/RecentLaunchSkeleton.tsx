import React from "react";
import styled from "styled-components/macro";
import { flexColumnCenter } from "../../../resources/styles/helpers/mixins";

//COMPONENTS
import { Shimmer } from "./Shimmer/Shimmer";
import { SkeletonElement } from "./SkeletonElement";

export const RecentLaunchSkeleton = () => {
  return (
    <StyledSkeletonWrapper>
      <StyledRecentLaunchSkeleton>
        <SkeletonElement type="Avatar" />
        <SkeletonElement type="Title" />
        <SkeletonElement type="Text" />
        <SkeletonElement type="Title" />
      </StyledRecentLaunchSkeleton>
      <Shimmer />
    </StyledSkeletonWrapper>
  );
};

const StyledSkeletonWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  background-color: rgba(9, 9, 9, 0.2);
`;

const StyledRecentLaunchSkeleton = styled(flexColumnCenter)`
  justify-content: space-evenly;
  width: 240px;
  height: 350px;
`;
