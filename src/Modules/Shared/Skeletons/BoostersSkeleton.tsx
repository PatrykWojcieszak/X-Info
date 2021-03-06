import React from "react";
import styled from "styled-components/macro";
import { device } from "../../../resources/styles/helpers/breakpoints";
import { flexColumn } from "../../../resources/styles/helpers/mixins";

//COMPONENTS
import { Shimmer } from "./Shimmer/Shimmer";
import { SkeletonElement } from "./SkeletonElement";

export const BoostersSkeleton = () => {
  return (
    <StyledSkeletonWrapper>
      <StyledBoosterSkeleton>
        <StyledLeft>
          <div>
            <SkeletonElement type="Title" />
            <SkeletonElement type="Title" />
          </div>
          <div>
            <SkeletonElement type="Title" />
            <SkeletonElement type="Title" />
          </div>
        </StyledLeft>
        <StyledRight>
          <SkeletonElement type="Title" />
          <SkeletonElement type="Text" />
          <SkeletonElement type="Text" />
          <SkeletonElement type="Text" />
        </StyledRight>
      </StyledBoosterSkeleton>
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

const StyledBoosterSkeleton = styled(flexColumn)`
  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const StyledLeft = styled.div`
  display: flex;

  > * {
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

const StyledRight = styled.div`
  width: 100%;
`;
