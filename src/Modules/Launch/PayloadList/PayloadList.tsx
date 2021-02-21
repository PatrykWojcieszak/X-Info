import React from "react";
import { useTranslation } from "react-i18next";

//COMPONENTS
import { InfoLine } from "../../Shared";

//STYLES
import styles from "./PayloadList.module.scss";

//TYPES
import { Payload } from "../../../Types";

export const PayloadList = ({ payloadList }: payloadListProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.PayloadList}>
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
    </div>
  );
};

type payloadListProps = {
  payloadList: Payload[];
};
