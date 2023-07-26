import React from 'react';
import { DropdownProps } from './Dropdown.interface';
import EmptyList from '../EmptyList/EmptyList';

const Dropdown = ({
    theme,
    mode,
    filteredTags,
    maxTags,
    selectedTags,
    setSelectedTags,
    dropDownContainerClassName,
    inputValue,
    setInputValue,
    clickHandler,
    activeIndex,
}: DropdownProps) => {
    return (
        <div
            className={`bg-white w-full h-auto overflow-y-auto max-h-64 flex flex-col gap-1 pt-0 border rounded-xl custom-scrollbar ${dropDownContainerClassName}`}
        >
            {filteredTags && inputValue.trim() && !filteredTags.find((tag: string) => tag === inputValue) && (
                <EmptyList inputValue={inputValue} clickHandler={clickHandler} theme={theme} mode={mode} />
            )}

            {filteredTags.map((item: string) => (
                <span
                    key={item}
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
