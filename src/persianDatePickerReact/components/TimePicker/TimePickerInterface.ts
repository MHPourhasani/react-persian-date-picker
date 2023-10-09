export interface TimePickerProps {
  state: any;
  onChange: (a: any, b: any) => any;
  setShowTimePicker: (a: any) => any;
}

export interface StateType {
  date: any;
  selectedDate: any;
  focused: any;
}
