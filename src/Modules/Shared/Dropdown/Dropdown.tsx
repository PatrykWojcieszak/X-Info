import React, { useState, useRef, useEffect } from "react";

//HOOKS
import { useClickOutside } from "../../../Hooks";

//STYLES
import styles from "./Dropdown.module.scss";

//TYPES
import { DropdownElement } from "../../../Types/";
import { Header } from "./Header/Header";
import { List } from "./List/List";

export const Dropdown = ({
  list,
  selectedElement,
  styleType,
}: dropdownProps) => {
  const [headerTitle, setHeaderTitle] = useState(
    list.find((x) => x.selected)?.title
  );
  const [isListOpen, setIsListOpen] = useState(false);

  const closeListHandler = () => {
    setIsListOpen(false);
  };

  useEffect(() => {
    setHeaderTitle(list.find((x) => x.selected)?.title);
  }, [list]);

  const wrapperRef = useRef(null);
  useClickOutside(wrapperRef, closeListHandler);

  const selectItemHandler = (selectedEl: DropdownElement) => {
    setHeaderTitle(selectedEl.title);
    setIsListOpen(false);
    selectedElement(selectedEl.id);
  };

  const ddStyles = [styles.DropdownWrapper];

  if (styleType === "primary") ddStyles.push(styles.Primary);
  if (styleType === "secondary") ddStyles.push(styles.Secondary);

  return (
    <div className={ddStyles.join(" ")} ref={wrapperRef}>
      <Header
        title={headerTitle ? headerTitle : "-"}
        isListOpen={isListOpen}
        styleType={styleType}
        toggleList={(open: boolean) => setIsListOpen(open)}
      />
      {isListOpen && (
        <List
          list={list}
          styleType={styleType}
          selectedItem={(element: DropdownElement) =>
            selectItemHandler(element)
          }
        />
      )}
    </div>
  );
};

type dropdownProps = {
  list: DropdownElement[];
  selectedElement: (id: number) => void;
  styleType: string;
};
