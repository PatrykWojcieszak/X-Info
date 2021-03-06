import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components/macro";
import { flexColumn } from "../../../../resources/styles/helpers/mixins";

export const StarlinkDetails = ({
  label,
  version,
  height,
  velocity,
}: starlinkDetailsProps) => {
  const { t } = useTranslation();

  return (
    <div>
      <h2>STARLINK</h2>
      <StyledInfoContainer>
        <StyledWrapper style={{ marginRight: "0.4rem" }}>
          <h4>{t("name")}</h4>
          <h4>{t("version")}</h4>
          <h4>{t("height")}</h4>
          <h4>{t("velocity")}</h4>
        </StyledWrapper>
        <StyledWrapper>
          <h4>{label}</h4>
          <h4>{version}</h4>
          <h4>{Number(height).toFixed(2)} km</h4>
          <h4>{Number(velocity).toFixed(2)} kms</h4>
        </StyledWrapper>
      </StyledInfoContainer>
    </div>
  );
};

type starlinkDetailsProps = {
  label: string;
  version: string;
  height: number;
  velocity: number;
};

const StyledInfoContainer = styled.div`
  display: flex;
`;

const StyledWrapper = styled(flexColumn)``;
