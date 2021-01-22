import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useClickOutside } from "../../../Hooks/useClickOutside";

//STYLES
import styles from "./Dropdown.module.scss";

//TYPES
import { DropdownElement } from "../../../Types/";

const Dropdown = ({
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
      <div
        className={styles.HeaderWrapper}
        onClick={() => toggleList(!isListOpen)}>
        <h4>{headerTitle}</h4>
        {isListOpen ? (
          <FontAwesomeIcon icon="angle-up" />
        ) : (
          <FontAwesomeIcon icon="angle-down" />
        )}
      </div>
      {isListOpen && (
        <div className={styles.DropdownListWrapper}>
          {list.map((element) => (
            <h4
              onClick={() => selectItemHandler(element)}
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

export default Dropdown;
