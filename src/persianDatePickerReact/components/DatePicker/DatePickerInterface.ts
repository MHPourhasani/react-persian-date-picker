import { DateType } from "react-date-object";

export interface DatePickerProps {
	value?: any;
	onChange?: (date: number) => void;
	minDate?: DateType;
	maxDate?: DateType;
	timePicker?: boolean;
	readOnly?: boolean;
	inputPlaceholder?: string;
	inputContainerClassName?: string;
	inputClassName?: string;
	calendarIconClassName?: string;
	calendarClassName?: string;
	dayClassName?: string;
	todayClassName?: string;
	selectedDayClassName?: string;
	disabledDayClassName?: string;
}
