import React from "react";

import styles from "./CrewPerson.module.scss";

const CrewPerson = ({ name, img, agency }: crewPersonProps) => {
  return (
    <div className={styles.CrewPerson}>
      <img src={img} alt="astronaut" loading="lazy" />
      <h3 className={styles.Name}>{name}</h3>
      <h3 className={styles.Agency}>{agency}</h3>
    </div>
  );
};

type crewPersonProps = {
  name: string;
  img: string;
  agency: string;
};

export default React.memo(CrewPerson);
