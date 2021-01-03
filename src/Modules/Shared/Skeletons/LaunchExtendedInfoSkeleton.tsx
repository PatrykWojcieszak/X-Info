import React from "react";

//COMPONENTS
import Shimmer from "./Shimmer/Shimmer";
import SkeletonElement from "./SkeletonElement";

//STYLES
import styles from "./Skeletons.module.scss";

const LaunchExtendedInfoSkeleton = () => {
  return (
    <div className={styles.SkeletonWrapper}>
      <div className={styles.LaunchExtendedInfoSkeleton}>
        <div className={styles.Left}>
          <SkeletonElement type="Avatar" />
          <SkeletonElement type="Title" />
        </div>
        <div className={styles.Right}>
          <SkeletonElement type="Title" />
          <SkeletonElement type="Text" />
          <div className={styles.Details}>
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

export default LaunchExtendedInfoSkeleton;
