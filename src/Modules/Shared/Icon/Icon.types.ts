import { IconEnum } from "./Icon.enum";

export type IconProps = {
  name?: IconEnum;
  width: number;
  height: number;
  className?: string;
  onClick?: () => void;
};
