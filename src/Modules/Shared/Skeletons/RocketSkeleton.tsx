import React from "react";

//COMPONENTS
import Shimmer from "./Shimmer/Shimmer";
import SkeletonElement from "./SkeletonElement";

//STYLES
import styles from "./Skeletons.module.scss";

const RocketSkeleton = () => {
  return (
    <div className={styles.SkeletonWrapper}>
      <div className={styles.RocketSkeleton}>
        <div className={styles.Left}>
          <SkeletonElement type="Box" />
        </div>
        <div className={styles.Right}>
          <div className={styles.InfoElement}>
            <SkeletonElement type="Text" />
            <SkeletonElement type="Text" />
          </div>
          <div className={styles.InfoElement}>
            <SkeletonElement type="Title" />
          </div>
          <div className={styles.InfoElement}>
            <SkeletonElement type="Text" />
            <SkeletonElement type="Text" />
            <SkeletonElement type="Text" />
            <SkeletonElement type="Text" />
            <SkeletonElement type="Text" />
            <SkeletonElement type="Text" />
            <SkeletonElement type="Text" />
            <SkeletonElement type="Text" />
          </div>
        </div>
      </div>
      <Shimmer />
    </div>
  );
};

export default RocketSkeleton;
