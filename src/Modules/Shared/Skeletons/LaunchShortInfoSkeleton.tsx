import React from "react";

//COMPONENTS
import { Shimmer } from "./Shimmer/Shimmer";
import { SkeletonElement } from "./SkeletonElement";

//STYLES
import styles from "./Skeletons.module.scss";

export const LaunchShortInfoSkeleton = () => {
  return (
    <div className={styles.SkeletonWrapper}>
      <div className={styles.LaunchShortInfoSkeleton}>
        <div className={styles.Row}>
          <SkeletonElement type="Title" />
          <SkeletonElement type="Title" />
          <SkeletonElement type="Title" />
        </div>
        <div style={{ width: "60%" }}>
          <SkeletonElement type="Text" />
          <SkeletonElement type="Text" />
        </div>
      </div>
      <Shimmer />
    </div>
  );
};
