import React from "react";

//STYLES
import styles from "./CrewPerson.module.scss";

export const CrewPerson = React.memo(
  ({ name, img, agency }: crewPersonProps) => {
    // console.log(name);
    // console.log(img);
    // console.log(agency);
    return (
      <div className={styles.CrewPerson}>
        <img src={img} alt="astronaut" loading="lazy" />
        <h3 className={styles.Name}>{name}</h3>
        <h3 className={styles.Agency}>{agency}</h3>
      </div>
    );
  }
);

type crewPersonProps = {
  name: string;
  img: string;
  agency: string;
};
