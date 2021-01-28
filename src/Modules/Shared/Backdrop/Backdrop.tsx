import React from "react";

//STYLES
import styles from "./Backdrop.module.scss";

export const Backdrop = ({ clicked, show }: backdropProps) =>
  show ? <div onClick={clicked} className={styles.Backdrop}></div> : null;

type backdropProps = {
  clicked: () => void;
  show: boolean;
};
