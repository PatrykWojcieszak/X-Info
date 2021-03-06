import React from "react";
import { useTranslation } from "react-i18next";

//COMPONENTS
import { NavElement } from "./NavElement/NavElement";

import styled from "styled-components/macro";

export const Nav = () => {
  const { t } = useTranslation();

  return (
    <StyledNav>
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
      <NavElement name={t("aboutNav")} link="/about" exact={true}></NavElement>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  z-index: 999;
`;
