import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

//COMPONENTS
import { Button, Tooltip } from "../../../Shared";

//STYLES
import noImage from "../../../../resources/images/noImage.png";
import { flexColumnCenter } from "../../../../resources/styles/helpers/mixins";
import styled from "styled-components/macro";
import { IconEnum } from "../../../Shared/Icon/Icon.enum";
import { Icon } from "../../../Shared";
import { Launch as LaunchType } from "../../../../Types";

export const Launch = React.memo(({ mission }: launchProps) => {
  const { t } = useTranslation();

  return (
    <Link to={`/launch/${mission.id}`}>
      <StyledLaunch>
        <StyledImage
          src={mission.links.patch.small ? mission.links.patch.small : noImage}
          alt="patch"
          loading="lazy"
        />
        <StyledMissionName>{mission.name}</StyledMissionName>
        <StyledDate>
          {t("key", { date: new Date(mission.date_utc) })}
        </StyledDate>
        <StyledIcons>
          <Tooltip
            content={
              mission.success ? t("missionSuccessful") : t("missionFailed")
            }>
            <FontAwesomeIcon
              style={{
                color: mission.success ? "#4BB543" : "#FA113D",
                fontSize: "1.8rem",
              }}
              icon={mission.success ? "check-circle" : "times-circle"}
            />
          </Tooltip>
          {mission.cores[0].landing_success && (
            <Tooltip content={t("boosterLanded")}>
              <Icon name={IconEnum.drone} width={54} height={31} />
            </Tooltip>
          )}
          {mission.fairings?.recovered && (
            <Tooltip content={t("fairingsRecovered")}>
              <Icon name={IconEnum.fairing} width={46} height={32} />
            </Tooltip>
          )}
        </StyledIcons>
        <StyledButton name={t("showDetails")} styleType="primary" />
      </StyledLaunch>
    </Link>
  );
});

type launchProps = {
  mission: LaunchType;
};

const StyledLaunch = styled(flexColumnCenter)`
  padding: 1rem;
  flex-wrap: wrap;
  transition: all 0.3s ease-in-out;
  border-radius: 0.625rem;
  max-width: 270px;

  &:hover {
    background-color: ${({ theme }) => theme.colors?.foreground};
  }
`;

const StyledImage = styled.img`
  width: 90%;
`;

const StyledMissionName = styled.h3`
  text-align: center;
  color: ${({ theme }) => theme.colors?.blue};
  font-weight: 300;
  font-size: 1.7rem;
  margin-top: 0.3rem;
`;

const StyledDate = styled.h4`
  color: ${({ theme }) => theme.colors?.fontSecondary};
  font-weight: 300;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

const StyledIcons = styled.div`
  margin: 1.5rem 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledButton = styled(Button)`
  width: 100%;
`;
