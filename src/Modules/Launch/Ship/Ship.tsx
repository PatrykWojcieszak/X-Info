import React from "react";

import styles from "./Ship.module.scss";

const Ship = ({ name, img }: shipProps) => {
  return (
    <div className={styles.Ship}>
      <img src={img} alt="ship" loading="lazy" />
      <h3>
        NAME: <span>{name}</span>
      </h3>
    </div>
  );
};

type shipProps = {
  name: string;
  img: string;
};

export default React.memo(Ship);
