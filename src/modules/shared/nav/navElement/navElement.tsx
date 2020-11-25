import React from "react";

import styles from './navElement.module.scss';

const navElement = ({name}: navElementProps) => {
  return (
    <div className={styles.NavElement}>
      <h4>{name}</h4>
    </div>
  );
};

type navElementProps = {
    name: string,
}

export default navElement;
