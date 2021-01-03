import React from "react";

import styles from "./Page404.module.scss";
import sadRocket from "../../resources/images/sadRocket.png";
import Button from "../Button/Button";

const Page404 = (props) => {
  return (
    <div className={styles.Page404}>
      <img src={sadRocket} alt="sad rocket" />
      <h2>There is no info about the launch yet!</h2>
      <Button name="GET BACK TO EARTH" />
    </div>
  );
};

export default Page404;
