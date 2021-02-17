import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

//STYLES
import styles from "./Header.module.scss";

export const Header = ({
  title,
  isListOpen,
  toggleList,
  styleType,
}: headerProps) => {
  const { t } = useTranslation();

  const ddStyles = [styles.HeaderWrapper];

  if (styleType === "primary") ddStyles.push(styles.Primary);
  if (styleType === "secondary") ddStyles.push(styles.Secondary);

  return (
    <div className={ddStyles.join(" ")} onClick={() => toggleList(!isListOpen)}>
      <h4>{t(title)}</h4>
      {isListOpen ? (
        <FontAwesomeIcon icon="angle-up" />
      ) : (
        <FontAwesomeIcon icon="angle-down" />
      )}
    </div>
  );
};

type headerProps = {
  title: string;
  isListOpen: boolean;
  toggleList: (isListOpen: boolean) => void;
  styleType: string;
};
