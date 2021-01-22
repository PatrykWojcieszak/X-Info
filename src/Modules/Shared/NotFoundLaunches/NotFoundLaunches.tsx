import React from "react";

//STYLES
import styles from "./NotFoundLaunches.module.scss";

//IMAGES
import sadRocket from "../../../resources/images/sadRocket.png";

const NotFoundLaunches = (props) => {
  return (
    <div className={styles.NotFound}>
      <img src={sadRocket} alt="sad rocket" />
      <h2>There is no launches!</h2>
    </div>
  );
};

export default React.memo(NotFoundLaunches);
