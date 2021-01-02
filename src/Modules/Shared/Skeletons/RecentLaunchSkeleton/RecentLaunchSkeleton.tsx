import React from "react";

//COMPONENTS
import Shimmer from "../Shimmer/Shimmer";
import SkeletonElement from "../SkeletonElement";

//STYLES
import styles from "./RecentLaunchSkeleton.module.scss";

const RecentLaunchSkeleton = () => {
  return (
    <div className={styles.SkeletonWrapper}>
      <div className={styles.RecentLaunchSkeleton}>
        <SkeletonElement type="Avatar" />
        <SkeletonElement type="Title" />
        <SkeletonElement type="Text" />
        <SkeletonElement type="Title" />
      </div>
      <Shimmer />
    </div>
  );
};

export default RecentLaunchSkeleton;
