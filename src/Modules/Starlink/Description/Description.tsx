import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components/macro";
import { device } from "../../../resources/styles/helpers/breakpoints";
import { flexColumn } from "../../../resources/styles/helpers/mixins";

export const Description = ({ starlinkOnTheOrbit }: descriptionProps) => {
  const { t } = useTranslation();

  return (
    <StyledDescription>
      <h2>STARLINK</h2>
      <h3>
        <b>Starlink</b> {t("starlinkDescriptionPart1")}{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.spacex.com/">
          SpaceX
        </a>{" "}
        {t("starlinkDescriptionPart2")}
      </h3>
      <h4>
        {t("starlinkOnTheOrbit")}: {starlinkOnTheOrbit}
      </h4>
    </StyledDescription>
  );
};

type descriptionProps = {
  starlinkOnTheOrbit: number;
};

const StyledDescription = styled(flexColumn)`
  z-index: 100;
  position: absolute;
  top: 10%;
  left: 2%;
  max-width: 400px;

  h2 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors?.fontPrimary};
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors?.fontSecondary};
  }

  h2,
  h3,
  h4 {
    font-weight: 300;
  }

  h4 {
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors?.fontSecondary};
  }

  @media ${device.tablet} {
    top: 6rem;

    h2 {
      font-size: 3rem;
    }

    h3,
    h4 {
      font-size: 1.2rem;
    }
  }
`;
