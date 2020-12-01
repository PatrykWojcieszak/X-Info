import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavElement.module.scss";

const NavElement = ({ name, link, exact }: navElementProps) => {
  return (
    // <div className={styles.NavElement}>
    <NavLink
      to={link}
      exact={exact}
      className={styles.NavElement}
      // activeStyle={{ borderBottom: "1px solid blue" }}
      activeClassName={styles.NavElement__Active}>
      {name}
    </NavLink>
    // </div>
  );
};

type navElementProps = {
  name: string;
  link: string;
  exact: boolean;
};

export default NavElement;
