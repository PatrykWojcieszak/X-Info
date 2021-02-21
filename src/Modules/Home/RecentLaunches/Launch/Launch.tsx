import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

//COMPONENTS
import { Button } from "../../../Shared";

//STYLES
import styles from "./Launch.module.scss";
import noImage from "../../../../resources/images/noImage.png";

export const Launch = React.memo(
  ({ name, patch, date, success, id }: launchProps) => {
    const { t } = useTranslation();

    return (
      <Link to={`/launch/${id}`}>
        <div className={styles.Launch}>
          <img src={patch ? patch : noImage} alt="patch" loading="lazy" />
          <h3>{name}</h3>
          <div className={styles.Column}>
            <h4>{t("key", { date: new Date(date) })}</h4>
            {success != null ? (
              <FontAwesomeIcon
                style={{ color: success ? "#4BB543" : "#FA113D" }}
                icon={success ? "check-circle" : "times-circle"}
              />
            ) : null}
          </div>
          <Button name={t("showDetails")} styleType="primary" />
        </div>
      </Link>
    );
  }
);

type launchProps = {
  name: string;
  patch: string;
  date: string;
  success: boolean;
  id: string;
};
