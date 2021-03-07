import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

//HOOK
import { useClickOutside, useLocalStorage } from "../../../../Hooks";
import styled from "styled-components/macro";

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
    <StyledLanguageSelector ref={wrapperRef}>
      <div
        style={{ display: "flex", alignItems: "center" }}
        onClick={() => setShowLngSelector(!showLngSelector)}>
        <FontAwesomeIcon icon="globe-americas" />
        {selectedLng}
      </div>
      <StyledLanguagesWrapper show={showLngSelector}>
        <StyledLanguageName
          selected={selectedLng === "en" ? true : false}
          onClick={() => changeLanguageHandler("en")}>
          English - EN
        </StyledLanguageName>
        <StyledLanguageName
          selected={selectedLng === "pl" ? true : false}
          onClick={() => changeLanguageHandler("pl")}>
          Polish - PL
        </StyledLanguageName>
      </StyledLanguagesWrapper>
    </StyledLanguageSelector>
  );
};

const StyledLanguageSelector = styled.div`
  margin-left: 1.5rem;
  color: ${({ theme }) => theme.colors?.fontPrimary};
  cursor: pointer;
  position: relative;

  svg {
    font-size: 1.4rem;
    margin-right: 0.6rem;
  }
`;

const StyledLanguagesWrapper = styled.div<{ show: boolean }>`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: -70px;
  background-color: ${({ theme }) => theme.colors?.foreground};
  border-radius: 0.5rem;
  width: 120px;

  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  opacity: ${({ show }) => (show ? "1" : "0")};
`;

const StyledLanguageName = styled.h4<{ selected: boolean }>`
  color: ${({ theme, selected }) =>
    selected ? theme.colors?.blue : theme.colors?.fontPrimary};
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors?.background : theme.colors?.foreground};
  padding: 0.4rem 0.8rem;
  border-radius: 0.2rem;
  cursor: pointer;
`;
