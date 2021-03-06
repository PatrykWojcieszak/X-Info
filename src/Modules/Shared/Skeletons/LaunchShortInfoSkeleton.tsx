import React from "react";
import styled from "styled-components/macro";
import { flexColumn } from "../../../resources/styles/helpers/mixins";

//COMPONENTS
import { Shimmer } from "./Shimmer/Shimmer";
import { SkeletonElement } from "./SkeletonElement";

export const LaunchShortInfoSkeleton = () => {
  return (
    <StyledSkeletonWrapper>
      <StyledLaunchShortInfoSkeleton>
        <StyledRow>
          <SkeletonElement type="Title" />
          <SkeletonElement type="Title" />
          <SkeletonElement type="Title" />
        </StyledRow>
        <StyledRow style={{ width: "60%" }}>
          <SkeletonElement type="Text" />
          <SkeletonElement type="Text" />
        </StyledRow>
      </StyledLaunchShortInfoSkeleton>
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

const StyledLaunchShortInfoSkeleton = styled(flexColumn)`
  align-items: flex-start;
  justify-content: space-evenly;
  height: 160px;
  padding: 0.5rem;
`;

const StyledRow = styled.div`
  width: 100%;
  display: flex;
`;
