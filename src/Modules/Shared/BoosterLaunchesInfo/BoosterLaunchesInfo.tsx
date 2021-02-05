import React from "react";

//COMPONENTS
import { Missions } from "./Missions/Missions";
import { Details } from "./Details/Details";

//STYLES
import styles from "./BoosterLaunchesInfo.module.scss";

//TYPES
import { Launch } from "../../../Types";

export const BoosterLaunchesInfo = ({
  serial,
  block,
  status,
  reuse_count,
  launches,
}: boostersType) => {
  return (
    <div className={styles.Booster}>
      <Details
        block={block}
        serial={serial}
        status={status}
        reuse_count={reuse_count}
        launches={launches}
      />
      <Missions missions={launches} />
    </div>
  );
};

type boostersType = {
  block: number;
  serial: string;
  status: string;
  reuse_count: number;
  launches: Launch[];
};
