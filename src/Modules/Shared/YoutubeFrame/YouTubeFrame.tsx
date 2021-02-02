import React from "react";

export const YouTubeFrame = ({ url }: youTubeFrameProps) => {
  return (
    <iframe
      title="spacex video"
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${url}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen></iframe>
  );
};

type youTubeFrameProps = {
  url: string;
};
