import React from "react";

//COMPONENTS
import { Shimmer } from "./Shimmer/Shimmer";
import { SkeletonElement } from "./SkeletonElement";
import { LaunchExtendedInfoSkeleton } from "./LaunchExtendedInfoSkeleton";

import styled from "styled-components/macro";
import { flexColumn } from "../../../resources/styles/helpers/mixins";

export const LaunchSkeleton = () => {
  return (
    <StyledSkeletonWrapper>
      <StyledLaunchSkeleton>
        <LaunchExtendedInfoSkeleton />
        <StyledRow>
          <StyledLeft>
            <SkeletonElement type="Box" />
          </StyledLeft>
          <StyledRight>
            <StyledInfoWrapper>
              <SkeletonElement type="Title" />
              <SkeletonElement type="Text" />
              <SkeletonElement type="Text" />
              <SkeletonElement type="Text" />
            </StyledInfoWrapper>
            <StyledInfoWrapper>
              <SkeletonElement type="Title" />
              <SkeletonElement type="Text" />
              <SkeletonElement type="Text" />
              <SkeletonElement type="Text" />
              <SkeletonElement type="Text" />
              <SkeletonElement type="Text" />
            </StyledInfoWrapper>
          </StyledRight>
        </StyledRow>
      </StyledLaunchSkeleton>
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

const StyledLaunchSkeleton = styled(flexColumn)`
  margin-bottom: 3rem;
`;

const StyledRow = styled.div`
  display: flex;
  height: 700px;
  margin-top: 3rem;
`;

const StyledLeft = styled.div`
  width: 200px;
`;

const StyledRight = styled.div`
  width: 100%;
  margin-left: 4rem;
`;

const StyledInfoWrapper = styled(flexColumn)`
  margin-top: 2rem;
`;
