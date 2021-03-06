import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components/macro";

export const Ship = React.memo(({ name, img }: shipProps) => {
  const { t } = useTranslation();

  return (
    <StyledShip>
      <img src={img} alt="ship" loading="lazy" />
      <StyledName>
        {t("name")}: <span>{name}</span>
      </StyledName>
    </StyledShip>
  );
});

type shipProps = {
  name: string;
  img: string;
};

const StyledShip = styled.div`
  background-color: ${({ theme }) => theme.colors?.foreground};
  border-radius: 1rem;
  width: 350px;

  img {
    width: 100%;
    min-height: 180px;
    max-height: 180px;
    object-fit: cover;
    border-radius: 1rem;
  }
`;

const StyledName = styled.h3`
  font-weight: 100;
  color: ${({ theme }) => theme.colors?.fontSecondary};
  margin: 0.8rem 0 0.8rem 0.8rem;

  span {
    color: ${({ theme }) => theme.colors?.fontPrimary};
    font-weight: 300;
  }
`;
