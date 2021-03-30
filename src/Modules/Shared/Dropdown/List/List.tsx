import React from "react";
import { useTranslation } from "react-i18next";

//TYPES
import { DropdownElement } from "../../../../Types";
import styled from "styled-components/macro";

export const List = ({ list, selectedItem, styleType }: listProps) => {
  const { t } = useTranslation();

  return (
    <StyledDropdownListWrapper styleType={styleType}>
      {list.map((element) => (
        <StyledListElement
          onClick={() => selectedItem(element)}
          selected={element.selected}
          styleType={styleType}
          key={element.id}>
          {t(element.title)}
        </StyledListElement>
      ))}
    </StyledDropdownListWrapper>
  );
};

type listProps = {
  list: DropdownElement[];
  selectedItem: (element: DropdownElement) => void;
  styleType: string;
};

const StyledDropdownListWrapper = styled.div<{ styleType: string }>`
  z-index: 900;
  width: 100%;
  position: absolute;
  border-radius: 0.5rem;
  padding: 0.4rem;
  margin-top: 65px;
  left: 0;
  background-color: ${({ theme, styleType }) =>
    styleType === "primary" ? theme.colors?.blue : theme.colors?.background};
`;

const StyledListElement = styled.h4<{ selected: boolean; styleType: string }>`
  padding: 0.7rem 0.5rem;
  border-radius: 0.4rem;
  margin: 0.4rem 0;
  cursor: pointer;
  font-weight: 400;
  transition: all 0.2s ease-in-out;
  font-size: 1.2rem;

  color: ${({ theme, selected, styleType }) =>
    selected
      ? styleType === "primary"
        ? theme.colors?.blue
        : theme.colors?.background
      : styleType === "primary"
      ? theme.colors?.background
      : theme.colors?.blue};

  background-color: ${({ theme, selected, styleType }) =>
    selected
      ? styleType === "primary"
        ? theme.colors?.background
        : theme.colors?.blue
      : styleType === "primary"
      ? theme.colors?.blue
      : theme.colors?.background};

  &:hover {
    background-color: ${({ theme }) => theme.colors?.foreground};
    color: ${({ theme }) => theme.colors?.blue};
  }
`;
