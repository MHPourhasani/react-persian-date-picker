export interface HeaderProps {
  state: StateType;
  setState: (a: any) => any;
  monthAndYears: any;
  showMonthPicker: boolean;
  setShowMonthPicker: (a: any) => any;
  showYearPicker: boolean;
  setShowYearPicker: (a: any) => any;
  yearState: number;
  setYearsState: (a: any) => any;
}

export interface StateType {
  today: any;
  minDate: any;
  maxDate: any;
  date: any;
  year: number;
  mustShowYearPicker: boolean;
}
