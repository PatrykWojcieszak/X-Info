import React from "react";
import styled from "styled-components/macro";
import { flexColumn } from "../../../../../resources/styles/helpers/mixins";

export const InfoElement = ({ title, value }: infoElementProps) => {
  return (
    <StyledInfoElement as="div">
      <StyledTitle>{title}</StyledTitle>
      <StyledValue>{value}</StyledValue>
    </StyledInfoElement>
  );
};

type infoElementProps = {
  title: string;
  value: string;
};

const StyledInfoElement = styled(flexColumn)`
  margin: 0 1rem;
`;

const StyledTitle = styled.h3`
  color: ${({ theme }) => theme.colors?.fontPrimary};
  white-space: nowrap;
  font-weight: 300;
  margin-bottom: 0.5rem;
`;

const StyledValue = styled.h4`
  font-weight: 300;
  color: ${({ theme }) => theme.colors?.fontSecondary};
`;
