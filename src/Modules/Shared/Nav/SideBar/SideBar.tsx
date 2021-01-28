import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

//COMPONENTS
import NavElement from "../NavElement/NavElement";
import { MenuToggle } from "./MenuToggle/MenuToggle";

//HOOKS
import { useDimensions } from "../../../../Hooks";
import { useClickOutside } from "../../../../Hooks";

//STYLES
import styles from "./SideBar.module.scss";
import { sideBarAnim } from "../../../../Animations/Animations_motion";

export const SideBar = () => {
  const [isOpen, toggleOpen] = useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const { t } = useTranslation();

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
        <NavElement name={t("homeNav")} link="/home" exact={true}></NavElement>
        <NavElement
          name={t("launchesNav")}
          link="/launches/upcoming"
          exact={true}></NavElement>
        <NavElement
          name={t("vehiclesNav")}
          link="/vehicles"
          exact={true}></NavElement>
        <NavElement
          name={t("starlinkNav")}
          link="/starlink"
          exact={true}></NavElement>
        <NavElement
          name={t("aboutNav")}
          link="/about"
          exact={true}></NavElement>
      </motion.div>
    </motion.div>
  );
};
