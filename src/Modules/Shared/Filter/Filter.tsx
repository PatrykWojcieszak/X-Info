import React from "react";
import { useTranslation } from "react-i18next";

//COMPONENTS
import { Button } from "../";

//STYLES
import styles from "./Filter.module.scss";

//TYPES
import { FilterElement } from "../../../Types";

export const Filter = ({ filters, clearFilter }: filterProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.Filter}>
      {filters.map((filter) => (
        <div className={styles.OptionWrapper}>
          <h3 style={{ textTransform: "uppercase" }}>{t(filter.name)}:</h3>
          {filter.element}
        </div>
      ))}
      <div className={styles.BtnWrapper}>
        <Button
          clicked={clearFilter}
          name={t("clearFilter")}
          styleType="secondary"
        />
      </div>
    </div>
  );
};

type filterProps = {
  filters: FilterElement[];
  clearFilter: () => void;
};
