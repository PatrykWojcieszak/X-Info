import React from "react";

//STYLES
import styles from "./Button.module.scss";

export const Button = React.memo(
  ({ name, selected, clicked, disabled, styleType }: buttonProps) => {
    const btnStyle = [styles.Button];

    if (styleType === "primary") btnStyle.push(styles.Primary);
    if (styleType === "secondary") btnStyle.push(styles.Secondary);
    if (selected) btnStyle.push(styles.Selected);

    return (
      <button
        disabled={disabled}
        onClick={clicked}
        className={btnStyle.join(" ")}>
        {name}
      </button>
    );
  }
);

type buttonProps = {
  name: string;
  selected?: boolean;
  clicked?: () => void;
  disabled?: boolean;
  styleType: string;
};
