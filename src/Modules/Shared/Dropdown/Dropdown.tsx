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
  title,
  list,
  isListOpen,
  toggleList,
  selectedElement,
  styleType,
}: dropdownProps) => {
  const [headerTitle, setHeaderTitle] = useState(title);

  const closeListHandler = () => {
    toggleList(false);
  };

  useEffect(() => {
    setHeaderTitle(list.find((x) => x.selected)?.title);
  }, [list]);

  const wrapperRef = useRef(null);
  useClickOutside(wrapperRef, closeListHandler);

  const selectItemHandler = (selectedEl: DropdownElement) => {
    setHeaderTitle(selectedEl.title);
    toggleList(false);
    selectedElement(selectedEl.id);
  };

  const ddStyles = [styles.DropdownWrapper];

  if (styleType === "primary") ddStyles.push(styles.Primary);
  if (styleType === "secondary") ddStyles.push(styles.Secondary);

  return (
    <div className={ddStyles.join(" ")} ref={wrapperRef}>
      <Header
        title={headerTitle}
        isListOpen={isListOpen}
        styleType={styleType}
        toggleList={(open: boolean) => toggleList(open)}
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
  title?: string;
  list: DropdownElement[];
  isListOpen: boolean;
  toggleList: (isOpen: boolean) => void;
  selectedElement: (id: number) => void;
  styleType: string;
};
