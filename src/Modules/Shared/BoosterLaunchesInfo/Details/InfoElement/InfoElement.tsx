import React from "react";

export const InfoElement = ({ title, value }: infoElementProps) => {
  return (
    <>
      <h3>{title}</h3>
      <h4>{value}</h4>
    </>
  );
};

type infoElementProps = {
  title: string;
  value: string;
};
