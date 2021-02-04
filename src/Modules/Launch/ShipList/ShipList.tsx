import React from "react";
import { useTranslation } from "react-i18next";

//COMPONENTS
import { Ship } from "./Ship/Ship";

//STYLES
import styles from "./ShipList.module.scss";

//TYPES
import { Ship as ShipType } from "../../../Types";

export const ShipList = ({ shipList }: shipListProps) => {
  let shipListArr = <></>;
  const { t } = useTranslation();

  if (shipList.length > 0)
    shipListArr = (
      <div className={styles.ShipList}>
        <h2>{t("usedShips")}</h2>
        <div className={styles.Content}>
          {shipList.map((ship, index) => (
            <Ship key={index} name={ship.name} img={ship.image} />
          ))}
        </div>
      </div>
    );

  return <>{shipListArr}</>;
};

type shipListProps = {
  shipList: ShipType[];
};
