import React from "react";
import styled from "styled-components";

import { device } from "../../../../resources/styles/helpers/breakpoints";
import { QuoteProps } from "./Quote.types";

export const Quote = ({ quote }: QuoteProps) => {
  return (
    <StyledQuoteContainer>
      <StyledQuote>
        {quote} - <span>Elon Musk</span>
      </StyledQuote>
    </StyledQuoteContainer>
  );
};

const StyledQuoteContainer = styled.div`
  border-radius: 1rem;
  padding: 0.8rem;
  text-align: center;
  position: absolute;

  left: 0;
  right: 0;
  margin: auto;
  font-size: 0.5rem;
  bottom: 0.2rem;

  @media ${device.tablet} {
    bottom: 1rem;
    font-size: 0.6rem;
  }
`;

const StyledQuote = styled.h2`
  font-weight: 300;
  color: ${({ theme }) => theme.colors?.fontPrimary};

  span {
    font-weight: 700;
    color: ${({ theme }) => theme.colors?.blue};
  }
`;
