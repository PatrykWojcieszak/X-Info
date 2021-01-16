import ILaunch from "../Models/ILaunch";

export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const getYear = (launch: ILaunch): number => {
  const date = new Date(launch.date_utc);
  return date.getFullYear();
};
