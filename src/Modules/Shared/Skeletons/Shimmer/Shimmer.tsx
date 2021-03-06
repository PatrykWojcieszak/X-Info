import React from "react";
import styled, { keyframes } from "styled-components/macro";

export const Shimmer = () => {
  return (
    <StyledShimmerWrapper>
      <StyledShimmer></StyledShimmer>
    </StyledShimmerWrapper>
  );
};

const ShimmerAnim = keyframes`
  0% {
    transform: translateX(-150%);
  }
  50% {
    transform: translateX(-60%);
  }
  100% {
    transform: translateX(150%);
  }
`;

const StyledShimmerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: ${ShimmerAnim} 2.5s infinite;
`;

const StyledShimmer = styled.div`
  width: 50%;
  height: 100%;
  background-color: rgba(9, 9, 9, 0.1);
  transform: skewX(-20deg);
  box-shadow: 0 0 50px 50px rgba(9, 9, 9, 0.05);
`;
