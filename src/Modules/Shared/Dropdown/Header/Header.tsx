import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

import styled from "styled-components/macro";
import { flexCenter } from "../../../../resources/styles/helpers/mixins";
import { device } from "../../../../resources/styles/helpers/breakpoints";

export const Header = ({
  title,
  isListOpen,
  toggleList,
  styleType,
}: headerProps) => {
  const { t } = useTranslation();

  return (
    <StyledHeaderWrapper
      as="div"
      styleType={styleType}
      onClick={() => toggleList(!isListOpen)}>
      <h4>{t(title)}</h4>
      {isListOpen ? (
        <FontAwesomeIcon icon="angle-up" />
      ) : (
        <FontAwesomeIcon icon="angle-down" />
      )}
    </StyledHeaderWrapper>
  );
};

type headerProps = {
  title: string;
  isListOpen: boolean;
  toggleList: (isListOpen: boolean) => void;
  styleType: string;
};

const StyledHeaderWrapper = styled(flexCenter)<{ styleType: string }>`
  justify-content: space-between;
  width: 100%;
  height: 100%;
  cursor: pointer;
  padding: 0.6rem;

  svg,
  h4 {
    font-size: 0.8rem;
    font-weight: 400;
    color: ${({ styleType, theme }) =>
      styleType === "primary" ? theme.colors?.blue : theme.colors?.background};
  }

  svg {
    margin-left: 1rem;
  }

  @media ${device.tablet} {
    svg,
    h4 {
      font-size: 1rem;
    }
  }

  @media ${device.large} {
    svg,
    h4 {
      font-size: 1.3rem;
    }
  }
`;
