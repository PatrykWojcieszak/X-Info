import React from "react";
import styled from "styled-components/macro";
import ReactPlayer from "react-player/youtube";

export const YouTube = ({ youtubeId }: youTubeProps) => {
  let yt = <></>;

  if (youtubeId)
    yt = (
      <StyledYoutubeContainer>
        <StyledReactPlayer
          controls
          width="100%"
          height="100%"
          url={`https://www.youtube.com/watch?v=${youtubeId}`}
        />
      </StyledYoutubeContainer>
    );

  return <>{yt}</>;
};

type youTubeProps = {
  youtubeId: string;
};

const StyledYoutubeContainer = styled.div`
  position: relative;
  padding-top: 56.25%;
`;

const StyledReactPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;
