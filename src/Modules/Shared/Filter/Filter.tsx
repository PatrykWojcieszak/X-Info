import React, { useState } from "react";
import { DropdownElement } from "../../../Types";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";

import styles from "./Filter.module.scss";

const Filter = ({
  rocketsFilterList,
  launchSitesFilterList,
  statusesFilterList,
}: filterProps) => {
  const [showDDRockets, setShowDDRockets] = useState(false);
  const [showDDLaunchSites, setShowDDLaunchSites] = useState(false);
  const [showDDStatuses, setShowDDStatuses] = useState(false);

  const toggleLaunchTypeHandler = (isOpen: boolean) => {};
  const launchTypeFilterSelectedHandler = (element: DropdownElement) => {};

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
            launchTypeFilterSelectedHandler(element)
          }
        />
      </div>
      <div className={styles.OptionWrapper}>
        <h3>DATE FROM:</h3>
        <Dropdown
          title={launchSitesFilterList.find((x) => x.selected)?.title}
          list={launchSitesFilterList}
          isListOpen={false}
          styleType="secondary"
          toggleList={(isOpen: boolean) => toggleLaunchTypeHandler(isOpen)}
          selectedElement={(element: DropdownElement) =>
            launchTypeFilterSelectedHandler(element)
          }
        />
      </div>
      <div className={styles.OptionWrapper}>
        <h3>DATE TO:</h3>
        <Dropdown
          title={launchSitesFilterList.find((x) => x.selected)?.title}
          list={launchSitesFilterList}
          isListOpen={false}
          styleType="secondary"
          toggleList={(isOpen: boolean) => toggleLaunchTypeHandler(isOpen)}
          selectedElement={(element: DropdownElement) =>
            launchTypeFilterSelectedHandler(element)
          }
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
            launchTypeFilterSelectedHandler(element)
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
            launchTypeFilterSelectedHandler(element)
          }
        />
      </div>
      <div className={styles.BtnWrapper}>
        <Button name="CLEAR FILTER" />
      </div>
    </div>
  );
};

type filterProps = {
  rocketsFilterList: DropdownElement[];
  launchSitesFilterList: DropdownElement[];
  statusesFilterList: DropdownElement[];
};

export default Filter;
