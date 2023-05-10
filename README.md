✔ persian-date-picker-reactjs allows you to add Date Picker to your react app or Next app

## Persian Date Picker

Simple persian react date picker

## Installation

```
$ npm install --save persian-date-picker-reactjs
$ yarn add persian-date-picker-reactjs

```

## Features

- Installing and using this package is very simple
- Define behavior per toast
- Fancy progress bar to display the remaining time
- Possibility to update a toast
- Dark 🌒 and light ☀ mode
- Ability to set the duration of toast display
- Determinig where to display the toast, you can set four positions: top-right | top-left | bottom-right | bottom-left
- types: success | warning | error | promise
- And much more !

|     | Props                |  Types  | Default                                          | types     | Description                          |
| :-: | :------------------- | :-----: | :----------------------------------------------- | :-------- | ------------------------------------ |
|  1  | value                |  Date   |                                                  | mandatory |                                      |
|  2  | onChange             |  Date   |                                                  | mandatory | To change Date picker input          |
|  3  | minDate              |  Date   |                                                  | optional  |                                      |
|  4  | maxDate              |  Date   |                                                  | optional  |                                      |
|  5  | timePicker           | boolean | true                                             | optional  | To show Time picker (default true)   |
|  6  | inputClassName       | string  |                                                  | optional  | To change Date picker input's styles |
|  7  | calendarClassName    | string  | flex w-full flex-col items-center justify-center | optional  | To change calendar's styles          |
|  8  | dayClassName         | string  | flex h-12 w-12 items-center justify-center       | optional  | To change calendar's styles          |
|  9  | todayClassName       | string  | border-1.5 border-primary                        | optional  | To change day's styles               |
| 10  | selectedDayClassName | string  | bg-primary text-white                            | optional  | To change selected day's styles      |
| 11  | disabledDayClassName | string  | text-secondary300 cursor-text border-none        | optional  | To change disabled day's styles      |

## Simple Usage

```jsx
// in _app.tsx file in Nextjs project added this
import "persian-date-picker-reactjs/styles.css";

// in App.jsx or App.tsx file in Nextjs project added this
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
      <DatePickerContainer value={value} onChange={setValue} />

      {/* To show in mobile screen */}
      <MobileDatePickerContainer value={value} onChange={setValue} />
    </div>
  );
};
```

## Advanced Examples

```jsx
// in _app.tsx file in Nextjs project added this
import "persian-date-picker-reactjs/styles.css";

// in App.jsx or App.tsx file in Nextjs project added this
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
      <DatePickerContainer
        // require props
        value={value}
        onChange={setValue}
        // optional props
        minDate={new Date(1390)}
        maxDate={new Date()}
        timePicker={true}
        inputClassName=""
        calendarClassName=""
        dayClassName=""
        todayClassName=""
        selectedDayClassName=""
        disabledDayClassName=""
      />

      {/* To show in mobile screen */}
      <MobileDatePickerContainer
        // require props
        value={value}
        onChange={setValue}
        // optional props
        minDate={new Date(1390)}
        maxDate={new Date()}
        timePicker={true}
        inputClassName=""
        calendarClassName=""
        dayClassName=""
        todayClassName=""
        selectedDayClassName=""
        disabledDayClassName=""
      />
    </div>
  );
};
```

## License

Licensed under MIT
