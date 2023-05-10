import React, { Fragment, useEffect, useRef, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

// components
import Calendar from "../Calendar/Calendar";

// utils
import toTimeStamp from "../../utils/toTimeStamp";

// icons
import CalendarIcon from "../../assets/svg/CalendarIcon";

// interface
import { DatePickerProps } from "./DatePickerInterface";

const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  minDate,
  maxDate,
  timePicker = true,
  inputClassName,
  calendarClassName,
  dayClassName,
  todayClassName,
  selectedDayClassName,
  disabledDayClassName,
}) => {
  const [date, setDate] = useState(),
    [stringDate, setStringDate] = useState<string>("");

  const inputRef = useRef<any>();

  const calendar = persian,
    locale = persian_fa,
    digits = locale.digits;

  let format = "YYYY/MM/DD HH:mm";

  if (!timePicker) {
    format = "YYYY/MM/DD";
  }

  useEffect(() => {
    let date = value;

    const checkDate = (date: any) => {
      if (!date) return;
      if (!(date instanceof DateObject))
        date = new DateObject({ date, calendar, locale, format });

      date.set({ locale, format });

      return date;
    };

    date = checkDate(date);

    if (document.activeElement !== getInput(inputRef)) {
      setStringDate(date ? date.format() : "");
    }

    setDate(date);
  }, [value, calendar, locale, format]);

  const handleChange = (date: any) => {
    setDate(date);
    onChange?.(date);
  };

  const getInput = (inputRef: any) => {
    if (!inputRef.current) return;

    return inputRef.current.tagName === "INPUT"
      ? inputRef.current
      : inputRef.current.querySelector("input");
  };

  return (
    <div className="hidden sm:fixed sm:top-16 sm:block">
      <Popover className="relative">
        <>
          <Popover.Button className={`outline-none ${inputClassName} z-10`}>
            <div className="relative flex h-full">
              <input
                ref={inputRef}
                id="date-picker-input"
                readOnly
                type="text"
                value={stringDate}
                data-time-stamp={toTimeStamp(date, timePicker)}
              />

              <label
                htmlFor="date-picker-input"
                className="absolute right-0 flex h-full cursor-pointer items-center justify-center rounded-r-lg bg-secondary300 px-4"
              >
                <CalendarIcon />
              </label>
            </div>
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-0 z-10 mt-3 flex shadow-calendar h-auto w-[21rem] items-center justify-center rounded-lg p-4">
              <Calendar
                value={date}
                onChange={handleChange}
                calendar={calendar}
                locale={locale}
                format={format}
                digits={digits}
                minDate={minDate}
                maxDate={maxDate}
                timePicker={timePicker}
                calendarClassName={calendarClassName}
                dayClassName={dayClassName}
                todayClassName={todayClassName}
                selectedDayClassName={selectedDayClassName}
                disabledDayClassName={disabledDayClassName}
              />
            </Popover.Panel>
          </Transition>
        </>
      </Popover>
    </div>
  );
};

export default DatePicker;
