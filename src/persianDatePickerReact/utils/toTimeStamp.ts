import DateObject from "react-date-object";

const toTimeStamp = (dateInput: any, timePicker: boolean) => {
  const date = new DateObject(dateInput);

  if (timePicker) {
    date.setHour(date.hour + 1);
  } else {
    date.hour = 0;
    date.minute = 0;
    date.second = 0;
  }

  return date.unix;
};

export default toTimeStamp;
