import React, { useEffect, useState } from 'react';
import { TagContainerProps } from './TagContainer.interface';
import Input from '../../components/Input/Input';
import SelectedTagsList from '../SelectedTagsList/SelectedTagsList';
import Dropdown from '../../components/Dropdown/Dropdown';
import CloseIcon from '../../assets/icons/closeIcon';
import { FilteredTagsType, SelectedTagsType, ThemeType } from '../../interfaces/general';
import EmptyList from '../EmptyList/EmptyList';

export default function TagContainer({
    mode,
    theme,
    maxTags,
    tagsList,
    title,
    inputPlaceholder,
    inputClassName,
    addToCategoryOnClick,
    dropDownContainerClassName,
}: TagContainerProps) {
    const [userTheme, setUserTheme] = useState<ThemeType>('light');
    const [inputValue, setInputValue] = useState('');
    const [selectedTags, setSelectedTags] = useState<SelectedTagsType>([]);
    const [filteredTags, setFilteredTags] = useState<FilteredTagsType>([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [listOfTags, setListOfTags] = useState<any>([]);

    useEffect(() => {
        if (theme) {
            setUserTheme(theme);
        }
    }, [theme]);

    useEffect(() => {
        setListOfTags(tagsList);
    }, [tagsList]);

    useEffect(() => {
        if (listOfTags) {
            setFilteredTags(
                listOfTags
                    .filter((tag: string, index: number) => listOfTags.indexOf(tag) === index)
                    .filter((item: string) => Object.values(item).join('').toLowerCase().includes(inputValue.toLowerCase())),
            );
        }
    }, [inputValue, listOfTags]);

    useEffect(() => {
        if (maxTags) {
            setSelectedTags(selectedTags.slice(0, maxTags));
        }
    }, [maxTags, selectedTags]);

    useEffect(() => {
        setSelectedTags([...new Set(selectedTags)]);
    }, [selectedTags]);

    const inputChangeHandler = (e: any) => {
        let value = e.target.value.trim();
        setInputValue(value);
    };

    const inputKeyDown = (e: any) => {
        if (e.key === 'Enter' && inputValue) {
            if (
                mode === 'multi-select' &&
                selectedTags.filter((item: string) => Object.values(item).join('').toLowerCase().includes(inputValue.toLowerCase()))
            ) {
                // eslint-disable-next-line no-lone-blocks
                {!!filteredTags.length && setSelectedTags([...selectedTags, filteredTags]);}
            } else {
                if (mode === 'advanced-multi-select') {
                    addToCategoryOnClick?.(e.target.value.trim());
                    setListOfTags([...listOfTags, e.target.value.trim()]);
                }

                setSelectedTags([...selectedTags, e.target.value.trim()]);
            }
            setInputValue('');
        }

        if (e.key === 'Backspace' && !inputValue) {
            const tags = [...selectedTags];
            tags.pop();
            setSelectedTags(tags);
        }
    };

    const clickHandler = () => {
        if (inputValue.trim()) {
            setSelectedTags([...selectedTags, inputValue]);
            setListOfTags([...listOfTags, inputValue]);
        }
        setInputValue('');
    };

    const tagContainerMouseDown = (e: any) => {
        if (document.getElementById('tagContainer')?.contains(e.target)) {
            setShowDropdown(false);
            console.log('click');
        }
    };

    const tagsMouseDown = (e: any) => {
        if (document.getElementById('tags')?.contains(e.target) && !document.getElementById('input-container')?.contains(e.target)) {
            //     setShowDn(false);
        }
    };

    const selectedTagsProps = {
        selectedTags: selectedTags,
        setSelectedTags: setSelectedTags,
    };

    const globalProps = {
        theme: userTheme,
        mode: mode,
    };

    return (
        <section
            dir="rtl"
            id="tagsContainer"
            onMouseDown={tagContainerMouseDown}
            className={`w-full md:w-[774px] md:max-w-container flex flex-col items-center font-iranyekan ${
                userTheme === 'dark' ? 'bg-bg-dark' : 'bg-bg-light'
            }`}
        >
            <section className={`relative w-full mt-8`}>
                <label className={`text-sm mb-1 ${userTheme === 'dark' ? 'text-secondary-10' : 'text-zGray-800'}`}>{`${title}`} </label>
                <label className={`text-xs mb-1 ${userTheme === 'dark' ? 'text-secondary-400' : 'text-zGray-800'}`}>{`(حداکثر ${maxTags} مورد)`} </label>

                <div
                    id="tags"
                    onMouseDown={tagsMouseDown}
                    className={`w-full flex flex-wrap items-center gap-4 py-3 px-6 rounded-[0.625rem] border-secondary-100 focus:border ${
                        theme === 'dark' ? 'bg-zGray-700' : 'bg-zDark-5'
                    }`}
                >
                    <SelectedTagsList theme={userTheme} {...selectedTagsProps} />

                    <Input
                        placeholder={inputPlaceholder}
                        value={inputValue}
                        changeHandler={inputChangeHandler}
                        keyDown={inputKeyDown}
                        setShowDropdown={setShowDropdown}
                        theme={theme}
                        inputClassName={inputClassName}
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

            {showDropdown && mode !== 'array-of-string' && !!filteredTags.length && (
                <Dropdown
                    {...globalProps}
                    {...selectedTagsProps}
                    filteredTags={filteredTags}
                    dropDownContainerClassName={dropDownContainerClassName}
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                />
            )}

            {showDropdown && mode === 'advanced-multi-select' && !filteredTags.length && (
                <EmptyList
                    {...globalProps}
                    {...selectedTagsProps}
                    filteredTags={filteredTags}
                    inputValue={inputValue}
                    clickHandler={clickHandler}
                />
            )}
        </section>
    );
}
