import React from "react";

//COMPONENTS
import { Author } from "./Author/Author";
import { LngSelector } from "./LngSelector/LngSelector";

import { flexCenter } from "../../../resources/styles/helpers/mixins";
import styled from "styled-components/macro";
import { device } from "../../../resources/styles/helpers/breakpoints";

export const Footer = () => {
  return (
    <StyledFooter>
      <Author />
      <LngSelector />
    </StyledFooter>
  );
};

const StyledFooter = styled(flexCenter)`
  margin-bottom: 1rem;
  z-index: 1000;
  font-size: 0.5rem;

  @media ${device.tablet} {
    font-size: 0.8rem;
  }
`;
