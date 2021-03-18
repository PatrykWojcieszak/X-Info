import React from "react";
import styled from "styled-components/macro";
import ReactPlayer from "react-player/youtube";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LivestreamProps } from "./Livestream.types";
import { device } from "../../../../resources/styles/helpers/breakpoints";

export const Livestream = ({ showHandler }: LivestreamProps) => {
  return (
    <StyledLivestream>
      <StyledPlayerWrapper>
        <StyledCloseBtn icon="times" onClick={showHandler} />
        <StyledReactPlayer
          controls
          width="100%"
          height="100%"
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        />
      </StyledPlayerWrapper>
    </StyledLivestream>
  );
};

const StyledLivestream = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 999;
  left: 0;
  top: 0;
`;

const StyledCloseBtn = styled(FontAwesomeIcon)`
  position: absolute;
  top: -45px;
  cursor: pointer;
  left: 10px;
  font-size: 2rem;
  z-index: 1000;
  color: ${({ theme }) => theme.colors?.red};
`;

const StyledPlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media ${device.desktop} {
    top: 0;
    left: 0;
    transform: none;
    margin-top: 120px;
  }
`;

const StyledReactPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
  max-height: 768px;
`;
