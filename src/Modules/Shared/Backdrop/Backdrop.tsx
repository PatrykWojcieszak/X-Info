import React from "react";

import styles from "./Backdrop.module.scss";

const Backdrop = ({ clicked, show }: backdropProps) =>
  show ? <div onClick={clicked} className={styles.Backdrop}></div> : null;

type backdropProps = {
  clicked: () => void;
  show: boolean;
};

export default Backdrop;
