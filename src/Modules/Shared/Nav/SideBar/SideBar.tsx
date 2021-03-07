import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

//COMPONENTS
import { NavElement } from "../NavElement/NavElement";
import { MenuToggle } from "./MenuToggle/MenuToggle";

//HOOKS
import { useDimensions } from "../../../../Hooks";
import { useClickOutside } from "../../../../Hooks";

import { sideBarAnim } from "../../../../Animations/Animations_motion";
import styled from "styled-components/macro";
import { AppRoute } from "../../../../Routing/AppRoute.enum";

export const SideBar = () => {
  const { t } = useTranslation();
  let location = useLocation();

  const [isOpen, toggleOpen] = useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const toggleOpenHandler = () => {
    if (isOpen) toggleOpen(!isOpen);
  };

  useEffect(() => {
    toggleOpen(false);
  }, [location]);

  const wrapperRef = useRef(null);
  useClickOutside(wrapperRef, toggleOpenHandler);

  return (
    <StyledBackground
      as={motion.div}
      isOpen={isOpen}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}>
      <StyledMenu as={motion.div} ref={wrapperRef} variants={sideBarAnim}>
        <MenuToggle toggle={() => toggleOpen(!isOpen)} />
        <NavElement
          name={t("homeNav")}
          link={AppRoute.home}
          exact={true}></NavElement>
        <NavElement
          name={t("launchesNav")}
          link={`${AppRoute.launches}/upcoming`}
          exact={true}></NavElement>
        <NavElement
          name={t("vehiclesNav")}
          link={AppRoute.vehicles}
          exact={true}></NavElement>
        <NavElement
          name={t("starlinkNav")}
          link={AppRoute.starlink}
          exact={true}></NavElement>
        <NavElement
          name={t("aboutNav")}
          link={AppRoute.about}
          exact={true}></NavElement>
      </StyledMenu>
    </StyledBackground>
  );
};

const StyledBackground = styled(motion.div)<{ isOpen: boolean }>`
  ${({ isOpen }) =>
    isOpen
      ? `width: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 500;
  height: 100%;
  position: fixed;`
      : null}
`;

const StyledMenu = styled(motion.div)`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors?.foreground};
  border-left: 1px solid $blue;
  justify-content: flex-start;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 200px;
  z-index: 995;
  padding-top: 5rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors?.blue};
    border-radius: 50%;
    cursor: pointer;
    position: absolute;
    top: 14px;
    right: 14px;
    width: 50px;
    height: 50px;
    z-index: 999;
    outline: none;
    border: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }
`;
