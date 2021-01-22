import React from "react";
import DatePicker from "react-datepicker";

//STYLES
import styles from "./CustomDatePicker.module.scss";
import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker = ({ date, dateChanged }: datePickerProps) => {
  const CustomInput = (
    props: React.HTMLProps<HTMLInputElement>,
    ref: React.Ref<HTMLInputElement>
  ) => {
    return (
      <div className={styles.DatePicker}>
        <input {...props} ref={props.ref} />
      </div>
    );
  };

  return (
    <DatePicker
      selected={date}
      onChange={(date) => dateChanged(date)}
      customInput={React.createElement(React.forwardRef(CustomInput))}
    />
  );
};

type datePickerProps = {
  date: Date;
  dateChanged: (date: Date) => void;
};

export default CustomDatePicker;
