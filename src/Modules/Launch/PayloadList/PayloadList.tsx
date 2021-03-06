import React from "react";
import { useTranslation } from "react-i18next";

//COMPONENTS
import { InfoLine } from "../../Shared";

//TYPES
import { Payload } from "../../../Types";
import styled from "styled-components/macro";
import { device } from "../../../resources/styles/helpers/breakpoints";
import { flexColumn } from "../../../resources/styles/helpers/mixins";

export const PayloadList = ({ payloadList }: payloadListProps) => {
  const { t } = useTranslation();

  return (
    <StyledCoreList>
      {payloadList.map((payload, index) => (
        <div key={index}>
          <h2>
            {t("payload")} #{index + 1}
          </h2>
          {payload.name && (
            <InfoLine title={t("name")} value={`${payload.name}`} />
          )}
          {payload.customers?.length > 0 && (
            <InfoLine
              title={t("customer")}
              value={`${[...payload.customers]}, `}
            />
          )}
          {payload.manufacturers.length !== 0 ? (
            <InfoLine
              title={t("manufacturer")}
              value={`${payload.manufacturers}`}
            />
          ) : null}
          {payload.type && (
            <InfoLine title={t("type")} value={`${payload.type}`} />
          )}
          {(payload.mass_kg || payload.mass_lbs) && (
            <InfoLine
              title={t("mass")}
              value={`${payload.mass_kg} kg | ${payload.mass_lbs} lb`}
            />
          )}
          {payload.orbit && (
            <InfoLine title={t("orbit")} value={`${payload.orbit}`} />
          )}
        </div>
      ))}
    </StyledCoreList>
  );
};

type payloadListProps = {
  payloadList: Payload[];
};

const StyledCoreList = styled(flexColumn)`
  width: 100%;
  margin-bottom: 2rem;

  h2 {
    font-weight: 100;
    color: ${({ theme }) => theme.colors?.fontPrimary};
    font-size: 1.5rem;
  }

  @media ${device.tablet} {
    font-size: 2rem;
  }
`;
