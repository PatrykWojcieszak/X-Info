import React from "react";
import { useTranslation } from "react-i18next";

//COMPONENTS
import { Button } from "../";

//TYPES
import { FilterElement } from "../../../Types";
import styled from "styled-components/macro";
import { device } from "../../../resources/styles/helpers/breakpoints";
import {
  flexColumn,
  flexCenter,
} from "../../../resources/styles/helpers/mixins";

export const Filter = ({ filters, clearFilter }: filterProps) => {
  const { t } = useTranslation();

  return (
    <StyledFilterContainer as="div">
      {filters.map((filter, index) => (
        <StyledOptionWrapper key={index}>
          <StyledOptionTitle style={{ textTransform: "uppercase" }}>
            {t(filter.name)}:
          </StyledOptionTitle>
          {filter.element}
        </StyledOptionWrapper>
      ))}
      <StyledBtn
        clicked={clearFilter}
        name={t("clearFilter")}
        styleType="secondary"
      />
    </StyledFilterContainer>
  );
};

type filterProps = {
  filters: FilterElement[];
  clearFilter: () => void;
};

const StyledFilterContainer = styled(flexColumn)`
  background-color: ${({ theme }) => theme.colors?.blue};
  border-radius: 0.5rem;
  z-index: 900;
  padding: 0.7rem;
`;

const StyledOptionWrapper = styled(flexCenter)`
  justify-content: space-between;
  margin: 1rem 0;
`;

const StyledOptionTitle = styled.h3`
  color: ${({ theme }) => theme.colors?.background};
  font-weight: 400;
  min-width: 100px;
  font-size: 0.8rem;
  text-transform: uppercase;

  @media ${device.tablet} {
    min-width: 120px;
    font-size: 1rem;
  }

  @media ${device.large} {
    min-width: 160px;
    font-size: 1.4rem;
  }
`;

const StyledBtn = styled(Button)`
  margin-top: 2rem;

  @media ${device.mobile} {
    margin: 0 auto;
    margin-top: 2rem;
  }
`;
