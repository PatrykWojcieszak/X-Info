import React from "react";

//STYLES
import styles from "./InfoLine.module.scss";

export const InfoLine = React.memo(({ title, value }: infoLineProps) => {
  return (
    <div className={styles.InfoLine}>
      <h3 className={styles.Title}>{title}</h3>
      <h3 className={styles.Value}>{value}</h3>
    </div>
  );
});

type infoLineProps = {
  title: string;
  value: string;
};
