import React from "react";
import { useTranslation } from "react-i18next";

//STYLES
import styles from "./SecondaryDetails.module.scss";

export const SecondaryDetails = ({
  launchSiteName,
  customers,
}: secondaryDetailsProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.SecondaryDetails}>
      <div className={styles.Element}>
        {launchSiteName && (
          <h4 className={styles.Title}>{t("launchSite")}: </h4>
        )}
        {customers?.length > 0 && (
          <h4 className={styles.Title}>{t("customer")}: </h4>
        )}
      </div>
      <div className={styles.Element}>
        {launchSiteName && <h4 className={styles.Value}>{launchSiteName}</h4>}
        {customers?.length > 0 && (
          <h4 className={styles.Value}>
            {customers.map((customer, index) => (
              <span key={index}>{customer}, </span>
            ))}
          </h4>
        )}
      </div>
    </div>
  );
};

type secondaryDetailsProps = {
  launchSiteName: string;
  customers: string[];
};
