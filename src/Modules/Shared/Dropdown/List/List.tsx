import React from "react";

//STYLES
import styles from "./List.module.scss";

//TYPES
import { DropdownElement } from "../../../../Types";

export const List = ({ list, selectedItem, styleType }: listProps) => {
  const ddStyles = [styles.DropdownListWrapper];

  if (styleType === "primary") ddStyles.push(styles.Primary);
  if (styleType === "secondary") ddStyles.push(styles.Secondary);

  return (
    <div className={ddStyles.join(" ")}>
      {list.map((element) => (
        <h4
          onClick={() => selectedItem(element)}
          className={
            element.selected
              ? [styles.ListElement, styles.Selected].join(" ")
              : styles.ListElement
          }
          key={element.id}>
          {element.title}
        </h4>
      ))}
    </div>
  );
};

type listProps = {
  list: DropdownElement[];
  selectedItem: (element: DropdownElement) => void;
  styleType: string;
};
