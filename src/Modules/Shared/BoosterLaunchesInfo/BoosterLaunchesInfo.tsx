import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

//MODELS
import { Launch } from "../../../Types";

//STYLES
import styles from "./BoosterLaunchesInfo.module.scss";

const BoosterLaunchesInfo = ({
  serial,
  block,
  status,
  reuse_count,
  launches,
}: boostersType) => {
  const { t } = useTranslation();

  return (
    <div className={styles.Booster}>
      <div className={styles.BoosterInfoContainer}>
        <div className={[styles.InfoElement, styles.One].join(" ")}>
          <h3>{t("block")}</h3>
          <h4>{block}</h4>
        </div>
        <div className={[styles.InfoElement, styles.Two].join(" ")}>
          <h3>{t("serialNumber")}</h3>
          <h4>{serial}</h4>
        </div>
        <div className={[styles.InfoElement, styles.Three].join(" ")}>
          <h3>{t("launches")}</h3>
          <h4>{reuse_count ? reuse_count + 1 : launches.length > 0 ? 1 : 0}</h4>
        </div>
        <div className={[styles.InfoElement, styles.Four].join(" ")}>
          <h3>{t("status")}</h3>
          <h4>{status}</h4>
        </div>
      </div>
      <div className={styles.MissionsContainer}>
        <h3 style={{ marginLeft: "1.1rem" }}>{t("missions")}</h3>
        <div className={styles.MissionListWrapper}>
          {launches.map((launch, index) => (
            <Link key={index} to={`/launch/${launch.flight_number}`}>
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
    </div>
  );
};

type boostersType = {
  block: number;
  serial: string;
  status: string;
  reuse_count: number;
  launches: Launch[];
};

export default BoosterLaunchesInfo;
