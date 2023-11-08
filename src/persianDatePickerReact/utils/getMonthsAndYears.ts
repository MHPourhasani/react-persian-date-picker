import toLocaleDigits from "./toLocaleDigits";
import isArray from "./isArray";

const getMonthsAndYears = (state: any, numberOfMonths: number) => {
  const date = state.date;

  if (!date) return [];

  const monthNames = [],
    years = [],
    digits = date.digits;

  for (let monthIndex = 0; monthIndex < numberOfMonths; monthIndex++) {
    let monthName,
      year = date.year,
      index = date.monthIndex + monthIndex;

    if (index > 11) {
      index -= 12;
      year++;
    }

    if (isArray(state.months) && state.months.length >= 12) {
      const month = state.months[index];

      monthName = isArray(month) ? month[0] : month;
    } else {
      monthName = date.months[index].name;
    }

    year = toLocaleDigits(year.toString(), digits);

    monthNames.push(monthName);
    years.push(year);
  }

  return [monthNames, years];
};

export default getMonthsAndYears;
