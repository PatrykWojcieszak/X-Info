import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components/macro";
import { device } from "../../../../resources/styles/helpers/breakpoints";

export const Header = ({ description, active, rocketName }: headerProps) => {
  const { t } = useTranslation();

  let rocketStatus = { name: t("statusActive"), color: "#4BB543" };

  if (!active) rocketStatus = { name: t("statusInactive"), color: "#FA113D" };
  if (rocketName === "Falcon 1")
    rocketStatus = { name: t("statusRetired"), color: "#005288" };
  if (rocketName === "Starship")
    rocketStatus = { name: t("statusInDevelopment"), color: "#005288" };

  return (
    <StyledHeader>
      <p>{description}</p>
      <h3 style={{ textTransform: "uppercase" }}>
        {t("status")}:{" "}
        <span
          style={{
            color: rocketStatus.color,
          }}>
          {rocketStatus.name}
        </span>
      </h3>
    </StyledHeader>
  );
};

type headerProps = {
  description: string;
  active: boolean;
  rocketName: string;
};

const StyledHeader = styled.div`
  p,
  h3 {
    font-size: 0.8rem;
  }

  p {
    color: ${({ theme }) => theme.colors?.fontPrimary};
    margin-bottom: 1.2rem;
  }

  h3 {
    color: ${({ theme }) => theme.colors?.fontSecondary};
  }

  @media ${device.tablet} {
    p,
    h3 {
      font-size: 1rem;
    }
  }
`;
