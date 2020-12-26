import React from "react";

import styles from "./Button.module.scss";

const Button = ({ name, selected, clicked }: buttonProps) => {
  const btnStyle = [styles.Button];

  if (selected) btnStyle.push(styles.Selected);

  return (
    <button onClick={clicked} className={btnStyle.join(" ")}>
      {name}
    </button>
  );
};

type buttonProps = {
  name: string;
  selected?: boolean;
  clicked?: () => void;
};

export default React.memo(Button);
