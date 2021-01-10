import React from "react";
import LaunchExtendedInfoSkeleton from "./LaunchExtendedInfoSkeleton";

//COMPONENTS
import Shimmer from "./Shimmer/Shimmer";
import SkeletonElement from "./SkeletonElement";

//STYLES
import styles from "./Skeletons.module.scss";

const LaunchSkeleton = () => {
  return (
    <div className={styles.SkeletonWrapper}>
      <div className={styles.LaunchSkeleton}>
        <LaunchExtendedInfoSkeleton />
        <div className={styles.Row}>
          <div className={styles.Left}>
            <SkeletonElement type="Box" />
          </div>
          <div className={styles.Right}>
            <div className={styles.InfoWrapper}>
              <SkeletonElement type="Title" />
              <SkeletonElement type="Text" />
              <SkeletonElement type="Text" />
              <SkeletonElement type="Text" />
            </div>
            <div className={styles.InfoWrapper}>
              <SkeletonElement type="Title" />
              <SkeletonElement type="Text" />
              <SkeletonElement type="Text" />
              <SkeletonElement type="Text" />
              <SkeletonElement type="Text" />
              <SkeletonElement type="Text" />
            </div>
          </div>
        </div>
      </div>
      <Shimmer />
    </div>
  );
};

export default LaunchSkeleton;
