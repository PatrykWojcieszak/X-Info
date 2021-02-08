import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

//STYLES
import styles from "./LngSelector.module.scss";

//HOOK
import { useClickOutside, useLocalStorage } from "../../../../Hooks";

export const LngSelector = () => {
  const { i18n } = useTranslation();
  const [selectedLng, setSelectedLng] = useLocalStorage("lng", i18n.language);
  const [showLngSelector, setShowLngSelector] = useState(false);

  useEffect(() => {
    i18n.changeLanguage(selectedLng);
  }, [selectedLng, i18n]);

  const changeLanguageHandler = (lng) => {
    setSelectedLng(lng);
    i18n.changeLanguage(lng);

    setShowLngSelector(false);
  };

  const closeShowLngSelectorHandler = () => {
    setShowLngSelector(false);
  };

  const wrapperRef = useRef(null);
  useClickOutside(wrapperRef, closeShowLngSelectorHandler);

  return (
    <div ref={wrapperRef} className={styles.LanguageSelector}>
      <div
        style={{ display: "flex", alignItems: "center" }}
        onClick={() => setShowLngSelector(!showLngSelector)}>
        <FontAwesomeIcon icon="globe-americas" />
        {selectedLng}
      </div>
      <div
        className={
          showLngSelector
            ? [styles.LanguagesWrapper, styles.Show].join(" ")
            : styles.LanguagesWrapper
        }>
        <h4
          className={selectedLng === "en" ? styles.Selected : ""}
          onClick={() => changeLanguageHandler("en")}>
          English - EN
        </h4>
        <h4
          className={selectedLng === "pl" ? styles.Selected : ""}
          onClick={() => changeLanguageHandler("pl")}>
          Polish - PL
        </h4>
      </div>
    </div>
  );
};
