import React from "react";
import { useTranslation } from "react-i18next";

//STYLES
import styles from "./Header.module.scss";

export const Header = ({ description, active, rocketName }: headerProps) => {
  const { t } = useTranslation();

  let rocketStatus = { name: t("statusActive"), color: "#4BB543" };

  if (!active) rocketStatus = { name: t("statusInactive"), color: "#FA113D" };
  if (rocketName === "Falcon 1")
    rocketStatus = { name: t("statusRetired"), color: "#005288" };
  if (rocketName === "Starship")
    rocketStatus = { name: t("statusInDevelopment"), color: "#005288" };

  return (
    <div className={styles.Header}>
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
    </div>
  );
};

type headerProps = {
  description: string;
  active: boolean;
  rocketName: string;
};
