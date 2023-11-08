import React from "react";

// components
import Arrow from "../Arrow/Arrow";

// utils
import selectDate from "../../utils/selectDate";

// interface
import { TimePickerProps } from "./TimePickerInterface";

// icons
import CalendarIcon from "../../assets/svg/CalendarIcon";

interface ButtonArgs {
	name: string;
	values: any[];
	updateInput: (a: any, b: any) => any;
}

const TimePicker: React.FC<TimePickerProps> = ({ state, onChange, setShowTimePicker }) => {
	let { selectedDate } = state;
	const { date } = state;

	const availbleDate = selectedDate || date;

	const updateInput = (name: string, value: number) => {
		availbleDate[name] = value;

		date.set({
			hour: selectedDate?.hour,
			minute: selectedDate?.minute,
			second: selectedDate?.second,
		});

		[selectedDate, state.focused] = selectDate(date, state);

		onChange(selectedDate, {
			...state,
			date,
			selectedDate,
		});
	};

	function getValues(name: string, token: string) {
		if (!availbleDate[name]) availbleDate[name] = 0;

		if (name === "hour") {
			availbleDate[name] = availbleDate.hour++;
		}

		return [availbleDate[name], availbleDate.format(token)];
	}

	const Button = ({ name, values: [number, localeValue], updateInput }: ButtonArgs) => {
		return (
			<div className="flex w-full flex-col items-center gap-20">
				<Arrow direction="up" onClick={() => updateInput(name, number + 1)} disabled={false} />

				<input type="text" readOnly name={name} value={localeValue} className="w-7 text-center text-xl focus:outline-none" />

				<Arrow direction="down" onClick={() => updateInput(name, number - 1)} disabled={false} />
			</div>
		);
	};

	return (
		<section dir="ltr" className="flex w-[21rem] flex-col items-center rounded-t-3xl bg-white pb-16 pt-8 rounded-lg">
			<CalendarIcon
				className="mb-10 cursor-pointer fill-primary"
				onClick={() => {
					setShowTimePicker((prevState: boolean) => !prevState);
				}}
			/>

			<div className={`flex w-full items-center justify-between bg-white`}>
				{[
					["hour", "HH"],
					["minute", "mm"],
				].map(([name, token], index) => {
					return <Button key={index} name={name} values={getValues(name, token)} updateInput={updateInput} />;
				})}
			</div>
		</section>
	);
};

export default TimePicker;
