import React from "react";
import styled, { keyframes } from "styled-components/macro";

export const Spinner = () => {
  return <StyledSpinner>Loading...</StyledSpinner>;
};

const StyledAnimation = keyframes`
0%,
  100% {
    box-shadow: 0em -2.6em 0em 0em #005288,
      1.8em -1.8em 0 0em rgba(0, 82, 136, 0.2),
      2.5em 0em 0 0em rgba(0, 82, 136, 0.2),
      1.75em 1.75em 0 0em rgba(0, 82, 136, 0.2),
      0em 2.5em 0 0em rgba(0, 82, 136, 0.2),
      -1.8em 1.8em 0 0em rgba(0, 82, 136, 0.2),
      -2.6em 0em 0 0em rgba(0, 82, 136, 0.5),
      -1.8em -1.8em 0 0em rgba(0, 82, 136, 0.7);
  }
  12.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(0, 82, 136, 0.7),
      1.8em -1.8em 0 0em #005288, 2.5em 0em 0 0em rgba(0, 82, 136, 0.2),
      1.75em 1.75em 0 0em rgba(0, 82, 136, 0.2),
      0em 2.5em 0 0em rgba(0, 82, 136, 0.2),
      -1.8em 1.8em 0 0em rgba(0, 82, 136, 0.2),
      -2.6em 0em 0 0em rgba(0, 82, 136, 0.2),
      -1.8em -1.8em 0 0em rgba(0, 82, 136, 0.5);
  }
  25% {
    box-shadow: 0em -2.6em 0em 0em rgba(0, 82, 136, 0.5),
      1.8em -1.8em 0 0em rgba(0, 82, 136, 0.7), 2.5em 0em 0 0em #005288,
      1.75em 1.75em 0 0em rgba(0, 82, 136, 0.2),
      0em 2.5em 0 0em rgba(0, 82, 136, 0.2),
      -1.8em 1.8em 0 0em rgba(0, 82, 136, 0.2),
      -2.6em 0em 0 0em rgba(0, 82, 136, 0.2),
      -1.8em -1.8em 0 0em rgba(0, 82, 136, 0.2);
  }
  37.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(0, 82, 136, 0.2),
      1.8em -1.8em 0 0em rgba(0, 82, 136, 0.5),
      2.5em 0em 0 0em rgba(0, 82, 136, 0.7), 1.75em 1.75em 0 0em #005288,
      0em 2.5em 0 0em rgba(0, 82, 136, 0.2),
      -1.8em 1.8em 0 0em rgba(0, 82, 136, 0.2),
      -2.6em 0em 0 0em rgba(0, 82, 136, 0.2),
      -1.8em -1.8em 0 0em rgba(0, 82, 136, 0.2);
  }
  50% {
    box-shadow: 0em -2.6em 0em 0em rgba(0, 82, 136, 0.2),
      1.8em -1.8em 0 0em rgba(0, 82, 136, 0.2),
      2.5em 0em 0 0em rgba(0, 82, 136, 0.5),
      1.75em 1.75em 0 0em rgba(0, 82, 136, 0.7), 0em 2.5em 0 0em #005288,
      -1.8em 1.8em 0 0em rgba(0, 82, 136, 0.2),
      -2.6em 0em 0 0em rgba(0, 82, 136, 0.2),
      -1.8em -1.8em 0 0em rgba(0, 82, 136, 0.2);
  }
  62.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(0, 82, 136, 0.2),
      1.8em -1.8em 0 0em rgba(0, 82, 136, 0.2),
      2.5em 0em 0 0em rgba(0, 82, 136, 0.2),
      1.75em 1.75em 0 0em rgba(0, 82, 136, 0.5),
      0em 2.5em 0 0em rgba(0, 82, 136, 0.7), -1.8em 1.8em 0 0em #005288,
      -2.6em 0em 0 0em rgba(0, 82, 136, 0.2),
      -1.8em -1.8em 0 0em rgba(0, 82, 136, 0.2);
  }
  75% {
    box-shadow: 0em -2.6em 0em 0em rgba(0, 82, 136, 0.2),
      1.8em -1.8em 0 0em rgba(0, 82, 136, 0.2),
      2.5em 0em 0 0em rgba(0, 82, 136, 0.2),
      1.75em 1.75em 0 0em rgba(0, 82, 136, 0.2),
      0em 2.5em 0 0em rgba(0, 82, 136, 0.5),
      -1.8em 1.8em 0 0em rgba(0, 82, 136, 0.7), -2.6em 0em 0 0em #005288,
      -1.8em -1.8em 0 0em rgba(0, 82, 136, 0.2);
  }
  87.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(0, 82, 136, 0.2),
      1.8em -1.8em 0 0em rgba(0, 82, 136, 0.2),
      2.5em 0em 0 0em rgba(0, 82, 136, 0.2),
      1.75em 1.75em 0 0em rgba(0, 82, 136, 0.2),
      0em 2.5em 0 0em rgba(0, 82, 136, 0.2),
      -1.8em 1.8em 0 0em rgba(0, 82, 136, 0.5),
      -2.6em 0em 0 0em rgba(0, 82, 136, 0.7), -1.8em -1.8em 0 0em #005288;
  }
`;

const StyledSpinner = styled.div`
  margin: auto;
  font-size: 25px;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  animation: ${StyledAnimation} 1.1s infinite ease;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  z-index: 999;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;
