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
  minDate,
  maxDate,
  timePicker = true,
  inputContainerClassName,
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

    setStringDate(date ? date.format() : "");

    setDate(date);
  }, [value, calendar, locale, format]);

  const handleChange = (date: any) => {
    setDate(date);
    setStringDate(date ? date.format() : "");
  };

  return (
    <div className="w-full">
      <Popover className="relative">
        <>
          <Popover.Button
            className={`outline-none bg-white z-10 h-12 border-1 border-secondary300 focus:border-primary rounded-lg cursor-pointer pl-2 ${inputContainerClassName}`}
          >
            <div dir="ltr" className="relative flex h-full">
              <input
                ref={inputRef}
                id="date-picker-input"
                readOnly
                type="text"
                value={stringDate}
                data-time-stamp={toTimeStamp(date, timePicker)}
                className="cursor-pointer"
              />

              <label
                htmlFor="date-picker-input"
                className="absolute right-0 flex h-full cursor-pointer items-center justify-center rounded-r-lg bg-[#D9D9D9] px-4"
              >
                <CalendarIcon className="!fill-[#666666]" />
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
            <Popover.Panel className="absolute rtl:right-0 ltr:left-0 z-10 mt-2.5 flex h-auto w-[21rem] items-center justify-center">
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
