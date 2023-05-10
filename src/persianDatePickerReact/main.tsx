import React from "react";
import { DatePickerProps } from "./components/DatePicker/DatePickerInterface";
import DatePicker from "./components/DatePicker/DatePicker";
import MobileDatePicker from "./components/Mobile/MobileDatePicker/MobileDatePicker";
import { MobileDatePickerProps } from "./components/Mobile/MobileDatePicker/MobileDatePickerInterface";
import "../index.css";

export const DatePickerContainer = (props: DatePickerProps) => {
  return (
    <DatePicker
      value={props.value}
      onChange={props.onChange}
      maxDate={props.maxDate}
      timePicker={props.timePicker}
      inputClassName={props.inputClassName}
      calendarClassName={props.calendarClassName}
      dayClassName={props.dayClassName}
      todayClassName={props.todayClassName}
      selectedDayClassName={props.selectedDayClassName}
      disabledDayClassName={props.disabledDayClassName}
    />
  );
};

export const MobileDatePickerContainer = (props: MobileDatePickerProps) => {
  return (
    <MobileDatePicker
      value={props.value}
      onChange={props.onChange}
      maxDate={props.maxDate}
      timePicker={props.timePicker}
      inputClassName={props.inputClassName}
      calendarClassName={props.calendarClassName}
      dayClassName={props.dayClassName}
      todayClassName={props.todayClassName}
      selectedDayClassName={props.selectedDayClassName}
      disabledDayClassName={props.disabledDayClassName}
    />
  );
};
