import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//STYLES
import styles from "./ScrollToTop.module.scss";

//HOOKS
import { useScrollPosition } from "../../../Hooks/useScrollPosition";

export const ScrollToTop = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollStyles = [styles.ScrollToTop];
  const scrollPosition = useScrollPosition();

  if (scrollPosition === 0) {
    scrollStyles.push(styles.Hide);
  }

  return (
    <div className={scrollStyles.join(" ")} onClick={scrollTop}>
      <FontAwesomeIcon icon="arrow-down" />
    </div>
  );
};
