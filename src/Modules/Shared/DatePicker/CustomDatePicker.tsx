import React from "react";
import DatePicker from "react-datepicker";

//STYLES
import styles from "./CustomDatePicker.module.scss";
import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker = ({ date, dateChanged }: datePickerProps) => {
  const DatePickerCustomInput = ({ value, onClick }) => (
    <div className={styles.DatePicker} onClick={onClick}>
      <h3>{value}</h3>
    </div>
  );

  return (
    <DatePicker
      selected={date}
      onChange={(date) => dateChanged(date)}
      customInput={<DatePickerCustomInput value={date} onClick={() => {}} />}
    />
  );
};

type datePickerProps = {
  date: Date;
  dateChanged: (date: Date) => void;
};

export default CustomDatePicker;
