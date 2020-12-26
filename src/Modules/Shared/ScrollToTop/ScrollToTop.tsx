import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./ScrollToTop.module.scss";

const ScrollToTop = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.ScrollToTop}>
      <FontAwesomeIcon icon="arrow-down" onClick={scrollTop} />
    </div>
  );
};

export default ScrollToTop;
