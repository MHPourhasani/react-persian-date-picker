import React from 'react';
import { InputProps } from './Input.interface';

const Input = ({ theme, placeholder, setShowDropdown, value, changeHandler, keyDown, inputClassName }: InputProps) => {
    const inputMouseDown = (e: any) => {
        if (!document.getElementById('input')?.contains(e.target)) {
            // setShowDropdown(false);
        }
    };

    return (
        <input
            type="text"
            placeholder={placeholder}
            value={value}
            autoFocus
            onChange={changeHandler}
            onKeyDown={keyDown}
            onFocus={() => setShowDropdown(true)}
            onMouseDown={inputMouseDown}
            className={`w-60 py-1 px-4 rounded-[10px] outline-none placeholder:text-right bg-transparent placeholder:text-sm placeholder:text-secondary-400 ${
                theme === 'dark' ? 'text-white' : 'text-zGray-800'
            } ${inputClassName}`}
        />
    );
};

export default Input;
