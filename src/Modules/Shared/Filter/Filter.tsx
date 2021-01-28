import React, { useState } from "react";
import { useTranslation } from "react-i18next";

//COMPONENTS
import { CustomDatePicker, Dropdown, Button } from "../";

//STYLES
import styles from "./Filter.module.scss";

//TYPES
import { DropdownElement } from "../../../Types";

export const Filter = ({
  rocketsFilterList,
  launchSitesFilterList,
  statusesFilterList,
  rocketSelected,
  launchSiteSelected,
  launchStatusSelected,
  setDateFrom,
  setDateTo,
  dateFrom,
  dateTo,
}: filterProps) => {
  const [showDDRockets, setShowDDRockets] = useState(false);
  const [showDDLaunchSites, setShowDDLaunchSites] = useState(false);
  const [showDDStatuses, setShowDDStatuses] = useState(false);
  const { t } = useTranslation();

  const clearFilterHandler = () => {
    rocketSelected(0);
    launchSiteSelected(0);
    launchStatusSelected(0);
    setDateFrom(new Date("2006"));
    setDateTo(new Date(new Date().setFullYear(new Date().getFullYear() + 1)));
  };

  return (
    <div className={styles.Filter}>
      <div className={styles.OptionWrapper}>
        <h3>{t("rocket")}:</h3>
        <Dropdown
          title={rocketsFilterList.find((x) => x.selected)?.title}
          list={rocketsFilterList}
          isListOpen={showDDRockets}
          styleType="secondary"
          toggleList={(isOpen: boolean) => setShowDDRockets(isOpen)}
          selectedElement={(id: number) => rocketSelected(id)}
        />
      </div>
      <div className={styles.OptionWrapper}>
        <h3>{t("dateFrom")}:</h3>
        <CustomDatePicker
          date={dateFrom}
          dateChanged={(date) => setDateFrom(date)}
        />
      </div>
      <div className={styles.OptionWrapper}>
        <h3>{t("dateTo")}:</h3>
        <CustomDatePicker
          date={dateTo}
          dateChanged={(date) => setDateTo(date)}
        />
      </div>
      <div className={styles.OptionWrapper}>
        <h3>{t("launchSite")}:</h3>
        <Dropdown
          title={launchSitesFilterList.find((x) => x.selected)?.title}
          list={launchSitesFilterList}
          isListOpen={showDDLaunchSites}
          styleType="secondary"
          toggleList={(isOpen: boolean) => setShowDDLaunchSites(isOpen)}
          selectedElement={(id: number) => launchSiteSelected(id)}
        />
      </div>
      <div className={styles.OptionWrapper}>
        <h3 style={{ textTransform: "uppercase" }}>{t("status")}:</h3>
        <Dropdown
          title={statusesFilterList.find((x) => x.selected)?.title}
          list={statusesFilterList}
          isListOpen={showDDStatuses}
          styleType="secondary"
          toggleList={(isOpen: boolean) => setShowDDStatuses(isOpen)}
          selectedElement={(id: number) => launchStatusSelected(id)}
        />
      </div>
      <div className={styles.BtnWrapper}>
        <Button
          clicked={clearFilterHandler}
          name={t("clearFilter")}
          styleType="secondary"
        />
      </div>
    </div>
  );
};

type filterProps = {
  rocketsFilterList: DropdownElement[];
  launchSitesFilterList: DropdownElement[];
  statusesFilterList: DropdownElement[];
  rocketSelected: (id: number) => void;
  launchSiteSelected: (id: number) => void;
  launchStatusSelected: (id: number) => void;
  setDateFrom: (dateFrom: Date) => void;
  setDateTo: (dateTo: Date) => void;
  dateFrom: Date;
  dateTo: Date;
};
