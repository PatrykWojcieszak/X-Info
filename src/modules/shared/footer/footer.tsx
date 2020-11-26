import React from "react";

import styles from "./footer.module.scss";

const footer = () => {
  return (
    <div className={styles.Footer}>
      <h3>Created by: </h3>
      <h2>Patryk Wojcieszak</h2>
      <h3> using </h3>
      <h2>SpaceX-Api</h2>
    </div>
  );
};

export default footer;
