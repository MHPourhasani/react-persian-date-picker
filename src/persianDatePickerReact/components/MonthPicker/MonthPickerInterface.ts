import { Calendar, DateType, Locale } from "react-date-object";

export interface MonthPickerProps {
  state: any;
  onChange: (a: any, b: any) => any;
  setShowMonthPicker: (a: any) => any;
}

export interface StateType {
  today: DateType;
  minDate: DateType;
  maxDate: DateType;
  date: DateType;
  calendar: Calendar;
  locale: Locale;
  onlyShowInRangeDates: boolean;
  selectedDate: DateType;
  focused: DateType;
}
