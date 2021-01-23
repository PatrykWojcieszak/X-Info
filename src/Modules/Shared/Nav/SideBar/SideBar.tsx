import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

//COMPONENTS
import NavElement from "../NavElement/NavElement";
import { MenuToggle } from "./MenuToggle/MenuToggle";

//HOOKS
import { useDimensions } from "../../../../Hooks";
import { useClickOutside } from "../../../../Hooks";

//STYLES
import styles from "./SideBar.module.scss";

//ANIM
import { sideBarAnim } from "../../../../Animations/Animations_motion";

const SideBar = () => {
  const [isOpen, toggleOpen] = useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const bgStyles: string[] = [];
  let location = useLocation();

  if (isOpen) bgStyles.push(styles.Background);

  const toggleOpenHandler = () => {
    if (isOpen) toggleOpen(!isOpen);
  };

  useEffect(() => {
    toggleOpen(false);
  }, [location]);

  const wrapperRef = useRef(null);
  useClickOutside(wrapperRef, toggleOpenHandler);

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className={bgStyles.join(" ")}>
      <motion.div
        ref={wrapperRef}
        variants={sideBarAnim}
        className={styles.Menu}>
        <MenuToggle toggle={() => toggleOpen(!isOpen)} />
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

export default SideBar;
