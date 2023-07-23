import React from 'react';
import { EmptyListProps } from './EmptyList.interface';

const EmptyList = ({ theme, filteredTags, clickHandler, inputValue }: EmptyListProps) => {
    return (
        <div className="absolute w-full bg-white rounded-xl">
            {!filteredTags.length && (
                <div className={`w-full flex-col flex`}>
                    <button
                        onClick={clickHandler}
                        className={`cursor-pointer rounded-lg px-2 py-[7px] ${
                            theme === 'dark' ? 'text-white hover:bg-zGray-700' : 'text-zGray-800 hover:bg-zDark-12'
                        }`}
                    >
                        افزودن به دسته بندی ها
                    </button>
                    <span
                        className={`cursor-pointer rounded-lg px-2 py-[7px] ${
                            theme === 'dark' ? 'text-white hover:bg-zGray-700' : 'text-zGray-800 hover:bg-zDark-12'
                        }`}
                    >
                        {inputValue}
                    </span>
                </div>
            )}
        </div>
    );
};

export default EmptyList;
