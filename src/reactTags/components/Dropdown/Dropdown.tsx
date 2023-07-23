import React from 'react';
import { DropdownProps } from './Dropdown.interface';

const Dropdown = ({ theme, filteredTags, selectedTags, setSelectedTags, dropDownContainerClassName, setInputValue }: DropdownProps) => {
    return (
        <div
            className={`absolute bg-white w-full h-auto overflow-y-auto max-h-64 flex flex-col gap-1 p-4 pt-0 rounded-xl ${dropDownContainerClassName}`}
        >
            {filteredTags.map((item: any, index: number) => (
                <span
                    key={index}
                    onClick={() => {
                        setSelectedTags([...selectedTags, item]);
                        setInputValue('');
                    }}
                    className={`cursor-pointer rounded-lg px-2 py-[7px] ${
                        theme === 'dark' ? 'text-white hover:bg-zGray-700' : 'text-zGray-800 hover:bg-zDark-12'
                    }`}
                >
                    {item}
                </span>
            ))}
        </div>
    );
};

export default Dropdown;
