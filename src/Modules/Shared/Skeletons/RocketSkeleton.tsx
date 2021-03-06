import React from "react";
import styled from "styled-components/macro";
import { flexColumn } from "../../../resources/styles/helpers/mixins";

//COMPONENTS
import { Shimmer } from "./Shimmer/Shimmer";
import { SkeletonElement } from "./SkeletonElement";

export const RocketSkeleton = () => {
  return (
    <StyledSkeletonWrapper>
      <StyledRocketSkeleton>
        <StyledLeft>
          <SkeletonElement type="Box" />
        </StyledLeft>
        <StyledRight>
          <StyledInfoElement>
            <SkeletonElement type="Text" />
            <SkeletonElement type="Text" />
          </StyledInfoElement>
          <StyledInfoElement>
            <SkeletonElement type="Title" />
          </StyledInfoElement>
          <StyledInfoElement>
            <SkeletonElement type="Text" />
            <SkeletonElement type="Text" />
            <SkeletonElement type="Text" />
            <SkeletonElement type="Text" />
            <SkeletonElement type="Text" />
            <SkeletonElement type="Text" />
            <SkeletonElement type="Text" />
            <SkeletonElement type="Text" />
          </StyledInfoElement>
        </StyledRight>
      </StyledRocketSkeleton>
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

const StyledRocketSkeleton = styled.div`
  display: flex;
`;

const StyledLeft = styled.div`
  height: 700px;
  width: 300px;
`;

const StyledRight = styled(flexColumn)`
  width: 100%;
  margin-left: 5rem;
`;

const StyledInfoElement = styled.div`
  margin-bottom: 1.5rem;
`;
