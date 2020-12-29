import React, { useRef } from "react";
import { motion, useCycle } from "framer-motion";

//COMPONENTS
import NavElement from "../NavElement/NavElement";
import { MenuToggle } from "./MenuToggle/MenuToggle";

//HOOKS
import { useDimensions } from "../../../../Hooks/useDimmensions";
import { useClickOutside } from "../../../../Hooks/useClickOutside";

//STYLES
import styles from "./SideBar.module.scss";

//ANIM
import { sideBarAnim } from "../../../../Animations/Animations_motion";

const SideBar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const bgStyles: string[] = [];

  if (isOpen) bgStyles.push(styles.Background);

  const toggleOpenHandler = () => {
    toggleOpen();
  };
  const wrapperRef = useRef(null);
  useClickOutside(wrapperRef, toggleOpen);

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
        <MenuToggle toggle={toggleOpenHandler} />
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
