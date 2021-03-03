import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components/macro";

//STYLES
import styles from "./Author.module.scss";

export const Author = () => {
  const { t } = useTranslation();

  return (
    <StyledAuthor>
      {t("createdBy")}:{" "}
      <a
        href="https://github.com/PatrykWojcieszak"
        target="_blank"
        rel="noopener noreferrer">
        {" "}
        Patryk Wojcieszak
      </a>{" "}
      {t("using")}{" "}
      <a
        href="https://github.com/r-spacex/SpaceX-API"
        target="_blank"
        rel="noopener noreferrer">
        SpaceX-Api
      </a>
    </StyledAuthor>
  );
};

const StyledAuthor = styled.h3`
  font-weight: 100;
  z-index: 1000;
  color: ${({ theme }) => theme.colors?.fontSecondary};

  > a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors?.blue};
    cursor: pointer;
    font-weight: 300;
  }
`;
