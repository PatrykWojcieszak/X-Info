import React from "react";

import styles from "./NavElement.module.scss";

const NavElement = ({ name }: navElementProps) => {
  return (
    <div className={styles.NavElement}>
      <h4>{name}</h4>
    </div>
  );
};

type navElementProps = {
  name: string;
};

export default NavElement;
