import React from "react";
import styled from "styled-components/macro";

//COMPONENTS
import { YouTubeFrame } from "../../Shared/YoutubeFrame/YouTubeFrame";

export const YouTube = ({ youtubeId }: youTubeProps) => {
  let yt = <></>;

  if (youtubeId)
    yt = (
      <StyledYoutubeContainer>
        <YouTubeFrame url={youtubeId} />
      </StyledYoutubeContainer>
    );

  return <>{yt}</>;
};

type youTubeProps = {
  youtubeId: string;
};

const StyledYoutubeContainer = styled.div`
  margin-top: 4rem;

  iframe {
    width: 100%;
    height: 800px;
    border-radius: 1rem;
  }
`;
