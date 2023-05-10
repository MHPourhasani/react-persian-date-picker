import React from "react";

const WeekDays = () => {
  const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];

  return (
    <div className="flex w-full items-center justify-between text-11 font-light">
      {weekDays.map((weekDay: string, index: number) => (
        <span key={index}>{weekDay}</span>
      ))}
    </div>
  );
};

export default WeekDays;
