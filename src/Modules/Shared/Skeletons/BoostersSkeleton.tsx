import React from "react";

//COMPONENTS
import { Shimmer } from "./Shimmer/Shimmer";
import { SkeletonElement } from "./SkeletonElement";

//STYLES
import styles from "./Skeletons.module.scss";

export const BoostersSkeleton = () => {
  return (
    <div className={styles.SkeletonWrapper}>
      <div className={styles.BoostersSkeleton}>
        <div className={styles.Left}>
          <div>
            <SkeletonElement type="Title" />
            <SkeletonElement type="Title" />
          </div>
          <div>
            <SkeletonElement type="Title" />
            <SkeletonElement type="Title" />
          </div>
        </div>
        <div className={styles.Right}>
          <SkeletonElement type="Title" />
          <SkeletonElement type="Text" />
          <SkeletonElement type="Text" />
          <SkeletonElement type="Text" />
        </div>
      </div>
      <Shimmer />
    </div>
  );
};
