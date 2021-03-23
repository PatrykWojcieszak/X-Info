import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import styled from "styled-components/macro";

//STYLES
import "react-datepicker/dist/react-datepicker.css";
import { device } from "../../../resources/styles/helpers/breakpoints";

export const CustomDatePicker = ({ date, dateChanged }: datePickerProps) => {
  const validation = (date: any) => {
    const isValid = moment(date, "MM/DD/YYYY", true).isValid();
    if (isValid) dateChanged(date);
  };

  return (
    <StyledDatePicker
      selected={date}
      dateFormat="dd/MM/yyyy"
      onChange={(date) => validation(date)}
    />
  );
};

type datePickerProps = {
  date: Date;
  dateChanged: (date: Date) => void;
};

const StyledDatePicker = styled(DatePicker)`
  border: 1px solid ${({ theme }) => theme.colors?.background};
  border-radius: 0.5rem;
  cursor: pointer;
  background: transparent;
  width: 100%;
  outline: none;
  min-width: 200px;
  padding: 1rem 0.6rem;
  font-size: 1.2rem;

  @media ${device.tablet} {
    max-width: 220px;
  }

  @media ${device.large} {
    min-width: 280px;
  }
`;
