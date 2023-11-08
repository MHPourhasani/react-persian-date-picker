import DateObject from "react-date-object";

const selectDate = (date: any, state: any) => {
  date.setFormat(state.format);

  const focused = new DateObject(date);

  state.selectedDate = focused;

  return [state.selectedDate, focused];
};

export default selectDate;
