import React from "react";
import { useTranslation } from "react-i18next";

//COMPONENTS
import { Ship } from "./Ship/Ship";

//TYPES
import { Ship as ShipType } from "../../../Types";
import { flexColumn } from "../../../resources/styles/helpers/mixins";
import styled from "styled-components/macro";
import { device } from "../../../resources/styles/helpers/breakpoints";

export const ShipList = ({ shipList }: shipListProps) => {
  const { t } = useTranslation();

  let shipListArr = <></>;

  if (shipList.length > 0)
    shipListArr = (
      <StyledShipList>
        <h2>{t("usedShips")}</h2>
        <StyledContent>
          {shipList.map((ship, index) => (
            <Ship key={index} name={ship.name} img={ship.image} />
          ))}
        </StyledContent>
      </StyledShipList>
    );

  return <>{shipListArr}</>;
};

type shipListProps = {
  shipList: ShipType[];
};

const StyledShipList = styled(flexColumn)`
  margin: 2rem 0;
  align-items: center;

  h2 {
    font-weight: 100;
    color: ${({ theme }) => theme.colors?.fontPrimary};
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  @media ${device.tablet} {
    align-items: flex-start;

    h2 {
      font-size: 2.5rem;
    }
  }
`;

const StyledContent = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  > * {
    margin: 1rem;
  }

  @media ${device.tablet} {
    justify-content: space-between;

    > * {
      margin: 1rem 0;
    }
  }
`;
