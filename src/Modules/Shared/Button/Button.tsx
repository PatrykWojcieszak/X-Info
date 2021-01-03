import React from "react";

//STYLES
import styles from "./Button.module.scss";

const Button = ({ name, selected, clicked, disabled }: buttonProps) => {
  const btnStyle = [styles.Button];

  if (selected) btnStyle.push(styles.Selected);

  return (
    <button
      disabled={disabled}
      onClick={clicked}
      className={btnStyle.join(" ")}>
      {name}
    </button>
  );
};

type buttonProps = {
  name: string;
  selected?: boolean;
  clicked?: () => void;
  disabled?: boolean;
};

export default React.memo(Button);
