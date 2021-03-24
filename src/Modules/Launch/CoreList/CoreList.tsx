import React from "react";
import { useTranslation } from "react-i18next";

//COMPONENTS
import { InfoLine } from "../../Shared";

//TYPES
import { Core } from "../../../Types";
import { flexColumn } from "../../../resources/styles/helpers/mixins";
import styled from "styled-components/macro";
import { device } from "../../../resources/styles/helpers/breakpoints";

export const CoreList = ({ coreList }: coreListProps) => {
  const { t } = useTranslation();

  return (
    <StyledCoreList>
      {coreList.map(
        (core, index) =>
          core.landpad && (
            <div key={index} style={{ marginBottom: "1.5rem" }}>
              <h2>
                {t("core")} #{index + 1}
              </h2>
              <InfoLine
                title={t("landing")}
                value={
                  core.landing_success
                    ? t("launchSuccessful")
                    : t("launchFailure")
                }
              />
              {core.landing_type && (
                <InfoLine title={t("landingType")} value={core.landing_type} />
              )}
              {core.landpad.name && (
                <InfoLine title={t("landingPad")} value={core.landpad.name} />
              )}
              <InfoLine
                title={t("reused")}
                value={core.reused ? t("yes") : t("no")}
              />
              {core.flight && (
                <InfoLine title={t("flights")} value={`${core.flight}`} />
              )}
            </div>
          )
      )}
    </StyledCoreList>
  );
};

type coreListProps = {
  coreList: Core[];
};

const StyledCoreList = styled(flexColumn)`
  width: 100%;
  margin-bottom: 2rem;

  h2 {
    font-weight: 300;
    color: ${({ theme }) => theme.colors?.fontPrimary};
    font-size: 1.5rem;
  }

  @media ${device.tablet} {
    h2 {
      font-size: 2rem;
    }
  }
`;
