import React from "react";

import styles from "./InfoLine.module.scss";

const InfoLine = ({ title, value }: infoLineProps) => {
  return (
    <div className={styles.InfoLine}>
      <h3 className={styles.Title}>{title}</h3>
      <h3 className={styles.Value}>{value}</h3>
    </div>
  );
};

type infoLineProps = {
  title: string;
  value: string;
};

export default React.memo(InfoLine);
