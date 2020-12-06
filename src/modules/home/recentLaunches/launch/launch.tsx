import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "../../../shared/Button/Button";

import styles from "./Launch.module.scss";
import noImage from "../../../../resources/images/noImage.png";

const Launch = ({ name, patch, date, success }: launchProps) => {
  const dateParsed = new Date(date);

  return (
    <div className={styles.Launch}>
      <img src={patch !== null ? patch : noImage} alt="patch" />
      <div className={styles.Title}>
        <h3>{name}</h3>
        <FontAwesomeIcon
          style={{ color: success ? "#4BB543" : "#FA113D" }}
          icon={success ? "check-circle" : "times-circle"}
        />
      </div>
      <h4>{dateParsed.toDateString()}</h4>
      <Button name="SHOW DETAILS" />
    </div>
  );
};

type launchProps = {
  name: string;
  patch: string;
  date: string;
  success: boolean;
};

export default Launch;
