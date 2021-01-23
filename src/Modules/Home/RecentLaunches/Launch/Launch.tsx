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
  const dateParsed = new Date(date);

  return (
    <Link to={`/launch/${flightNumber}`}>
      <div className={styles.Launch}>
        <img src={patch ? patch : noImage} alt="patch" loading="lazy" />
        <h3>{name}</h3>
        <div className={styles.Column}>
          <h4>{dateParsed.toDateString()}</h4>
          <FontAwesomeIcon
            style={{ color: success ? "#4BB543" : "#FA113D" }}
            icon={success ? "check-circle" : "times-circle"}
          />
        </div>
        <Button name="SHOW DETAILS" styleType="primary" />
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
