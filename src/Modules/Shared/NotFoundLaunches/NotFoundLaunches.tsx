import React from "react";
import { useTranslation } from "react-i18next";

//STYLES
import styles from "./NotFoundLaunches.module.scss";

//IMAGES
import sadRocket from "../../../resources/images/sadRocket.png";

const NotFoundLaunches = (props) => {
  const { t } = useTranslation();

  return (
    <div className={styles.NotFound}>
      <img src={sadRocket} alt="sad rocket" />
      <h2>{t("launchesNotFound")}!</h2>
    </div>
  );
};

export default React.memo(NotFoundLaunches);
