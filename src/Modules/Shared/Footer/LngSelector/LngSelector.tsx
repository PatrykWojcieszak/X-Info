import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

//STYLES
import styles from "./LngSelector.module.scss";

//HOOK
import { useClickOutside } from "../../../../Hooks/useClickOutside";

export const LngSelector = (props) => {
  const { i18n } = useTranslation();

  const [selectedLang, setSelectedLang] = useState(i18n.language);
  const [showLngSelector, setShowLngSelector] = useState(false);

  const changeLanguageHandler = (lng) => {
    setSelectedLang(lng);
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
        {selectedLang}
      </div>
      <div
        className={
          showLngSelector
            ? [styles.LanguagesWrapper, styles.Show].join(" ")
            : styles.LanguagesWrapper
        }>
        <h4
          className={selectedLang === "en" ? styles.Selected : ""}
          onClick={() => changeLanguageHandler("en")}>
          English - EN
        </h4>
        <h4
          className={selectedLang === "pl" ? styles.Selected : ""}
          onClick={() => changeLanguageHandler("pl")}>
          Polish - PL
        </h4>
      </div>
    </div>
  );
};
