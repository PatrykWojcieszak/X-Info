import React from "react";

import NavElement from "./navElement/navElement";

import styles from './nav.module.scss';

const nav = () => {
  return (
    <div className={styles.Nav}>
      <NavElement name="HOME"></NavElement>
      <NavElement name="LAUNCHES"></NavElement>
      <NavElement name="VEHICLES"></NavElement>
      <NavElement name="ABOUT"></NavElement>
    </div>
  );
};

export default nav;
