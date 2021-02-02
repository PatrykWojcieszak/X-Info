import React from "react";
import { NavLink } from "react-router-dom";

//STYLES
import styles from "./NavElement.module.scss";

export const NavElement = React.memo(
  ({ name, link, exact }: navElementProps) => {
    return (
      <NavLink
        to={link}
        exact={exact}
        className={styles.NavElement}
        activeClassName={styles.NavElement__Active}>
        {name}
      </NavLink>
    );
  }
);

type navElementProps = {
  name: string;
  link: string;
  exact: boolean;
};
