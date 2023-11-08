import React from 'react';
import { DropdownProps } from './Dropdown.interface';
import EmptyList from '../EmptyList/EmptyList';
import { useOutsideClick } from '../../hooks/useOutsideClick';

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
    setShowDropdown,
}: DropdownProps) => {
    const handleClickOutside = () => {
        setShowDropdown(false);
    };

    const ref: any = useOutsideClick(handleClickOutside);

    const dropDownOnClick = (e: any) => {
        e.stopPropagation();
    };

    return (
        <div
            id="dropDown"
            ref={ref}
            onClick={dropDownOnClick}
            className={`bg-white w-full h-auto overflow-y-auto max-h-64 flex flex-col gap-1 pt-0 border rounded-xl custom-scrollbar ${dropDownContainerClassName}`}
        >
            {mode === 'advanced-multi-select' && filteredTags && inputValue.trim() && !filteredTags.find((tag: string) => tag === inputValue) && (
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
                        theme === 'dark' ? 'text-white hover:bg-zGray-700' : 'text-zGray-800 hover:bg-zSecondary-300'
                    } ${filteredTags.indexOf(item) === activeIndex && 'bg-zSecondary-300'} ${
                        filteredTags.find((tag: string) => tag === selectedTags[selectedTags.indexOf(item)]) && 'text-zSecondary-400 cursor-text'
                    }`}
                >
                    {item}
                </span>
            ))}
        </div>
    );
};

export default Dropdown;
