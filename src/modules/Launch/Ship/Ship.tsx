import React from "react";

import styles from "./Ship.module.scss";
import shipImage from "../../../resources/images/ship.jpg";

const Ship = () => {
  return (
    <div className={styles.Ship}>
      <img src={shipImage} alt="ship" />
      <h3>
        NAME: <span>Just Read The Instructions 2</span>
      </h3>
    </div>
  );
};

export default Ship;
