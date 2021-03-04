import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";
import { device } from "../../../../resources/styles/helpers/breakpoints";

export const NavElement = React.memo(
  ({ name, link, exact }: navElementProps) => {
    return (
      <StyledNavElement as={NavLink} to={link} exact={exact}>
        {name}
      </StyledNavElement>
    );
  }
);

type navElementProps = {
  name: string;
  link: string;
  exact: boolean;
};

const StyledNavElement = styled(NavLink)`
  position: relative;
  overflow: hidden;
  will-change: color;
  transition: color 0.25s ease-out;
  color: ${({ theme }) => theme.colors?.fontSecondary};
  font-weight: 100;
  border: none;
  outline: none;
  text-decoration: none;
  font-size: 1.3rem;
  margin: 0.4rem;
  padding: 0.6rem 0.1rem;

  &:hover {
    cursor: pointer;
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.colors?.blue};
  }

  &::before {
    left: 50%;
    transform: translateX(-50%);
  }

  &::after {
    right: 50%;
    transform: translateX(50%);
  }

  &:hover::before,
  &:hover::after {
    width: 100%;
    transition-duration: 0.2s;
  }

  &::before,
  &::after {
    content: "";
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors?.blue};

    will-change: width;
    transition: width 0.15s ease-out;

    position: absolute;
    bottom: 0;
  }

  @media ${device.tablet} {
    margin: 1.5rem;
    padding: 0.6rem 0.2rem;
    font-size: 1.6rem;
  }
`;
