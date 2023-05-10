import React from "react";

// components
import Arrow from "../Arrow/Arrow";

// interface
import { HeaderProps } from "./HeaderInterface";

enum ArrowDirection {
  Right = -1,
  Left = 1,
}

const Header: React.FC<HeaderProps> = ({
  state,
  setState,
  monthAndYears: [months, years],
  showMonthPicker,
  setShowMonthPicker,
  showYearPicker,
  setShowYearPicker,
  yearState,
  setYearsState,
}) => {
  const { date, minDate, maxDate, year } = state,
    isPreviousDisable =
      minDate &&
      date.year <= minDate.year &&
      minDate.monthIndex > date.monthIndex - 1,
    isNextDisable =
      maxDate &&
      date.year >= maxDate.year &&
      maxDate.monthIndex < date.monthIndex + 1;

  return (
    <div className="flex w-full items-center justify-between">
      {getButton("right")}

      {months.map((month: string, index: number) => (
        <div
          key={index}
          className="mx-4 flex flex-1 cursor-pointer items-center justify-center rounded-md py-1 transition-all ease-in hover:bg-gray-100"
        >
          {showMonthPicker && !showYearPicker && (
            <span
              className="flex w-full items-center justify-center gap-1"
              onClick={() =>
                setShowYearPicker((prevState: boolean) => !prevState)
              }
            >
              {years[index]}
            </span>
          )}

          {!showMonthPicker && (
            <div
              className="flex w-full items-center justify-center gap-1"
              onClick={() =>
                setShowMonthPicker((prevState: boolean) => !prevState)
              }
            >
              <span>{month}</span>
              <span>{years[index]}</span>
            </div>
          )}

          {showYearPicker && (
            <span dir="ltr">
              {yearState} - {yearState + 11}
            </span>
          )}
        </div>
      ))}

      {getButton("left")}
    </div>
  );

  function getButton(direction: string) {
    const handleClick = () =>
        increaseValue(
          direction === "right" ? ArrowDirection.Right : ArrowDirection.Left
        ),
      disabled =
        (direction === "left" && isPreviousDisable) ||
        (direction === "right" && isNextDisable);

    return (
      <Arrow direction={direction} onClick={handleClick} disabled={disabled} />
    );
  }

  function increaseValue(value: number) {
    if ((value < 0 && isPreviousDisable) || (value > 0 && isNextDisable))
      return;

    if (showMonthPicker && !showYearPicker) {
      date.year += value;
    } else if (showYearPicker) {
      if (value < 0) {
        setYearsState(yearState - 12);
      } else {
        setYearsState(yearState + 12);
      }
    } else {
      date.toFirstOfMonth();
      date.month += value;
    }

    setState({
      ...state,
      date,
      year,
    });
  }
};

export default Header;
