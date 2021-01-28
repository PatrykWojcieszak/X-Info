import React from "react";
import { useTranslation } from "react-i18next";

//COMPONENTS
import { NavElement } from "./NavElement/NavElement";

//STYLeS
import styles from "./Nav.module.scss";

export const Nav = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.Nav}>
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
    </div>
  );
};
