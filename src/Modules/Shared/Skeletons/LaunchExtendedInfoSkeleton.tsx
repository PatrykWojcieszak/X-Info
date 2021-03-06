import React from "react";
import styled from "styled-components/macro";
import { device } from "../../../resources/styles/helpers/breakpoints";
import {
  flexColumn,
  flexColumnCenter,
} from "../../../resources/styles/helpers/mixins";

//COMPONENTS
import { Shimmer } from "./Shimmer/Shimmer";
import { SkeletonElement } from "./SkeletonElement";

export const LaunchExtendedInfoSkeleton = () => {
  return (
    <StyledSkeletonWrapper>
      <StyledLaunchExtendedInfoSkeleton>
        <StyledLeft>
          <SkeletonElement type="Avatar" />
          <SkeletonElement type="Title" />
        </StyledLeft>
        <StyledRight>
          <SkeletonElement type="Title" />
          <SkeletonElement type="Text" />
          <StyledDetails>
            <SkeletonElement type="Text" />
            <SkeletonElement type="Text" />
            <SkeletonElement type="Text" />
            <SkeletonElement type="Text" />
          </StyledDetails>
        </StyledRight>
      </StyledLaunchExtendedInfoSkeleton>
      <Shimmer />
    </StyledSkeletonWrapper>
  );
};

const StyledSkeletonWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  background-color: rgba(9, 9, 9, 0.2);
  width: 100%;
`;

const StyledLaunchExtendedInfoSkeleton = styled(flexColumnCenter)`
  height: 300px;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const StyledLeft = styled(flexColumnCenter)`
  justify-content: space-between;
  width: 300px;
`;

const StyledRight = styled(flexColumn)`
  width: 100%;
`;

const StyledDetails = styled.div`
  margin-top: 1rem;
  width: 70%;

  @media ${device.tablet} {
    width: 50%;
  }
`;
