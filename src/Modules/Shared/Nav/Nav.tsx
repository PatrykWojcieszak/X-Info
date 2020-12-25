import React from "react";

import NavElement from "./NavElement/NavElement";

import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <div className={styles.Nav}>
      <NavElement name="HOME" link="/home" exact={true}></NavElement>
      <NavElement
        name="LAUNCHES"
        link="/launches/upcoming"
        exact={true}></NavElement>
      <NavElement name="VEHICLES" link="/vehicles" exact={true}></NavElement>
      <NavElement name="STARLINK" link="/starlink" exact={true}></NavElement>
      <NavElement name="ABOUT" link="/about" exact={true}></NavElement>
    </div>
  );
};

export default Nav;
