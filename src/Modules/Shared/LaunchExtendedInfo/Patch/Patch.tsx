import React from "react";
import { useTranslation } from "react-i18next";

//COMPONENTS
import { Button } from "../..";

//STYLES
import styles from "./Patch.module.scss";
import noImage from "../../../../resources/images/noImage.png";

export const Patch = ({ patchImg, showMoreDetailsButton }: patchProps) => {
  const { t } = useTranslation();

  return (
    <>
      <img
        className={styles.Patch}
        src={patchImg ? patchImg : noImage}
        alt="mission patch"
      />
      {showMoreDetailsButton && (
        <Button styleType="primary" name={t("moreDetails")} />
      )}
    </>
  );
};

type patchProps = {
  patchImg: string;
  showMoreDetailsButton: boolean;
};
