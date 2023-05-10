import { DateType } from "react-date-object";

export interface MobileDatePickerProps {
  value: any;
  onChange: any;
  minDate?: DateType;
  maxDate?: DateType;
  timePicker?: boolean;
  inputClassName?: string;
  calendarClassName?: string;
  dayClassName?: string;
  todayClassName?: string;
  selectedDayClassName?: string;
  disabledDayClassName?: string;
}
