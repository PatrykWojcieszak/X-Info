import React from "react";

import styles from "./footer.module.scss";

const footer = () => {
  return (
    <div className={styles.Footer}>
      <h3 className={styles.Title}>Created by: </h3>
      <h3 className={styles.Value}>Patryk Wojcieszak</h3>
      <h3 className={styles.Title}> using </h3>
      <h3 className={styles.Value}>SpaceX-Api</h3>
    </div>
  );
};

export default footer;
