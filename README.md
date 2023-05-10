✔ persian-date-picker-vite allows you to add notifications to your react app

## Installation

```
$ npm install --save persian-date-picker-vite
$ yarn add persian-date-picker-vite

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

## Example

```jsx
import React from "react";

import {
  DatePickerContainer,
  MobileDatePickerContainer,
} from "persian-date-picker-vite";

const App = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div>
      <ToastContainer
        // require props
        value={props.value}
        onChange={props.onChange}
        // optional props
        maxDate={props.maxDate}
        inputClassName={props.inputClassName}
        calendarClassName={props.calendarClassName}
        dayClassName={props.dayClassName}
        todayClassName={props.todayClassName}
        selectedDayClassName={props.selectedDayClassName}
        disabledDayClassName={props.disabledDayClassName}
      />
    </div>
  );
};
```

## License

Licensed under MIT
