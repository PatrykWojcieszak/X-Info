import React, { useState } from "react";
import { DropdownElement } from "../../../Types";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import DatePicker from "react-datepicker";

//STYLES
import styles from "./Filter.module.scss";
import "react-datepicker/dist/react-datepicker.css";

const Filter = ({
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
  const [startDate, setStartDate] = useState(new Date());

  const DateFromInput = ({ value, onClick }) => (
    <div className={styles.DatePicker} onClick={onClick}>
      <h3>{value}</h3>
    </div>
  );

  const DateToInput = ({ value, onClick }) => (
    <div className={styles.DatePicker} onClick={onClick}>
      <h3>{value}</h3>
    </div>
  );

  return (
    <div className={styles.Filter}>
      <div className={styles.OptionWrapper}>
        <h3>ROCKET:</h3>
        <Dropdown
          title={rocketsFilterList.find((x) => x.selected)?.title}
          list={rocketsFilterList}
          isListOpen={showDDRockets}
          styleType="secondary"
          toggleList={(isOpen: boolean) => setShowDDRockets(isOpen)}
          selectedElement={(element: DropdownElement) =>
            rocketSelected(element)
          }
        />
      </div>
      <div className={styles.OptionWrapper}>
        <h3>DATE FROM:</h3>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          customInput={<DateFromInput value={startDate} onClick={() => {}} />}
        />
      </div>
      <div className={styles.OptionWrapper}>
        <h3>DATE TO:</h3>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          customInput={<DateToInput value={startDate} onClick={() => {}} />}
        />
      </div>
      <div className={styles.OptionWrapper}>
        <h3>LAUNCH SITE:</h3>
        <Dropdown
          title={launchSitesFilterList.find((x) => x.selected)?.title}
          list={launchSitesFilterList}
          isListOpen={showDDLaunchSites}
          styleType="secondary"
          toggleList={(isOpen: boolean) => setShowDDLaunchSites(isOpen)}
          selectedElement={(element: DropdownElement) =>
            launchSiteSelected(element)
          }
        />
      </div>
      <div className={styles.OptionWrapper}>
        <h3>STATUS:</h3>
        <Dropdown
          title={statusesFilterList.find((x) => x.selected)?.title}
          list={statusesFilterList}
          isListOpen={showDDStatuses}
          styleType="secondary"
          toggleList={(isOpen: boolean) => setShowDDStatuses(isOpen)}
          selectedElement={(element: DropdownElement) =>
            launchStatusSelected(element)
          }
        />
      </div>
      <div className={styles.BtnWrapper}>
        <Button name="CLEAR FILTER" styleType="secondary" />
      </div>
    </div>
  );
};

type filterProps = {
  rocketsFilterList: DropdownElement[];
  launchSitesFilterList: DropdownElement[];
  statusesFilterList: DropdownElement[];
  rocketSelected: (element: DropdownElement) => void;
  launchSiteSelected: (element: DropdownElement) => void;
  launchStatusSelected: (element: DropdownElement) => void;
  setDateFrom: (dateFrom: Date) => void;
  setDateTo: (dateTo: Date) => void;
  dateFrom: Date;
  dateTo: Date;
};

export default Filter;
