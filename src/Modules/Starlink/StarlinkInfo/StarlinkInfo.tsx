import React from "react";

//STYLES
import styles from "./StarlinkInfo.module.scss";

const StarlinkInfo = ({ starlink }: starlinkProps) => {
  console.log("info");
  return (
    <div className={styles.StarlinkInfo}>
      <h1>Test</h1>
    </div>
  );
};

type starlinkProps = {
  starlink: any;
};

export default React.memo(StarlinkInfo);
