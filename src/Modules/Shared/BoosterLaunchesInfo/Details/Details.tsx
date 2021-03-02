import React from "react";
import { useTranslation } from "react-i18next";

//STYLES
import styles from "./Details.module.scss";

//TYPES
import { Launch } from "../../../../Types";
import { InfoElement } from "./InfoElement/InfoElement";
import styled from "styled-components/macro";
import { device } from "../../../../resources/styles/helpers/breakpoints";

export const Details = ({
  block,
  serial,
  status,
  reuse_count,
  launches,
}: detailsProps) => {
  const { t } = useTranslation();

  return (
    <StyledDetails>
      <InfoElement title={t("block")} value={block.toString()} />
      <InfoElement title={t("serialNumber")} value={serial} />
      <InfoElement
        title={t("launches")}
        value={
          reuse_count ? `${reuse_count + 1}` : launches.length > 0 ? "1" : "0"
        }
      />
      <InfoElement title={t("status")} value={status} />
    </StyledDetails>
  );
};

type detailsProps = {
  block: number;
  serial: string;
  status: string;
  reuse_count: number;
  launches: Launch[];
};

const StyledDetails = styled.div`
  padding: 1rem;
  border-radius: 1rem;
  background-color: $foreground;
  box-shadow: 0px 0px 16px 25px rgba(0, 0, 0, 0.55);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(80px, 20px);
  font-size: 1rem;
  font-weight: 300;
  min-width: 100%;
  max-width: 100%;

  @media ${device.tablet} {
    min-width: 320px;
    max-width: 320px;
  }
`;
