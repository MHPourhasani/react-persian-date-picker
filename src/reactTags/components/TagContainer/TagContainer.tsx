import React, { useEffect, useState } from 'react';
import { TagContainerProps } from './TagContainer.interface';
import { FilteredTagsType, ThemeType } from '../../interfaces/general';
import SelectedTagsList from '../SelectedTagsList/SelectedTagsList';
import Input from '../Input/Input';
import Dropdown from '../Dropdown/Dropdown';
import EmptyList from '../EmptyList/EmptyList';
import CloseIcon from '../../assets/icons/closeIcon';

export default function TagContainer({
    mode,
    theme = 'light',
    maxTags,
    selectedTags,
    setSelectedTags,
    categoriesTags,
    title = 'تگ',
    inputPlaceholder = 'آیتم‌ها را با Enter از هم جدا کنید.',
    inputClassName,
    addToCategoryOnClick,
    dropDownContainerClassName,
    tagsContainerClassName,
    tagsClassName,
    selectedTagClassName,
    selectedTagCloseIconClass,
}: TagContainerProps) {
    const [userTheme] = useState<ThemeType>('light');
    const [inputValue, setInputValue] = useState('');
    const [filteredTags, setFilteredTags] = useState<FilteredTagsType>([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [listOfTags, setListOfTags] = useState<any>([]);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    useEffect(() => {
        setListOfTags(categoriesTags);
    }, [categoriesTags]);

    useEffect(() => {
        if (listOfTags) {
            setFilteredTags(
                listOfTags
                    .filter((tag: string, index: number) => listOfTags.indexOf(tag) === index)
                    .filter((item: string) => Object.values(item).join('').toLowerCase().includes(inputValue.toLowerCase())),
            );
        }
    }, [inputValue, listOfTags]);

    const inputChangeHandler = (e: any) => {
        let value = e.target.value.trim();
        setInputValue(value);
    };

    const inputKeyDown = (e: any) => {
        if (e.key === 'Enter' && inputValue && activeIndex === null) {
            if (
                mode === 'multi-select' &&
                selectedTags.filter((item: string) => Object.values(item).join('').toLowerCase().includes(e.target.value.toLowerCase()))
            ) {
                if (filteredTags.find((i) => i === e.target.value)) {
                    setSelectedTags([...new Set([...selectedTags, e.target.value.trim()].slice(0, maxTags))]);
                }
            } else {
                if (mode === 'advanced-multi-select' && maxTags && selectedTags.length < maxTags) {
                    addToCategoryOnClick?.(e.target.value.trim());
                    setListOfTags([...listOfTags, e.target.value.trim()]);
                }

                setSelectedTags([...new Set([...selectedTags, e.target.value.trim()].slice(0, maxTags))]);
            }

            setInputValue('');
        }

        if (e.key === 'Enter') {
            if (activeIndex !== null) {
                setSelectedTags([...new Set([...selectedTags, filteredTags[activeIndex]].slice(0, maxTags))]);
                setInputValue('');
                setActiveIndex(null);
            }
        }

        if (e.key === 'Backspace') {
            if (!inputValue) {
                const tags = [...selectedTags];
                tags.pop();
                setSelectedTags(tags);
            }
            setActiveIndex(null);
        }

        if (e.key === 'ArrowDown') {
            if (activeIndex === null) {
                setActiveIndex(0);
            } else if (activeIndex === filteredTags.length - 1) {
                setActiveIndex(0);
            } else {
                setActiveIndex(activeIndex + 1);
            }
        }

        if (e.key === 'ArrowUp') {
            if (activeIndex === null) {
                setActiveIndex(filteredTags.length - 1);
            } else if (activeIndex === 0) {
                setActiveIndex(filteredTags.length - 1);
            } else {
                setActiveIndex(activeIndex - 1);
            }
        }
    };

    const clickHandler = () => {
        if (inputValue.trim()) {
            setSelectedTags([...new Set([...selectedTags, inputValue].slice(0, maxTags))]);
            setListOfTags([...listOfTags, inputValue]);
        }
        setInputValue('');
    };

    const tagsMouseDown = (e: any) => {
        if (!document.getElementById('input')?.contains(e.target)) {
            setShowDropdown(false);
        }
    };

    useEffect(() => {
        if (!showDropdown) {
            setActiveIndex(null);
        }
    }, [showDropdown]);

    const selectedTagsProps = {
        selectedTags: selectedTags,
        setSelectedTags: setSelectedTags,
    };

    const globalProps = {
        theme: userTheme,
        mode: mode,
    };

    return (
        <section dir="rtl" id="tagsContainer" className={`w-full flex flex-col items-center font-iranyekan ${tagsContainerClassName}`}>
            <section className={`relative w-full`}>
                <label className={`text-sm ${userTheme === 'dark' ? 'text-zSecondary-10' : 'text-zGray-800'}`}>{`${title}`}</label>
                <label
                    className={`text-sm mr-1 ${userTheme === 'dark' ? 'text-zSecondary-400' : 'text-zSecondary-400'}`}
                >{`(حداکثر ${maxTags} مورد)`}</label>

                <div
                    id="tags"
                    onMouseDown={tagsMouseDown}
                    className={`relative w-full h-14 flex flex-wrap items-center gap-2 mt-2 px-2.5 rounded-[0.625rem] border-zSecondary-100 border ${
                        userTheme === 'dark' ? 'bg-bg-dark' : 'bg-bg-light'
                    } ${tagsClassName}`}
                >
                    {!!selectedTags.length && (
                        <SelectedTagsList
                            {...globalProps}
                            {...selectedTagsProps}
                            maxTags={maxTags}
                            selectedTagClassName={selectedTagClassName}
                            selectedTagCloseIconClass={selectedTagCloseIconClass}
                        />
                    )}

                    <Input
                        placeholder={inputPlaceholder}
                        value={inputValue}
                        changeHandler={inputChangeHandler}
                        keyDown={inputKeyDown}
                        setShowDropdown={setShowDropdown}
                        theme={theme}
                        inputClassName={inputClassName}
                        selectedTags={selectedTags}
                    />

                    {mode === 'advanced-multi-select' && (
                        <span
                            className={`absolute left-3 rounded-full transition-all ease-in-out ${
                                theme === 'dark' ? 'hover:bg-zGray-800' : 'hover:bg-zGray-300'
                            }`}
                        >
                            <CloseIcon
                                onClick={clickHandler}
                                className={`w-4 h-auto rotate-45 cursor-pointer ${theme === 'dark' ? 'stroke-white' : 'stroke-zGray-800'}`}
                            />
                        </span>
                    )}
                </div>
            </section>

            <span id="dropdown-container" className="relative w-full z-50">
                {showDropdown && mode === 'advanced-multi-select' && !filteredTags.length && !filteredTags.find((item) => item === inputValue) && (
                    <div className="absolute w-full">
                        <EmptyList {...globalProps} inputValue={inputValue} clickHandler={clickHandler} />
                    </div>
                )}

                {showDropdown && mode !== 'array-of-string' && !!filteredTags.length && (
                    <div className="absolute w-full">
                        <Dropdown
                            {...globalProps}
                            {...selectedTagsProps}
                            maxTags={maxTags}
                            filteredTags={filteredTags}
                            dropDownContainerClassName={dropDownContainerClassName}
                            inputValue={inputValue}
                            setInputValue={setInputValue}
                            clickHandler={clickHandler}
                            activeIndex={activeIndex}
                            setShowDropdown={setShowDropdown}
                        />
                    </div>
                )}
            </span>
        </section>
    );
}
