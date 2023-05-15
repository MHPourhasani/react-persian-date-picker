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

    setStringDate(date ? date.format() : "");

    setDate(date);
  }, [value, calendar, locale, format]);

  function handleChange(date: any) {
    setDate(date);
    setStringDate(date ? date.format() : "");
  }

  return (
    <div className="h-auto">
      <Popover className="flex w-full flex-col overflow-y-auto">
        <>
          <Popover.Button
            className={`outline-none bg-white z-10 h-12 border-1 border-secondary300 focus:border-primary rounded-lg cursor-pointer pl-2 ${inputContainerClassName}`}
          >
            <div dir="ltr" className="relative flex h-full w-full">
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
                className="bg-[#D9D9D9] absolute right-0 flex h-full cursor-pointer items-center justify-center rounded-r-lg px-4"
              >
                <CalendarIcon className="!fill-[#666666]" />
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
            <div className="fixed inset-0 w-screen bg-gray-900 bg-opacity-50" />
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
              className="absolute bottom-0 w-screen z-10 rounded-t-3xl bg-white p-4"
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

export default MobileDatePicker;
