import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Tooltip, Icon } from "../..";
import { device } from "../../../../resources/styles/helpers/breakpoints";
import { IconEnum } from "../../Icon/Icon.enum";
import { DetailsProps } from "./Details.types";

export const Details = ({
  rocketName,
  launchSiteName,
  customers,
  success,
  upcoming,
  boosterLanded,
  fairingRecovered,
}: DetailsProps) => {
  const { t } = useTranslation();

  return (
    <StyledGridContainer>
      <StyledText>{t("rocket")}:</StyledText>
      <StyledTextValues>{rocketName}</StyledTextValues>
      <StyledText>{t("launchSite")}:</StyledText>
      <StyledTextValues>{launchSiteName}</StyledTextValues>
      {customers && (
        <>
          <StyledText>{t("customer")}:</StyledText>
          <StyledTextValues>
            {customers.map((x, index) => (
              <span key={index}>{x}, </span>
            ))}
          </StyledTextValues>
        </>
      )}

      {!upcoming && (
        <>
          <StyledText>LAUNCH STATUS:</StyledText>
          <StyledIcons>
            <Tooltip
              content={success ? t("missionSuccessful") : t("missionFailed")}>
              <FontAwesomeIcon
                style={{
                  color: success ? "#4BB543" : "#FA113D",
                  fontSize: "1.6rem",
                }}
                icon={success ? "check-circle" : "times-circle"}
              />
            </Tooltip>
            {boosterLanded && (
              <Tooltip content={t("boosterLanded")}>
                <Icon name={IconEnum.drone} width={40} height={23} />
              </Tooltip>
            )}
            {fairingRecovered && (
              <Tooltip content={t("fairingsRecovered")}>
                <Icon name={IconEnum.fairing} width={34} height={24} />
              </Tooltip>
            )}
          </StyledIcons>
        </>
      )}
    </StyledGridContainer>
  );
};

const StyledGridContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: max-content auto;
  grid-template-rows: max-content max-content max-content max-content;
  gap: 10px 25px;

  @media ${device.large} {
    grid-template-columns: max-content max-content max-content auto;
    grid-template-rows: max-content max-content;
  }
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
