import { Launch } from "../Types";

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
