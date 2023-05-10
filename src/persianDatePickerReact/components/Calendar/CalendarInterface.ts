import { Calendar, DateType, Locale } from "react-date-object";

export interface CalendarProps {
  value: any;
  calendar: Calendar;
  locale: Locale;
  format: string;
  onChange: (a: any) => any;
  minDate: any;
  maxDate: any;
  timePicker: boolean;
  digits: string[];
  calendarClassName: string;
  dayClassName: string;
  todayClassName: string;
  selectedDayClassName: string;
  disabledDayClassName: string;
}

export interface StateType {
  date: any;
  selectedDate: any;
  focused: any;
  mustSortDates: any;
  today: DateType;
  minDate: any;
  maxDate: any;
  year: number;
  mustShowYearPicker: boolean;
  calendar: Calendar;
  locale: Locale;
  format: string;
}
