import React from "react";
import { useTranslation } from "react-i18next";

//STYLES
import styles from "./SecondaryDetails.module.scss";

export const SecondaryDetails = ({
  launchSiteName,
  customer,
}: secondaryDetailsProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.SecondaryDetails}>
      <div className={styles.Element}>
        {launchSiteName && (
          <h4 className={styles.Title}>{t("launchSite")}: </h4>
        )}
        {customer && <h4 className={styles.Title}>{t("customer")}: </h4>}
      </div>
      <div className={styles.Element}>
        {launchSiteName && <h4 className={styles.Value}>{launchSiteName}</h4>}
        {customer && <h4 className={styles.Value}>{customer}</h4>}
      </div>
    </div>
  );
};

type secondaryDetailsProps = {
  launchSiteName: string;
  customer: string;
};
