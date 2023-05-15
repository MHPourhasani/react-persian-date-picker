import { DateType } from "react-date-object";

export interface DayPickerProps {
  state: any;
  setState: any;
  onChange: (a: any, b: any) => any;
  propsOnChange: (a: any) => any;
  timePicker: boolean;
  monthAndYears: any;
  setShowMonthPicker: (a: boolean) => any;
  setShowYearPicker: (a: boolean) => any;
  numberOfMonths: number;
  weekStartDayIndex: number;
  onlyShowInRangeDates: boolean;
  dayClassName: string;
  todayClassName: string;
  selectedDayClassName: string;
  disabledDayClassName: string;
}

export interface StateType {
  today: DateType;
  minDate: DateType;
  maxDate: DateType;
  date: DateType;
  selectedDate: DateType;
  focused: DateType;
}
