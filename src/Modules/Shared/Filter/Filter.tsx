import React from "react";
import { DropdownElement } from "../../../Types";
import Dropdown from "../Dropdown/Dropdown";

import styles from "./Filter.module.scss";

const launchesFilterPast = [
  {
    id: 0,
    title: "UPCOMING LAUNCHES",
    selected: false,
    key: "launchesType",
  },
  {
    id: 1,
    title: "PAST LAUNCHES",
    selected: true,
    key: "launchesType",
  },
  {
    id: 2,
    title: "BOOSTERS",
    selected: false,
    key: "launchesType",
  },
];

const toggleLaunchTypeHandler = (isOpen: boolean) => {};

const launchTypeFilterSelectedHandler = (element: DropdownElement) => {};

const Filter = (props) => {
  return (
    <div className={styles.Filter}>
      <div className={styles.HeaderWrapper}>
        <h4>FILTER</h4>
      </div>
      <div className={styles.OptionsContainer}>
        <div className={styles.OptionWrapper}>
          <h3>ROCKET:</h3>
          <Dropdown
            title={launchesFilterPast.find((x) => x.selected)?.title}
            list={launchesFilterPast}
            isListOpen={false}
            styleType="secondary"
            toggleList={(isOpen: boolean) => toggleLaunchTypeHandler(isOpen)}
            selectedElement={(element: DropdownElement) =>
              launchTypeFilterSelectedHandler(element)
            }
          />
        </div>
        <div className={styles.OptionWrapper}>
          <h3>DATE FROM:</h3>
          <Dropdown
            title={launchesFilterPast.find((x) => x.selected)?.title}
            list={launchesFilterPast}
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
            title={launchesFilterPast.find((x) => x.selected)?.title}
            list={launchesFilterPast}
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
            title={launchesFilterPast.find((x) => x.selected)?.title}
            list={launchesFilterPast}
            isListOpen={false}
            styleType="secondary"
            toggleList={(isOpen: boolean) => toggleLaunchTypeHandler(isOpen)}
            selectedElement={(element: DropdownElement) =>
              launchTypeFilterSelectedHandler(element)
            }
          />
        </div>
        <div className={styles.OptionWrapper}>
          <h3>STATUS:</h3>
          <Dropdown
            title={launchesFilterPast.find((x) => x.selected)?.title}
            list={launchesFilterPast}
            isListOpen={false}
            styleType="secondary"
            toggleList={(isOpen: boolean) => toggleLaunchTypeHandler(isOpen)}
            selectedElement={(element: DropdownElement) =>
              launchTypeFilterSelectedHandler(element)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
