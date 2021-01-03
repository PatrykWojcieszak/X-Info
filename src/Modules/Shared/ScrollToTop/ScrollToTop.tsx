import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//STYLES
import styles from "./ScrollToTop.module.scss";

const ScrollToTop = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.ScrollToTop} onClick={scrollTop}>
      <FontAwesomeIcon icon="arrow-down" />
    </div>
  );
};

export default ScrollToTop;
