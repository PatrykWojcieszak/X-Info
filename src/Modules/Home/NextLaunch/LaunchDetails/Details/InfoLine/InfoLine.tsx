import React from "react";
import styled from "styled-components/macro";

import { device } from "../../../../../../resources/styles/helpers/breakpoints";

export const InfoLine = React.memo(({ title, value }: infoLineProps) => {
  return (
    <StyledInfoWrapper>
      <StyledTitlesWrapper>
        <StyledText>{title}:</StyledText>
      </StyledTitlesWrapper>
      <StyledValuesWrapper>
        <StyledText>{value}</StyledText>
      </StyledValuesWrapper>
    </StyledInfoWrapper>
  );
});

type infoLineProps = {
  title: string;
  value: string;
};

const StyledInfoWrapper = styled.div`
  display: flex;
`;

const StyledText = styled.h3`
  font-weight: 300;
  color: ${({ theme }) => theme.colors?.fontSecondary};
  margin-top: 0.6rem;
  font-size: 0.825rem;

  @media ${device.tablet} {
    margin-top: 1rem;
    font-size: 1.2rem;
  }
`;

const StyledTitlesWrapper = styled.div`
  min-width: 110px;
  max-width: 110px;
  margin-right: 1rem;

  @media ${device.tablet} {
    min-width: 150px;
    max-width: 150px;
  }
`;

const StyledValuesWrapper = styled.div`
  text-align: justify;

  h3 {
    color: ${({ theme }) => theme.colors?.fontPrimary};
  }
`;
