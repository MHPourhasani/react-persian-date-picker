import { DateType } from "react-date-object";

export interface DatePickerProps {
  value: any;
  minDate?: DateType;
  maxDate?: DateType;
  timePicker?: boolean;
  inputContainerClassName?: string;
  calendarClassName?: string;
  dayClassName?: string;
  todayClassName?: string;
  selectedDayClassName?: string;
  disabledDayClassName?: string;
}
