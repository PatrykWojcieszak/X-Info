import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React from "react";
import { sideBarAnim } from "../../../../Animations/Animations_motion";

import NavElement from "../NavElement/NavElement";

import styles from "./SideBar.module.scss";

const SideBar = ({ toggleSideBar }: sideBarProps) => {
  return (
    <motion.div onClick={toggleSideBar} className={styles.SideBar}>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={sideBarAnim}
        className={styles.Menu}>
        <FontAwesomeIcon icon="times" onClick={toggleSideBar} />
        <NavElement name="HOME" link="/home" exact={true}></NavElement>
        <NavElement
          name="LAUNCHES"
          link="/launches/upcoming"
          exact={true}></NavElement>
        <NavElement name="VEHICLES" link="/vehicles" exact={true}></NavElement>
        <NavElement name="STARLINK" link="/starlink" exact={true}></NavElement>
        <NavElement name="ABOUT" link="/about" exact={true}></NavElement>
      </motion.div>
    </motion.div>
  );
};

type sideBarProps = {
  toggleSideBar: () => void;
};

export default SideBar;
