import React from "react";

//STYLES
import styles from "./Button.module.scss";

const Button = ({
  name,
  selected,
  clicked,
  disabled,
  styleType,
}: buttonProps) => {
  const btnStyle = [styles.Button];

  if (selected) btnStyle.push(styles.Selected);
  if (styleType === "primary") btnStyle.push(styles.Primary);
  if (styleType === "secondary") btnStyle.push(styles.Secondary);

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
  styleType: string;
};

export default React.memo(Button);
