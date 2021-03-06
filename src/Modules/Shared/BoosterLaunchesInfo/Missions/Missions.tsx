import React from "react";
import styled from "styled-components/macro";
import { Launch } from "../../../../Types";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

//MIXINS
import { flexColumn } from "../../../../resources/styles/helpers/mixins";

export const Missions = ({ missions }: missionsProps) => {
  const { t } = useTranslation();

  return (
    <StyledMissionsContainer as="div">
      <StyledMissionsTitle style={{ marginLeft: "1.1rem" }}>
        {t("missions")}
      </StyledMissionsTitle>
      <StyledMissionsListWrapper>
        {missions.map((launch, index) => (
          <Link key={index} to={`/launch/${launch.id}`}>
            <StyledMissions>
              <StyledMissionName>{launch.name}</StyledMissionName>
              <StyledMissionsDetails>
                {t("key", { date: new Date(launch.date_utc) })} | #
                {launch.flight_number}
              </StyledMissionsDetails>
            </StyledMissions>
          </Link>
        ))}
      </StyledMissionsListWrapper>
    </StyledMissionsContainer>
  );
};

type missionsProps = {
  missions: Launch[];
};

const StyledMissionsContainer = styled(flexColumn)`
  padding: 1rem;
`;

const StyledMissionsTitle = styled.h3`
  color: ${({ theme }) => theme.colors?.fontPrimary};
  font-weight: 300;
  margin-bottom: 0.5rem;
`;

const StyledMissionsListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledMissions = styled.div`
  border-radius: 0.7rem;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  padding: 0.6rem;
  margin: 0.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors?.background};
  }
`;

const StyledMissionName = styled.h3`
  color: ${({ theme }) => theme.colors?.blue};
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
  font-weight: 300;
`;

const StyledMissionsDetails = styled.h4`
  color: ${({ theme }) => theme.colors?.fontSecondary};
  font-weight: 300;
  font-size: 0.9rem;
`;
