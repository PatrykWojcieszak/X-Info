import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

//COMPONENTS
import { Button } from "../../../Shared";

//STYLES
import noImage from "../../../../resources/images/noImage.png";
import {
  flexCenter,
  flexColumnCenter,
} from "../../../../resources/styles/helpers/mixins";
import styled from "styled-components/macro";
import { device } from "../../../../resources/styles/helpers/breakpoints";

export const Launch = React.memo(
  ({ name, patch, date, success, id }: launchProps) => {
    const { t } = useTranslation();

    return (
      <Link to={`/launch/${id}`}>
        <StyledLaunch>
          <img src={patch ? patch : noImage} alt="patch" loading="lazy" />
          <h3>{name}</h3>
          <StyledColumn>
            <h4>{t("key", { date: new Date(date) })}</h4>
            {success != null ? (
              <FontAwesomeIcon
                style={{ color: success ? "#4BB543" : "#FA113D" }}
                icon={success ? "check-circle" : "times-circle"}
              />
            ) : null}
          </StyledColumn>
          <Button name={t("showDetails")} styleType="primary" />
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
  width: 220px;
  padding: 1.5rem;
  flex-wrap: wrap;
  transition: all 0.4s ease-in-out;
  border-radius: 1rem;

  img {
    width: 80%;
    max-height: 155px;
  }

  h3 {
    text-align: center;
    margin: 1rem 0 0.5rem 0;
    color: ${({ theme }) => theme.colors?.blue};
    font-weight: 100;
    font-size: 1.3rem;
    min-height: 40px;
  }

  &:hover {
    background-color: #040404;
  }

  @media ${device.large} {
    width: 240px;

    h3 {
      font-size: 1.7rem;

      min-height: 65px;
    }
  }
`;

const StyledColumn = styled(flexCenter)`
  margin-bottom: 1.2rem;

  svg {
    font-size: 1rem;
    margin-left: 0.8rem;
  }

  h4 {
    color: ${({ theme }) => theme.colors?.fontSecondary};
    font-weight: 100;
    text-align: left;
    font-size: 0.7rem;
  }

  @media ${device.large} {
    svg {
      font-size: 1.3rem;
      margin-left: 0.8rem;
    }

    h4 {
      font-size: 1rem;
    }
  }
`;
