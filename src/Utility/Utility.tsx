import { DropdownElement, Launch } from "../Types";

export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const getYear = (launch: Launch): number => {
  const date = new Date(launch.date_utc);
  return date.getFullYear();
};

export const changeDDElementToTrue = (
  arr: DropdownElement[],
  element: DropdownElement
): DropdownElement[] => {
  const temp = [...arr];

  temp.forEach((element) => (element.selected = false));
  temp[element.id].selected = true;

  return temp;
};
