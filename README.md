## Persian Date Picker

Simple persian react date picker with React, TypeScript and Tailwindcss.

## Installation

```
npm install --save persian-date-picker-reactjs

yarn add persian-date-picker-reactjs

```

## Features

## Available props

|     | Props                   |     Types      | Default                                                                                                          |          |
| :-: | :---------------------- | :------------: | :--------------------------------------------------------------------------------------------------------------- | :------: |
|  1  | value                   | Date or string |                                                                                                                  | optional |
|  1  | onChange                |    function    | (date: number) => void                                                                                           | optional |
|  2  | minDate                 |      Date      | --------                                                                                                         | optional |
|  3  | maxDate                 |      Date      | --------                                                                                                         | optional |
|  4  | timePicker              |    boolean     | true                                                                                                             | optional |
|  5  | readOnly                |    boolean     | false                                                                                                            | optional |
|  6  | inputContainerClassName |     string     | outline-none bg-white z-10 h-12 border-1 border-secondary300 focus:border-primary rounded-lg cursor-pointer pl-2 | optional |
|  7  | calendarClassName       |     string     | flex w-full flex-col items-center justify-center                                                                 | optional |
|  8  | dayClassName            |     string     | flex h-12 w-12 items-center justify-center                                                                       | optional |
|  9  | todayClassName          |     string     | border-1.5 border-primary                                                                                        | optional |
| 10  | selectedDayClassName    |     string     | bg-primary text-white                                                                                            | optional |
| 11  | disabledDayClassName    |     string     | text-secondary300 cursor-text border-none                                                                        | optional |

## Simple Usage

```jsx
// in _app.tsx file in Nextjs project added this
import "persian-date-picker-reactjs/styles.css";

// in App.jsx or App.tsx file in React project added this
import "persian-date-picker-reactjs/styles.css";
```

```jsx
import {
  DatePickerContainer,
  MobileDatePickerContainer,
} from "persian-date-picker-reactjs";

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

## Advanced Examples

```jsx
// in _app.tsx file in Nextjs project added this
import "persian-date-picker-reactjs/styles.css";

// in App.jsx or App.tsx file in React project added this
import "persian-date-picker-reactjs/styles.css";
```

```jsx
import {
  DatePickerContainer,
  MobileDatePickerContainer,
} from "persian-date-picker-reactjs";

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
        inputPlaceholder="Please select a date"
        inputContainerClassName=""
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
        timePicker={false}
        readOnly={true}
        inputPlaceholder="Please select a date"
        inputContainerClassName=""
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

## License

Licensed under MIT
