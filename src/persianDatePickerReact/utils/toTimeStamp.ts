import DateObject from "react-date-object";

const toTimeStamp = (dateInput: any) => {
  const date = new DateObject(dateInput);

  date.setHour(date.hour + 1);

  return date.unix;
};

export default toTimeStamp;
