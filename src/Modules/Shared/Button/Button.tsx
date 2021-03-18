import React from "react";
import styled from "styled-components/macro";
import { device } from "../../../resources/styles/helpers/breakpoints";

export const Button = React.memo(
  ({
    name,
    selected,
    clicked,
    disabled,
    styleType,
    className,
  }: buttonProps) => {
    return (
      <StyledButton
        styleType={styleType}
        selected={selected}
        disabled={disabled}
        className={className}
        onClick={clicked}>
        {name}
      </StyledButton>
    );
  }
);

type buttonProps = {
  name: string;
  selected?: boolean;
  clicked?: () => void;
  disabled?: boolean;
  styleType: string;
  className?: string;
};

const StyledButton = styled.button<{ styleType: string; selected?: boolean }>`
  outline: none;
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 300;
  padding: 1rem 0.6rem;

  background: ${({ theme, selected }) =>
    selected ? theme.colors?.blue : "transparent"};

  border: 1px solid
    ${({ theme, styleType }) =>
      styleType === "primary" ? theme.colors?.blue : theme.colors?.background};

  color: ${({ theme, styleType, selected }) =>
    selected
      ? theme.colors?.background
      : styleType === "primary"
      ? theme.colors?.blue
      : theme.colors?.background};

  &:hover {
    background: ${({ theme, styleType }) =>
      styleType === "primary" ? theme.colors?.blue : theme.colors?.background};

    color: ${({ theme, styleType }) =>
      styleType === "primary" ? theme.colors?.background : theme.colors?.blue};
  }

  /* @media ${device.tablet} {
    font-size: 1rem;
    font-weight: 300;
  } */

  @media ${device.large} {
    font-size: 1.3rem;
    font-weight: 100;
    padding: 1rem;
  }
`;
