import React from "react";

import Icons from "../../../resources/styles/icons/icons.svg";
import { IconProps } from "./Icon.types";

export const Icon = ({
  name,
  width,
  height,
  className,
  onClick,
}: IconProps) => {
  return (
    <svg className={className} width={width} height={height} onClick={onClick}>
      <use xlinkHref={`${Icons}#icon-${name}`} />
    </svg>
  );
};
