import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { device } from "../../../resources/styles/helpers/breakpoints";

export const Description = () => {
  const { t } = useTranslation();

  return (
    <StyledDescription>
      <h2>{t("rockets")}</h2>
      <h4>
        {t("rocketsDescriptionPart1")}{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.spacex.com/">
          SpaceX
        </a>
        {t("rocketsDescriptionPart2")}
      </h4>
    </StyledDescription>
  );
};

const StyledDescription = styled.div`
  position: relative;
  top: 0;
  left: 0;
  margin-bottom: 3rem;
  width: 90%;

  h2 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors?.fontPrimary};
    margin-bottom: 1rem;
  }

  h4 {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors?.fontSecondary};
  }

  h2,
  h4 {
    font-weight: 100;
  }

  a {
    color: ${({ theme }) => theme.colors?.blue};
  }

  @media ${device.tablet} {
    position: absolute;
    left: 5rem;
    top: 6rem;
    margin-bottom: 3rem;
    width: 350px;
  }

  @media ${device.large} {
    position: absolute;
    width: 450px;
    margin-bottom: 0;

    h2 {
      font-size: 3rem;
    }

    h4 {
      font-size: 1.2rem;
    }
  }
`;
