import React from "react";
import DatePicker from "react-datepicker";

//STYLES
import styles from "./CustomDatePicker.module.scss";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const CustomDatePicker = ({ date, dateChanged }: datePickerProps) => {
  const validation = (date: any) => {
    const isValid = moment(date, "MM/DD/YYYY", true).isValid();
    if (isValid) dateChanged(date);
  };

  return (
    <DatePicker
      selected={date}
      dateFormat="dd/MM/yyyy"
      onChange={(date) => validation(date)}
      className={styles.DatePicker}
    />
  );
};

type datePickerProps = {
  date: Date;
  dateChanged: (date: Date) => void;
};

export default CustomDatePicker;
