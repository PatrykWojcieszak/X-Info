import React from "react";
import { useTranslation } from "react-i18next";

//STYLES
import styles from "./LaunchName.module.scss";

export const LaunchName = React.memo(
  ({ launchName, dateLocal }: launchNameProps) => {
    const { t } = useTranslation();
    console.log("render");
    const isAfterLaunch = (): boolean => {
      if (new Date() > new Date(dateLocal)) return true;
      else return false;
    };

    return (
      <div className={styles.LaunchNameWrapper}>
        <h2>{isAfterLaunch() ? t("currentLaunch") : t("nextLaunchTitle")}: </h2>
        <h2 className={styles.LaunchName}>{launchName}</h2>
      </div>
    );
  }
);

type launchNameProps = {
  launchName: string;
  dateLocal: string;
};
