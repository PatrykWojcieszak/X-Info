import { DropdownElement, Launch } from "../Types";

export const getYear = (launch: Launch): number => {
  const date = new Date(launch.date_utc);
  return date.getFullYear();
};

export const changeDDElementToTrue = (
  arr: DropdownElement[],
  id: number
): DropdownElement[] => {
  const temp = [...arr];

  temp.forEach((element) => (element.selected = false));
  temp[id].selected = true;

  return temp;
};
