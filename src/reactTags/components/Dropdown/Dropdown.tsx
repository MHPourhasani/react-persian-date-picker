import React from 'react';
import { DropdownProps } from './Dropdown.interface';

const Dropdown = ({
    theme,
    filteredTags,
    maxTags,
    selectedTags,
    setSelectedTags,
    dropDownContainerClassName,
    setInputValue,
    activeIndex,
}: DropdownProps) => {
    return (
        <div
            className={`absolute bg-white w-full h-auto overflow-y-auto max-h-64 flex flex-col gap-1 pt-0 border rounded-xl custom-scrollbar ${dropDownContainerClassName}`}
        >
            {filteredTags.map((item: any, index: number) => (
                <span
                    key={index}
                    onClick={() => {
                        setSelectedTags([...new Set([...selectedTags, item].slice(0, maxTags))]);
                        setInputValue('');
                    }}
                    className={`cursor-pointer rounded-lg py-2 px-4 ${
                        theme === 'dark' ? 'text-white hover:bg-zGray-700' : 'text-zGray-800 hover:bg-secondary-300'
                    } ${filteredTags.indexOf(item) === activeIndex && 'bg-secondary-300'} ${
                        filteredTags.find((tag: string) => tag === selectedTags[selectedTags.indexOf(item)]) && 'text-zGray-300 cursor-text'
                    }`}
                >
                    {item}
                </span>
            ))}
        </div>
    );
};

export default Dropdown;
