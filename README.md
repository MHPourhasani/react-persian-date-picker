## Persian Date Picker

Simple persian react date picker with reactjs, typeScript and tailwindcss.

## Installation

```
npm install --save persian-date-picker-reactjs

yarn add persian-date-picker-reactjs

```

## Features

## Available props

|     | Props                   |  Types  | Default                                                                                                          |  types   | Description                          |
| :-: | :---------------------- | :-----: | :--------------------------------------------------------------------------------------------------------------- | :------: | :----------------------------------- | --- |
|  1  | value                   |  Date   | string                                                                                                           |          | mandatory                            |     |
|  2  | minDate                 |  Date   | --------                                                                                                         | optional |                                      |
|  3  | maxDate                 |  Date   | --------                                                                                                         | optional |                                      |
|  4  | timePicker              | boolean | true                                                                                                             | optional | To show Time picker (default true)   |
|  5  | inputContainerClassName | string  | outline-none bg-white z-10 h-12 border-1 border-secondary300 focus:border-primary rounded-lg cursor-pointer pl-2 | optional | To change Date picker input's styles |
|  6  | calendarClassName       | string  | flex w-full flex-col items-center justify-center                                                                 | optional | To change calendar's styles          |
|  7  | dayClassName            | string  | flex h-12 w-12 items-center justify-center                                                                       | optional | To change calendar's styles          |
|  8  | todayClassName          | string  | border-1.5 border-primary                                                                                        | optional | To change day's styles               |
|  9  | selectedDayClassName    | string  | bg-primary text-white                                                                                            | optional | To change selected day's styles      |
| 10  | disabledDayClassName    | string  | text-secondary300 cursor-text border-none                                                                        | optional | To change disabled day's styles      |

## Simple Usage

```jsx
// in _app.tsx file in Nextjs project added this
import "persian-date-picker-reactjs/styles.css";

// in App.jsx or App.tsx file in React project added this
import "persian-date-picker-reactjs/styles.css";
```

```jsx
import React, { useState } from "react";

import {
  DatePickerContainer,
  MobileDatePickerContainer,
} from "persian-date-picker-reactjs";

const App = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div>
      {/* To show in desktop screen */}
      <DatePickerContainer value={value} />

      {/* To show in mobile screen */}
      <MobileDatePickerContainer value={value} />
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
import React, { useState } from "react";

import {
  DatePickerContainer,
  MobileDatePickerContainer,
} from "persian-date-picker-reactjs";

const App = () => {
  return (
    <div>
      {/* To show in desktop screen */}
      <DatePickerContainer
        // require props
        value={value}
        // optional props
        minDate={new Date(1390)}
        maxDate={new Date()}
        timePicker={true}
        inputContainerClassName=""
        calendarClassName=""
        dayClassName="rounded-xl cursor-pointer hover:border-1.5 hover:border-green-500"
        todayClassName="border-green-500 border-4 text-white"
        selectedDayClassName="bg-green-500 text-white"
        disabledDayClassName="line-through text-gray-300"
      />

      {/* To show in mobile screen */}
      <MobileDatePickerContainer
        // require props
        value={value}
        // optional props
        minDate={new Date(1390)}
        maxDate={new Date()}
        timePicker={true}
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
