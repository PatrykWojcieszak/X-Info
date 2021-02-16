import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

//STYLES
import styles from "./MissionDetails.module.scss";

export const MissionDetails = ({
  flightNumber,
  name,
  dateUtc,
  id,
}: missionDetailsProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.MissionDetails}>
      <h2>{t("launch")}</h2>
      <Link to={`launch/${id}`}>
        <div className={styles.LaunchInfoWrapper}>
          <h3>{name}</h3>
          <h4>
            {t("key", { date: new Date(dateUtc) })} | #{flightNumber}
          </h4>
        </div>
      </Link>
    </div>
  );
};

type missionDetailsProps = {
  flightNumber: number;
  name: string;
  dateUtc: string;
  id: string;
};
