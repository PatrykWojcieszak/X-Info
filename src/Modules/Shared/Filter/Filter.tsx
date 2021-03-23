import React from "react";
import { useTranslation } from "react-i18next";

//COMPONENTS
import { Button } from "../";

//TYPES
import { FilterElement } from "../../../Types";
import styled from "styled-components/macro";
import { device } from "../../../resources/styles/helpers/breakpoints";
import { flexColumn } from "../../../resources/styles/helpers/mixins";

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
  width: 100%;

  @media ${device.mobile} {
    min-width: 450px;
  }
`;

const StyledOptionWrapper = styled(flexColumn)`
  justify-content: space-between;
  margin: 1rem 0;

  @media ${device.mobile} {
    flex-direction: row;
    align-items: center;
  }
`;

const StyledOptionTitle = styled.h3`
  color: ${({ theme }) => theme.colors?.background};
  font-weight: 400;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  min-width: 125px;

  @media ${device.mobile} {
    margin-bottom: 0;
    margin-right: 1.5rem;
  }
`;

const StyledBtn = styled(Button)`
  margin-top: 2rem;

  @media ${device.mobile} {
    margin: 0 auto;
    margin-top: 2rem;
  }
`;
