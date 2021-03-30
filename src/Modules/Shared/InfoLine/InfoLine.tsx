import React from "react";
import styled from "styled-components/macro";
import { device } from "../../../resources/styles/helpers/breakpoints";

export const InfoLine = React.memo(({ title, value }: infoLineProps) => {
  return (
    <StyledInfoLine>
      <StyledTitle>{title}</StyledTitle>
      <StyledValue>{value}</StyledValue>
    </StyledInfoLine>
  );
});

type infoLineProps = {
  title: string;
  value: string;
};

const StyledInfoLine = styled.div`
  margin: 0.7rem 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  box-sizing: border-box;
  border-bottom: 1px solid ${({ theme }) => theme.colors?.fontPrimary};

  @media ${device.large} {
    font-size: 1.5rem;
  }
`;

const StyledFont = styled.h3`
  font-size: 0.875rem;
  font-weight: 300;

  @media ${device.large} {
    font-size: 1rem;
  }
`;

const StyledTitle = styled(StyledFont)`
  color: ${({ theme }) => theme.colors?.fontPrimary} !important;
  text-transform: uppercase;
`;

const StyledValue = styled(StyledFont)`
  color: ${({ theme }) => theme.colors?.fontSecondary};
`;
