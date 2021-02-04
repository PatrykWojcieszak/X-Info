import React from "react";

//COMPONENTS
import { CrewPerson } from "./CrewPerson/CrewPerson";

//STYLES
import styles from "./CrewList.module.scss";

//TYPeS
import { Crew } from "../../../Types";

export const CrewList = ({ crewList }: crewListProps) => {
  let crewListArr = <></>;

  if (crewList.length > 0)
    crewListArr = (
      <div className={styles.CrewList}>
        <h2>CREW</h2>
        <div className={styles.Content}>
          {crewList.map((crew: any, index) => (
            <CrewPerson
              key={index}
              name={crew.crew.name}
              img={crew.crew.image}
              agency={crew.crew.agency}
            />
          ))}
        </div>
      </div>
    );

  return <>{crewListArr}</>;
};

type crewListProps = {
  crewList: Crew[];
};
