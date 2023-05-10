import DateObject from 'react-date-object';

const isSameDate = (firstDate: DateObject, secondDate: DateObject) => {
	if (!firstDate || !secondDate) return false;

	if (firstDate.year === secondDate.year) {
		if (firstDate.monthIndex === secondDate.monthIndex) {
			return firstDate.day === secondDate.day;
		}
	}
};

export default isSameDate;
