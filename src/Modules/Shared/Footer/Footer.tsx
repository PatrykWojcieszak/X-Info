import React from "react";

//COMPONENTS
import { Author } from "./Author/Author";
import { LngSelector } from "./LngSelector/LngSelector";

//STYLES
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.Footer}>
      <Author />
      <LngSelector />
    </div>
  );
};
