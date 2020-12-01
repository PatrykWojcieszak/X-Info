import React from "react";

import styles from "./Button.module.scss";

const Button = ({ name }: buttonProps) => {
  return <button className={styles.Button}>{name}</button>;
};

type buttonProps = {
  name: string;
};

export default Button;
