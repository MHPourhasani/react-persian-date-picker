import React, { useMemo } from "react";
import DateObject from "react-date-object";

// utils
import isArray from "../../utils/isArray";
import toTimeStamp from "../../utils/toTimeStamp";

// interface
import { MonthPickerProps } from "./MonthPickerInterface";

const MonthPicker: React.FC<MonthPickerProps> = ({ state, onChange, propsOnChange, timePicker, setShowDayPicker, setShowMonthPicker }) => {
	const { date, minDate, maxDate, calendar, locale, onlyShowInRangeDates } = state;

	const months = useMemo(() => {
		let months = locale.months,
			index = 0;

		const monthsArray = [],
			date = new DateObject({
				calendar,
				locale,
				format: state.date._format,
				year: state.date.year,
				month: 1,
				day: 1,
			});

		if (isArray(months) && months.length >= 12) {
			months.length = 12;

			months = months.map((month: any) => (isArray(month) ? month[0] : month));
		}

		for (let i = 0; i < 4; i++) {
			const array = [];

			for (let j = 0; j < 3; j++) {
				array.push({
					date: new DateObject(date),
					name: months[index],
				});

				index++;
				date.add(1, "month");
			}

			monthsArray.push(array);
		}

		return monthsArray;
	}, [state.date._format, state.date.year, calendar, locale]);

	const selectMonth = (dateObject: any) => {
		const { selectedDate, focused } = state,
			{ year, monthIndex } = dateObject;

		if (
			(minDate && year <= minDate.year && monthIndex < minDate.monthIndex) ||
			(maxDate && year >= maxDate.year && monthIndex > maxDate.monthIndex)
		)
			return;

		date.setMonth(monthIndex + 1);
		selectedDate.month = monthIndex + 1;

		onChange(selectedDate, {
			...state,
			date,
			focused,
			selectedDate,
		});

		propsOnChange(toTimeStamp(selectedDate, timePicker));

		setShowDayPicker(true);
		setShowMonthPicker(false);
	};

	const getClassName = (dateObject: any) => {
		const names = ["cursor-pointer flex-1 flex justify-center"],
			{ year, monthIndex } = dateObject;

		if (
			(minDate && (year < minDate.year || (year === minDate.year && monthIndex < minDate.monthIndex))) ||
			(maxDate && (year > maxDate.year || (year === maxDate.year && monthIndex > maxDate.monthIndex)))
		)
			names.push("text-secondary300 cursor-text");

		if (names.includes("text-secondary300 cursor-text") && onlyShowInRangeDates) return;

		if (date.monthIndex === monthIndex) names.push("text-primary");

		return names.join(" ");
	};

	return (
		<div className={`flex h-full w-full flex-col gap-12 bg-white py-8 rounded-lg sm:w-[21rem]`}>
			{months.map((array, i) => (
				<div key={i} className="grid w-full grid-cols-3 place-content-center">
					{array.map(({ date, name }, j) => (
						<div key={j} className={getClassName(date)} onClick={() => selectMonth(date)}>
							<span>{name}</span>
						</div>
					))}
				</div>
			))}
		</div>
	);
};

export default MonthPicker;
