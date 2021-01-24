import React from "react";
import { useTranslation } from "react-i18next";

//STYLES
import styles from "./Ship.module.scss";

const Ship = ({ name, img }: shipProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.Ship}>
      <img src={img} alt="ship" loading="lazy" />
      <h3>
        {t("name")}: <span>{name}</span>
      </h3>
    </div>
  );
};

type shipProps = {
  name: string;
  img: string;
};

export default React.memo(Ship);
