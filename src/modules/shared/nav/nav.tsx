import React from "react";

import NavElement from "./NavElement/NavElement";

import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <div className={styles.Nav}>
      <NavElement name="HOME" link="/home" exact={true}></NavElement>
      <NavElement name="LAUNCHES" link="/launches" exact={true}></NavElement>
      <NavElement name="VEHICLES" link="/" exact={true}></NavElement>
      <NavElement name="ABOUT" link="/" exact={true}></NavElement>
    </div>
  );
};

export default Nav;
