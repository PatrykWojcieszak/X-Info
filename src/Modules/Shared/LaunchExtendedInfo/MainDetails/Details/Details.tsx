import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Tooltip, Icon } from "../../..";
import { IconEnum } from "../../../Icon/Icon.enum";
import { DetailsProps } from "./Details.types";

export const Details = ({
  rocketName,
  launchSiteName,
  fairingsRecovered,
  boosterLanded,
  missionSuccessful,
  missionBeforeLaunch,
}: DetailsProps) => {
  const { t } = useTranslation();

  console.log(!missionBeforeLaunch);
  console.log(boosterLanded);
  console.log(fairingsRecovered);

  return (
    <StyledDetails>
      <StyledText>{t("rocket")}:</StyledText>
      <StyledTextValues>{rocketName}</StyledTextValues>
      <StyledText>{t("launchSite")}:</StyledText>
      <StyledTextValues>{launchSiteName}</StyledTextValues>
      {!missionBeforeLaunch || boosterLanded || fairingsRecovered ? (
        <>
          <StyledText>{t("missionStatus")}:</StyledText>
          <StyledIcons>
            {!missionBeforeLaunch && (
              <Tooltip
                content={
                  missionSuccessful ? "Mission successful" : "Mission failed"
                }>
                <FontAwesomeIcon
                  style={{
                    color: missionSuccessful ? "#4BB543" : "#FA113D",
                    fontSize: "1.6rem",
                  }}
                  icon={missionSuccessful ? "check-circle" : "times-circle"}
                />
              </Tooltip>
            )}
            {boosterLanded && (
              <Tooltip content="Booster landed">
                <Icon name={IconEnum.drone} width={40} height={23} />
              </Tooltip>
            )}
            {fairingsRecovered && (
              <Tooltip content="Fairings recovered">
                <Icon name={IconEnum.fairing} width={34} height={24} />
              </Tooltip>
            )}
          </StyledIcons>
        </>
      ) : null}
    </StyledDetails>
  );
};

const StyledDetails = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: max-content auto;
  grid-template-rows: max-content max-content max-content max-content;
  gap: 10px 25px;
`;

const StyledText = styled.h3`
  font-weight: 300;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors?.fontSecondary};
`;

const StyledTextValues = styled(StyledText)`
  color: ${({ theme }) => theme.colors?.fontPrimary};
`;

const StyledIcons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`;
