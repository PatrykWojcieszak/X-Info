import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

//COMPONENTS
import Button from "../../../Shared/Button/Button";

//STYLES
import styles from "./Launch.module.scss";
import noImage from "../../../../resources/images/noImage.png";

const Launch = ({ flightNumber, name, patch, date, success }: launchProps) => {
  const { t } = useTranslation();

  return (
    <Link to={`/launch/${flightNumber}`}>
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
};

type launchProps = {
  flightNumber: number;
  name: string;
  patch: string;
  date: string;
  success: boolean;
};

export default React.memo(Launch);
