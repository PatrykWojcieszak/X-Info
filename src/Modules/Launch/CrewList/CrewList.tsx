import React from "react";
import { useTranslation } from "react-i18next";

//COMPONENTS
import { CrewPerson } from "./CrewPerson/CrewPerson";

//TYPeS
import { Crew } from "../../../Types";
import styled from "styled-components/macro";
import { flexColumn } from "../../../resources/styles/helpers/mixins";
import { device } from "../../../resources/styles/helpers/breakpoints";

export const CrewList = ({ crewList }: crewListProps) => {
  const { t } = useTranslation();

  let crewListArr = <></>;

  if (crewList.length > 0)
    crewListArr = (
      <StyledCrewList>
        <h2>{t("crew")}</h2>
        <StyledContent>
          {crewList.map((crew: any, index) => (
            <CrewPerson
              key={index}
              name={crew?.crew?.name}
              img={crew?.crew?.image}
              agency={crew?.crew?.agency}
            />
          ))}
        </StyledContent>
      </StyledCrewList>
    );

  return <>{crewListArr}</>;
};

type crewListProps = {
  crewList: Crew[];
};

const StyledCrewList = styled(flexColumn)`
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
