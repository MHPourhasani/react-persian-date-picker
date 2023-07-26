import React from 'react';
import { EmptyListProps } from './EmptyList.interface';

const EmptyList = ({ theme, filteredTags, clickHandler, inputValue }: EmptyListProps) => {
    return (
        <div className="absolute w-full bg-white rounded-xl">
            {!filteredTags.length && (
                <div className={`w-full flex-col flex`}>
                    <button
                        onClick={clickHandler}
                        className={`flex gap-2 cursor-pointer rounded-lg px-2 py-[7px] ${
                            theme === 'dark' ? 'text-white hover:bg-zGray-700' : 'text-zGray-800 hover:bg-zDark-12'
                        }`}
                    >
                        <span>افزودن</span>
                        <span>"{inputValue}"</span>
                        <span>به دسته بندی ها</span>
                    </button>
                </div>
            )}
        </div>
    );
};

export default EmptyList;
