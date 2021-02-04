import React from "react";
import { useTranslation } from "react-i18next";

//COMPONENTS
import { InfoLine } from "../../Shared";

//STYLES
import styles from "./CoreList.module.scss";

//TYPES
import { Core } from "../../../Types";

export const CoreList = ({ coreList }: coreListProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.CoreList}>
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
    </div>
  );
};

type coreListProps = {
  coreList: Core[];
};
