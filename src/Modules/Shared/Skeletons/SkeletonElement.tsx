import React from "react";

import styles from "./SkeletonElement.module.scss";

export const SkeletonElement = ({ type }: skeletonElementProps) => {
  const style = styles[type];

  return <div className={`${styles.Skeleton} ${style}`}></div>;
};

type skeletonTypeEnum = "Text" | "Title" | "Avatar" | "Thumbnail" | "Box";

type skeletonElementProps = {
  type: skeletonTypeEnum;
};
