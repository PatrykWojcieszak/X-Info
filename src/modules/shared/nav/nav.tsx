import React from "react";

import NavElement from "./NavElement/NavElement";

import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <div className={styles.Nav}>
      <NavElement name="HOME"></NavElement>
      <NavElement name="LAUNCHES"></NavElement>
      <NavElement name="VEHICLES"></NavElement>
      <NavElement name="ABOUT"></NavElement>
    </div>
  );
};

export default Nav;
