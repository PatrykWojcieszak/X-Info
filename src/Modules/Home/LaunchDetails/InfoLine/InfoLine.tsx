import React from "react";

//STYLES
import styles from "./InfoLine.module.scss";

export const InfoLine = React.memo(({ title, value }: infoLineProps) => {
  return (
    <div className={styles.InfoWrapper}>
      <div className={styles.Title}>
        <h3>{title}:</h3>
      </div>
      <div className={styles.Value}>
        <h3>{value}</h3>
      </div>
    </div>
  );
});

type infoLineProps = {
  title: string;
  value: string;
};
