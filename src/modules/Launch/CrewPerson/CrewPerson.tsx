import React from "react";

import styles from "./CrewPerson.module.scss";
import crewPersnImg from "../../../resources/images/crewPerson.jpg";

const CrewPerson = () => {
  return (
    <div className={styles.CrewPerson}>
      <img src={crewPersnImg} alt="astronaut" />
      <h3 className={styles.Name}>Soichi Nogouchi</h3>
      <h3 className={styles.Agency}>NASA/JAXA</h3>
    </div>
  );
};

export default CrewPerson;
