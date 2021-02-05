import React from "react";
import { useTranslation } from "react-i18next";

//STYLES
import styles from "./Failures.module.scss";

//TYPES
import { Failure } from "../../../../Types";

export const Failures = ({ failures }: failuresProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.Failures}>
      <h4>{t("failures")}:</h4>
      <ul>
        {failures.map((failure, index) => (
          <li key={index}>{failure.reason}</li>
        ))}
      </ul>
    </div>
  );
};

type failuresProps = {
  failures: Failure[];
};
