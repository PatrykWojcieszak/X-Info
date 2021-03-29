import React from "react";
import { useTranslation } from "react-i18next";

//COMPONENTS
import { NavElement } from "./NavElement/NavElement";

import styled from "styled-components/macro";
import { AppRoute } from "../../../Routing/AppRoute.enum";
import { useMediaQuery } from "../../../Hooks";
import { SideBar } from "./SideBar/SideBar";

export const Nav = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery("(max-width: 500px)");

  const navLinks = (
    <>
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
    </>
  );

  return (
    <>
      {isMobile ? (
        <SideBar>{navLinks}</SideBar>
      ) : (
        <StyledNav>{navLinks}</StyledNav>
      )}
    </>
  );
};

const StyledNav = styled.div`
  z-index: 999;
  right: 0;
  top: 0;
  position: absolute;
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
