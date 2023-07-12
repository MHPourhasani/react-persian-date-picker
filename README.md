## Persian Date Picker

Simple persian react date picker with React, TypeScript and Tailwindcss.

## Installation

```
npm install --save persian-date-picker-reactjs

yarn add persian-date-picker-reactjs
```

## Features

## Available props

|     | Props                   | Types          | Default                                                                                                                      |          |
| :-: | :---------------------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------- | :------: |
|  1  | value                   | Date or string | --------                                                                                                                     | optional |
|  1  | onChange                | function       | (date: number) => void                                                                                                       | optional |
|  2  | minDate                 | Date           | --------                                                                                                                     | optional |
|  3  | maxDate                 | Date           | --------                                                                                                                     | optional |
|  4  | timePicker              | boolean        | true                                                                                                                         | optional |
|  5  | readOnly                | boolean        | false                                                                                                                        | optional |
|  6  | inputContainerClassName | string         | relative flex items-center w-fit justify-center h-12 border-1 border-secondary300 rounded-lg outline-none focus:outline-none | optional |
|  6  | inputClassName          | string         | flex items-center justify-center h-12 border-1 border-secondary300 rounded-lg outline-none focus:outline-none                | optional |
|  7  | calendarIconClassName   | string         | flex h-full items-center justify-center rounded-r-lg bg-[#D9D9D9] px-4                                                       | optional |
|  8  | calendarClassName       | string         | flex w-full flex-col items-center justify-center                                                                             | optional |
|  9  | dayClassName            | string         | flex h-12 w-12 items-center justify-center                                                                                   | optional |
| 10  | todayClassName          | string         | border-1.5 border-primary                                                                                                    | optional |
| 11  | selectedDayClassName    | string         | bg-primary text-white                                                                                                        | optional |
| 12  | disabledDayClassName    | string         | text-secondary300 cursor-text border-none                                                                                    | optional |

## Simple Usage

```jsx
// In _app.tsx file in Nextjs project added this
import "persian-date-picker-reactjs/styles.css";

// Add this in the component you want to use
import { DatePickerContainer, MobileDatePickerContainer } from "persian-date-picker-reactjs";
import "persian-date-picker-reactjs/styles.css";

// In App.jsx or App.tsx file in Vite React project added this
import { DatePickerContainer, MobileDatePickerContainer } from "persian-date-picker-reactjs";
import "persian-date-picker-reactjs/styles.css";
```

```jsx
import { DatePickerContainer, MobileDatePickerContainer } from "persian-date-picker-reactjs";

const App = () => {
	return (
		<div>
			{/* To show in desktop screen */}
			<DatePickerContainer />

			{/* To show in mobile screen */}
			<MobileDatePickerContainer />
		</div>
	);
};
```
The output is like this
![alt text](https://github.com/MHPourhasani/react-persian-date-picker/blob/master/screenShot/date-picker-blue.jpg)

## Advanced Examples

```jsx
// in _app.tsx file in nextjs project added this
import "persian-date-picker-reactjs/styles.css";

// in App.jsx or App.tsx file in React project added this
import "persian-date-picker-reactjs/styles.css";

// in App.jsx or App.tsx file in Vite React project added this
import { DatePickerContainer, MobileDatePickerContainer } from "persian-date-picker-reactjs/index.js";
import "persian-date-picker-reactjs/styles.css";
```

```jsx
import { DatePickerContainer, MobileDatePickerContainer } from "persian-date-picker-reactjs";

const App = () => {
	return (
		<div>
			{/* To show in desktop screen */}
			<DatePickerContainer
				value={new Date()}
				onChange={(date) => console.log(date)}
				minDate={new Date(1390)}
				maxDate={new Date()}
				timePicker={true}
				readOnly={false}
				inputContainerClassName=""
				inputClassName=""
				inputPlaceholder="Please select a date"
				calendarClassName=""
				dayClassName="rounded-xl cursor-pointer hover:border-1.5 hover:border-green-500"
				todayClassName="border-green-500 border-4 text-white"
				selectedDayClassName="bg-green-500 text-white"
				disabledDayClassName="line-through text-gray-300"
			/>

			{/* To show in mobile screen */}
			<MobileDatePickerContainer
				value={new Date()}
				onChange={(date) => console.log(date)}
				minDate={new Date(1390)}
				maxDate={new Date()}
				timePicker={true}
				readOnly={false}
				inputContainerClassName=""
				inputClassName=""
				inputPlaceholder="Please select a date"
				calendarClassName=""
				dayClassName="rounded-xl cursor-pointer hover:border-1.5 hover:border-green-500"
				todayClassName="border-green-500 border-4 text-white"
				selectedDayClassName="bg-green-500 text-white"
				disabledDayClassName="line-through text-gray-300"
			/>
		</div>
	);
};
```

The output is like this
![alt text](https://github.com/MHPourhasani/react-persian-date-picker/blob/master/screenShot/date-picker-green.jpg)

## License

Licensed under MIT
