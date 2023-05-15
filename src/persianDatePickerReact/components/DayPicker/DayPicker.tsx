import React, { useMemo } from "react";
import DateObject from "react-date-object";

// components
import WeekDays from "../WeekDays/WeekDays";

// utils
import selectDate from "../../utils/selectDate";
import isSameDate from "../../utils/isSameDate";
import getMonths from "../../utils/getMonths";

// interface
import { DayPickerProps } from "./DayPickerInterface";

const DayPicker: React.FC<DayPickerProps> = ({
  state,
  onChange,
  onlyShowInRangeDates,
  numberOfMonths,
  weekStartDayIndex,
  dayClassName,
  todayClassName,
  selectedDayClassName,
  disabledDayClassName,
}) => {
  const { today, minDate, maxDate, date, selectedDate } = state;

  const months = useMemo(() => {
    return getMonths(date, numberOfMonths, weekStartDayIndex);
    // eslint-disable-next-line
  }, [
    date.monthIndex,
    date.year,
    date.calendar,
    date.locale,
    numberOfMonths,
    weekStartDayIndex,
  ]);

  const mustDisplayDay = (object: any) => {
    if (object.current) return true;
  };

  const selectDay = ({ date: dateObject }: any) => {
    let { selectedDate, date } = state;
    const { hour, minute, second } = date;

    dateObject.set({
      hour: selectedDate?.hour || hour,
      minute: selectedDate?.minute || minute,
      second: selectedDate?.second || second,
    });

    date = new DateObject(date).toFirstOfMonth();

    [selectedDate, state.focused] = selectDate(dateObject, state);

    onChange(selectedDate, {
      ...state,
      date,
      selectedDate,
    });
  };

  const getClassName = (object: any) => {
    const names = [
        "flex h-12 w-12 items-center justify-center rounded-xl cursor-pointer hover:border-1.5 hover:border-primary",
        dayClassName,
      ],
      { date, current } = object;

    if (
      (minDate && date < minDate) ||
      (maxDate && date > maxDate) ||
      object.disabled
    ) {
      names.push(
        disabledDayClassName || "text-secondary300 cursor-text border-none"
      );

      if (!object.disabled) object.disabled = true;
    }

    if (!current) names.push("border-none cursor-text bg-transparent");

    if (!object.disabled || !onlyShowInRangeDates) {
      if (isSameDate(date, today))
        names.push(todayClassName || "border-1.5 border-primary rounded-xl");

      if (isSelected(date)) {
        names.push(selectedDayClassName || "bg-primary text-white");
      }
    }

    return names.join(" ");
  };

  const isSelected = (dateObject: any) => {
    return [].concat(selectedDate).some((date) => isSameDate(date, dateObject));
  };

  return (
    <section className="mt-7 flex w-full flex-col items-center justify-center">
      <WeekDays />

      {months.map((weeks, monthIndex) => (
        <div
          key={monthIndex}
          className="mt-2 flex flex-col items-center justify-center"
        >
          {weeks.map((week: any[], index: React.Key) => (
            <div key={index} className="flex">
              {week.map((object: any, index: number) => {
                //To clear the properties which are added from the previous render
                object = {
                  date: object.date,
                  day: object.day,
                  current: object.current,
                };

                return (
                  <span
                    key={index}
                    className={getClassName(object)}
                    onClick={() => {
                      if (!mustDisplayDay(object) || object.disabled) return;
                      selectDay(object);
                    }}
                  >
                    {mustDisplayDay(object) && !object.hidden && object.day}
                  </span>
                );
              })}
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default DayPicker;
