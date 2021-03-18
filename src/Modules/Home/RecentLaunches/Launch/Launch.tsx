import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

//COMPONENTS
import { Button, Tooltip } from "../../../Shared";

//STYLES
import noImage from "../../../../resources/images/noImage.png";
import {
  flexCenter,
  flexColumnCenter,
} from "../../../../resources/styles/helpers/mixins";
import styled from "styled-components/macro";
import { device } from "../../../../resources/styles/helpers/breakpoints";
import { IconEnum } from "../../../Shared/Icon/Icon.enum";
import { Icon } from "../../../Shared";

export const Launch = React.memo(
  ({ name, patch, date, success, id }: launchProps) => {
    const { t } = useTranslation();

    return (
      <Link to={`/launch/${id}`}>
        <StyledLaunch>
          <StyledImage
            src={patch ? patch : noImage}
            alt="patch"
            loading="lazy"
          />
          <StyledMissionName>{name}</StyledMissionName>
          <StyledDate>{t("key", { date: new Date(date) })}</StyledDate>
          <StyledIcons>
            <Tooltip content="Mission successful">
              <FontAwesomeIcon
                style={{
                  color: success ? "#4BB543" : "#FA113D",
                  fontSize: "1.8rem",
                }}
                icon={success ? "check-circle" : "times-circle"}
              />
            </Tooltip>
            <Tooltip content="Booster landed">
              <Icon name={IconEnum.drone} width={54} height={31} />
            </Tooltip>
            <Tooltip content="Fairings recovered">
              <Icon name={IconEnum.fairing} width={46} height={32} />
            </Tooltip>
          </StyledIcons>
          <StyledButton name={t("showDetails")} styleType="primary" />
        </StyledLaunch>
      </Link>
    );
  }
);

type launchProps = {
  name: string;
  patch: string;
  date: string;
  success: boolean;
  id: string;
};

const StyledLaunch = styled(flexColumnCenter)`
  padding: 1rem;
  flex-wrap: wrap;
  transition: all 0.3s ease-in-out;
  border-radius: 0.625rem;
  max-width: 270px;

  &:hover {
    background-color: #040404;
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
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled(Button)`
  width: 100%;
`;
