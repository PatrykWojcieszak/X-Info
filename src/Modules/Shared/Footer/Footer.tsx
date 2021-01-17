import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

//STYLES
import styles from "./Footer.module.scss";

const Footer = () => {
  const { i18n } = useTranslation();

  const [selectedLang, setSelectedLang] = useState(i18n.language);
  const [showLngSelector, setShowLngSelector] = useState(false);

  const changeLanguageHandler = (lng) => {
    setSelectedLang(lng);
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.Footer}>
      <h3>
        Created by:{" "}
        <a
          href="https://github.com/PatrykWojcieszak"
          target="_blank"
          rel="noopener noreferrer">
          {" "}
          Patryk Wojcieszak
        </a>{" "}
        using{" "}
        <a
          href="https://github.com/r-spacex/SpaceX-API"
          target="_blank"
          rel="noopener noreferrer">
          Spacex-Api
        </a>
      </h3>
      <div className={styles.LanguageSelector}>
        <FontAwesomeIcon
          icon="globe-americas"
          onClick={() => setShowLngSelector(!showLngSelector)}
        />
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
        {selectedLang}
      </div>
    </div>
  );
};

export default Footer;
