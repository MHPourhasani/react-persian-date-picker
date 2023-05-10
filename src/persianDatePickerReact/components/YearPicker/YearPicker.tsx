import React, { useMemo } from "react";
import DateObject from "react-date-object";

// utils
import toLocaleDigits from "../../utils/toLocaleDigits";

// interface
import { YearPickerProps } from "./YearPickerInterface";

const YearPicker: React.FC<YearPickerProps> = ({
  state,
  onChange,
  setShowYearPicker,
  yearState,
}) => {
  const { date, minDate, maxDate, onlyShowInRangeDates } = state,
    digits = date.digits;

  const minYear = minDate?.year || yearState;

  const years = useMemo(() => {
    const years = [];
    let year = minYear;

    for (let i = 0; i < 4; i++) {
      const array = [];

      for (let j = 0; j < 3; j++) {
        array.push(year);
        year++;
      }

      years.push(array);
    }

    return years;
  }, [minYear]);

  const notInRange = (year: number) => {
    return (minDate && year < minDate.year) || (maxDate && year > maxDate.year);
  };

  const selectYear = (year: number) => {
    if (notInRange(year)) return;

    const date = new DateObject(state.date).setYear(year),
      { selectedDate, focused } = state;

    onChange(selectedDate, {
      ...state,
      date,
      focused,
      selectedDate,
    });

    setShowYearPicker((prevState: boolean) => !prevState);
  };

  const getClassName = (year: number) => {
    const names = ["cursor-pointer flex-1 flex justify-center"],
      { date } = state,
      disabledYear = "text-secondary300 cursor-not-allowed";

    if (notInRange(year)) names.push(disabledYear);

    if (names.includes(disabledYear) && onlyShowInRangeDates) return;

    if (year === date.year) names.push("text-primary");

    return names.join(" ");
  };

  return (
    <section
      className={`flex h-full w-full flex-col gap-14 bg-white py-8 sm:w-[21rem]`}
    >
      {years.map((array, i) => (
        <div key={i} className="grid w-full grid-cols-3 place-content-center">
          {array.map((year, j) => (
            <div
              key={j}
              className={getClassName(year)}
              onClick={() => selectYear(year)}
            >
              <span>{toLocaleDigits(year.toString(), digits)}</span>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default YearPicker;