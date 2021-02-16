import React from "react";
import { Launch } from "../../../../Types";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

//STYLES
import styles from "./Missions.module.scss";

export const Missions = ({ missions }: missionsProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.MissionsContainer}>
      <h3 style={{ marginLeft: "1.1rem" }}>{t("missions")}</h3>
      <div className={styles.MissionListWrapper}>
        {missions.map((launch, index) => (
          <Link key={index} to={`/launch/${launch.id}`}>
            <div className={styles.Mission}>
              <h3>{launch.name}</h3>
              <h4>
                {t("key", { date: new Date(launch.date_utc) })} | #
                {launch.flight_number}
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

type missionsProps = {
  missions: Launch[];
};
