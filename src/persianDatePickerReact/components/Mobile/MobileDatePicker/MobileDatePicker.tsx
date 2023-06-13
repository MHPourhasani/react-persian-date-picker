import React, { Fragment, useEffect, useState } from "react";
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
	timePicker = true,
	readOnly = false,
	inputPlaceholder,
	inputContainerClassName,
	inputClassName,
	calendarIconClassName,
	calendarClassName,
	dayClassName,
	todayClassName,
	selectedDayClassName,
	disabledDayClassName,
}) => {
	const [date, setDate] = useState<any>(),
		[stringDate, setStringDate] = useState<string>("");

	const calendar = persian,
		locale = persian_fa,
		digits = locale.digits;

	let format = "YYYY/MM/DD HH:mm";

	if (!timePicker) format = "YYYY/MM/DD";

	useEffect(() => {
		let date = value;

		const checkDate = (date: any) => {
			if (!date) return;
			if (!(date instanceof DateObject)) date = new DateObject({ date, calendar, locale, format });

			date.set({ locale, format });

			return date;
		};

		date = checkDate(date);

		setStringDate(date ? date.format() : "");
		setDate(date);
	}, [value, calendar, locale, format, timePicker]);

	const handleChange = (date: any) => {
		setDate(date);
		setStringDate(date ? date.format() : "");
	};

	return (
		<div className="h-auto font-iranyekan sm:hidden">
			<Popover className="w-full overflow-y-auto">
				<>
					<Popover.Button
						dir="ltr"
						className={`flex items-center w-fit justify-center h-12 border-1 border-secondary300 rounded-lg outline-none focus:outline-none ${
							!readOnly && "focus:border-primary"
						} ${inputContainerClassName}`}
					>
						<input
							dir={stringDate ? "ltr" : "rtl"}
							id="date-picker-input"
							readOnly
							type="text"
							value={stringDate ? stringDate : null}
							data-time-stamp={toTimeStamp(date, timePicker)}
							placeholder={inputPlaceholder}
							className={`h-full flex-1 px-2 rounded-l-lg bg-white placeholder:text-secondary400 focus:outline-none ${
								readOnly ? "cursor-not-allowed" : "cursor-pointer"
							} ${inputClassName}`}
						/>

						<label
							htmlFor="date-picker-input"
							className={`flex h-full items-center justify-center rounded-r-lg bg-[#D9D9D9] px-4 ${
								readOnly ? "cursor-not-allowed" : "cursor-pointer"
							} ${calendarIconClassName}`}
						>
							<CalendarIcon className="!fill-[#666666]" />
						</label>
					</Popover.Button>

					{!readOnly && (
						<>
							<Transition.Child
								as={Fragment}
								enter="ease-in-out"
								enterFrom="opacity-0"
								enterTo="opacity-100"
								leave="ease-in-out"
								leaveFrom="opacity-100"
								leaveTo="opacity-0"
							>
								<div className="fixed inset-0 w-screen h-screen bg-gray-900 bg-opacity-50" />
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
									className="absolute bottom-0 w-screen z-10 flex justify-center items-center rounded-t-3xl bg-white p-4"
								>
									<Calendar
										value={date}
										changeHandler={handleChange}
										propsOnChange={onChange}
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
					)}
				</>
			</Popover>
		</div>
	);
};

export default MobileDatePicker;
