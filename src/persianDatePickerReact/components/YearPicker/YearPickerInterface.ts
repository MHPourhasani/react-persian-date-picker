export interface YearPickerProps {
	state: any;
	onChange: (a: any, b: any) => any;
	propsOnChange: (a: any) => any;
	timePicker: boolean;
	setShowMonthPicker: (a: any) => any;
	setShowYearPicker: (a: any) => any;
	yearState: number;
}

export interface StateType {
  today: any;
  minDate: any;
  maxDate: any;
  date: any;
  selectedDate: any;
  focused: any;
  onlyShowInRangeDates: boolean;
  year: number;
}
