import React from "react";

//COMPONENTS
import { YouTubeFrame } from "../../Shared/YoutubeFrame/YouTubeFrame";

//STYLES
import styles from "./YouTube.module.scss";

export const YouTube = ({ youtubeId }: youTubeProps) => {
  let yt = <></>;

  if (youtubeId)
    yt = (
      <div className={styles.YoutubeContainer}>
        <YouTubeFrame url={youtubeId} />
      </div>
    );

  return <>{yt}</>;
};

type youTubeProps = {
  youtubeId: string;
};
