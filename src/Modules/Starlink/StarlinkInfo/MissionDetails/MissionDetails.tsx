import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

//STYLES
import styled from "styled-components/macro";
import { device } from "../../../../resources/styles/helpers/breakpoints";

export const MissionDetails = ({
  flightNumber,
  name,
  dateUtc,
  id,
}: missionDetailsProps) => {
  const { t } = useTranslation();

  return (
    <StyledMissionDetails>
      <h2>{t("launch")}</h2>
      <Link to={`launch/${id}`}>
        <StyledLaunchInfoWrapper>
          <h3>{name}</h3>
          <h4>
            {t("key", { date: new Date(dateUtc) })} | #{flightNumber}
          </h4>
        </StyledLaunchInfoWrapper>
      </Link>
    </StyledMissionDetails>
  );
};

type missionDetailsProps = {
  flightNumber: number;
  name: string;
  dateUtc: string;
  id: string;
};

const StyledMissionDetails = styled.div`
  margin-top: 2rem;
  margin-left: 0;

  @media ${device.mobile} {
    margin-top: 0;
    margin-left: 4rem;
  }
`;

const StyledLaunchInfoWrapper = styled.div`
  cursor: pointer;

  h3 {
    color: ${({ theme }) => theme.colors?.blue};
    font-weight: 300;
  }
`;
