import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

//STYLES
import styles from "./CustomDatePicker.module.scss";
import "react-datepicker/dist/react-datepicker.css";

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
