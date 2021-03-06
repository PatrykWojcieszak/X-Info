import React, { useState, useRef, useEffect } from "react";

//HOOKS
import { useClickOutside } from "../../../Hooks";

//TYPES
import { DropdownElement } from "../../../Types/";
import { Header } from "./Header/Header";
import { List } from "./List/List";
import styled from "styled-components/macro";
import { flexColumn } from "../../../resources/styles/helpers/mixins";
import { device } from "../../../resources/styles/helpers/breakpoints";

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

  return (
    <StyledDropdownContainer as="div" styleType={styleType} ref={wrapperRef}>
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
    </StyledDropdownContainer>
  );
};

type dropdownProps = {
  list: DropdownElement[];
  selectedElement: (id: number) => void;
  styleType: string;
};

const StyledDropdownContainer = styled(flexColumn)<{ styleType: string }>`
  border-radius: 0.5rem;
  position: relative;
  min-width: 200px;
  background-color: transparent;
  border: 1px solid
    ${({ theme, styleType }) =>
      styleType === "primary" ? theme.colors?.blue : theme.colors?.background};

  @media ${device.tablet} {
    min-width: 220px;
  }

  @media ${device.large} {
    min-width: 280px;
  }
`;
