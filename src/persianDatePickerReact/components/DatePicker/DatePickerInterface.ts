import { DateType } from "react-date-object";

export interface DatePickerProps {
  value: any;
  onChange: any;
  minDate?: DateType;
  maxDate?: DateType;
  inputClassName?: string;
  calendarClassName?: string;
  dayClassName?: string;
  todayClassName?: string;
  selectedDayClassName?: string;
  disabledDayClassName?: string;
}
