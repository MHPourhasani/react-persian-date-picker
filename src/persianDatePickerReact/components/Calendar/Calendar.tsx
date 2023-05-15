import React, { useState, useEffect } from "react";
import DateObject, { Calendar as CalendarType } from "react-date-object";

// components
import Header from "../Header/Header";
import DayPicker from "../DayPicker/DayPicker";
import MonthPicker from "../MonthPicker/MonthPicker";
import YearPicker from "../YearPicker/YearPicker";
import TimePicker from "../TimePicker/TimePicker";

// utils
import toDateObject from "../../utils/toDateObject";
import getMonthsAndYears from "../../utils/getMonthsAndYears";

// interface
import { CalendarProps, StateType } from "./CalendarInterface";

// icons
import ClockIcon from "../../assets/svg/ClockIcon";

const Calendar: React.FC<CalendarProps> = ({
  value,
  calendar,
  locale,
  format,
  changeHandler,
  propsOnChange,
  minDate,
  maxDate,
  timePicker,
  digits,
  calendarClassName,
  dayClassName,
  todayClassName,
  selectedDayClassName,
  disabledDayClassName,
}) => {
  const [state, setState] = useState<any>({}),
    [showMonthPicker, setShowMonthPicker] = useState<boolean>(false),
    [showYearPicker, setShowYearPicker] = useState<boolean>(false),
    [showTimePicker, setShowTimePicker] = useState<boolean>(false),
    [yearState, setYearsState] = useState<number>(1397);

  const weekStartDayIndex = 0,
    numberOfMonths = 1,
    onlyShowInRangeDates = true;

  const getDateInRangeOfMinAndMaxDate = (
    date: any,
    minDate: any,
    maxDate: any,
    calendar: CalendarType
  ) => {
    if (minDate)
      minDate = toDateObject(minDate, calendar).set({
        hour: 0,
        minute: 0,
        second: 0,
      });

    if (maxDate)
      maxDate = toDateObject(maxDate, calendar).set({
        hour: 23,
        minute: 59,
        second: 59,
      });

    return [date, minDate, maxDate];
  };

  const getSelectedDate = (value: any) => {
    if (!value) return {};
    if (value instanceof DateObject) return value;
  };

  useEffect(() => {
    setState((state: StateType) => {
      const { focused } = state;
      let { date, selectedDate } = state;

      function getDate(value: any) {
        return new DateObject(value);
      }

      if (!value) {
        if (!date) date = getDate({ calendar, locale, format });
      } else {
        selectedDate = getSelectedDate(value);

        if (!date || numberOfMonths === 1) {
          date = getDate(selectedDate);
        }
      }

      return {
        ...state,
        date,
        selectedDate,
        value,
        focused,
        calendar,
        locale,
        format,
        year: date.year,
        today: new DateObject({ calendar, locale }),
      };
    });
  }, [value, calendar, locale, format, numberOfMonths, digits]);

  useEffect(() => {
    if (!minDate && !maxDate) return;

    setState((state: StateType) => {
      const { calendar } = state;

      const [selectedDate, $minDate, $maxDate] = getDateInRangeOfMinAndMaxDate(
        getSelectedDate(value),
        minDate,
        maxDate,
        calendar
      );

      return {
        ...state,
        inRangeDates: selectedDate,
        minDate: $minDate,
        maxDate: $maxDate,
      };
    });
  }, [minDate, maxDate, onlyShowInRangeDates, value]);

  const handleChange = (selectedDate: any, state: any) => {
    changeHandler?.(selectedDate);
    if (state) setState(state);
  };

  const globalProps = {
    state,
    setState,
    onChange: handleChange,
    monthAndYears: getMonthsAndYears(state, numberOfMonths),
    setShowMonthPicker,
    setShowYearPicker,
  };

  return (
    state.today && (
      <section
        dir="rtl"
        className={`flex w-full flex-col items-center shadow-calendar justify-center rounded-lg p-4 bg-white ${calendarClassName}`}
      >
        <Header
          {...globalProps}
          showMonthPicker={showMonthPicker}
          showYearPicker={showYearPicker}
          yearState={yearState}
          setYearsState={setYearsState}
        />

        <div className="relative flex w-full flex-col items-center justify-center">
          <DayPicker
            {...globalProps}
            propsOnChange={propsOnChange}
            timePicker={timePicker}
            onlyShowInRangeDates={onlyShowInRangeDates}
            numberOfMonths={numberOfMonths}
            weekStartDayIndex={weekStartDayIndex}
            dayClassName={dayClassName}
            todayClassName={todayClassName}
            selectedDayClassName={selectedDayClassName}
            disabledDayClassName={disabledDayClassName}
          />

          <div className="absolute top-0 flex w-full flex-col items-center justify-center">
            {showMonthPicker && <MonthPicker {...globalProps} />}
          </div>

          <div className="absolute top-0 flex w-full flex-col items-center justify-center">
            {showYearPicker && (
              <YearPicker {...globalProps} yearState={yearState} />
            )}
          </div>

          {timePicker && (
            <ClockIcon
              onClick={() => setShowTimePicker(!showTimePicker)}
              className="mt-2 cursor-pointer !fill-primary"
            />
          )}
        </div>

        <div className="absolute top-0 flex w-full flex-col items-center justify-center">
          {showTimePicker && (
            <TimePicker
              state={state}
              onChange={handleChange}
              setShowTimePicker={setShowTimePicker}
            />
          )}
        </div>
      </section>
    )
  );
};

export default Calendar;
