import React from "react";
import styled from "styled-components/macro";
import { device } from "../../../../../resources/styles/helpers/breakpoints";

export const InfoLine = React.memo(({ title, value }: infoLineProps) => {
  return (
    <StyledInfoWrapper>
      <StyledTitlesWrapper>
        <h3>{title}:</h3>
      </StyledTitlesWrapper>
      <StyledValuesWrapper>
        <h3>{value}</h3>
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

  h3 {
    font-weight: 100;
    color: ${({ theme }) => theme.colors?.fontSecondary};
    margin-top: 0.8rem;
    font-size: 0.8rem;
  }

  @media ${device.tablet} {
    h3 {
      margin-top: 1rem;
      font-size: 1.2rem;
    }
  }
`;

const StyledTitlesWrapper = styled.div`
  min-width: 110px;
  max-width: 110px;
  margin-right: 1rem;

  @media ${device.tablet} {
    min-width: 130px;
    max-width: 130px;
  }
`;

const StyledValuesWrapper = styled.div`
  text-align: justify;
`;
