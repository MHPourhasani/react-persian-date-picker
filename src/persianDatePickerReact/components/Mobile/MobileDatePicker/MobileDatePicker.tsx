import React, { Fragment, useEffect, useRef, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

// components
import Calendar from "../../Calendar/Calendar";

// utils
import toTimeStamp from "../../../utils/toTimeStamp";

// icons
import CalendarIcon from "../../../assets/svg/CalendarIcon";

// interface
import { MobileDatePickerProps } from "./MobileDatePickerInterface";

const MobileDatePicker: React.FC<MobileDatePickerProps> = ({
  value,
  onChange,
  minDate,
  maxDate,
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

  const format = "YYYY/MM/DD HH:mm",
    calendar = persian,
    locale = persian_fa,
    digits = locale.digits;

  useEffect(() => {
    let date = value;

    function checkDate(date: any) {
      if (!date) return;
      if (!(date instanceof DateObject))
        date = new DateObject({ date, calendar, locale, format });

      if (date.calendar !== calendar) date.setCalendar(calendar);

      date.set({
        locale,
        format,
      });

      return date;
    }

    date = checkDate(date);

    if (document.activeElement !== getInput(inputRef)) {
      setStringDate(date ? date.format() : "");
    }

    setDate(date);
  }, [value, calendar, locale, format]);

  function handleChange(date: any) {
    setDate(date);
    onChange?.(date);
  }

  function getInput(inputRef: any) {
    if (!inputRef.current) return;

    return inputRef.current.tagName === "INPUT"
      ? inputRef.current
      : inputRef.current.querySelector("input");
  }

  return (
    <div className="h-auto w-screen bg-white md:hidden">
      <Popover className="flex w-full flex-col items-center justify-center overflow-y-auto">
        <>
          <Popover.Button className={`outline-none ${inputClassName} z-10`}>
            <div className="relative flex h-full w-full">
              <input
                ref={inputRef}
                id="date-picker-input"
                readOnly
                type="text"
                value={stringDate}
                data-time-stamp={toTimeStamp(date)}
              />

              <label
                htmlFor="date-picker-input"
                className="bg-secondary300 absolute right-0 flex h-full cursor-pointer items-center justify-center rounded-r-lg px-4"
              >
                <CalendarIcon />
              </label>
            </div>
          </Popover.Button>

          <Transition.Child
            as={Fragment}
            enter="ease-in-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900 bg-opacity-50" />
          </Transition.Child>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-full duration-300"
            enterTo="opacity-100 h-auto translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-full duration-300"
          >
            <Popover.Panel
              dir="rtl"
              className="absolute bottom-0 z-10 w-full rounded-t-3xl bg-white p-4"
            >
              <Calendar
                value={date}
                onChange={handleChange}
                calendar={calendar}
                locale={locale}
                format={format}
                digits={digits}
                minDate={minDate}
                maxDate={maxDate}
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

export default MobileDatePicker;
