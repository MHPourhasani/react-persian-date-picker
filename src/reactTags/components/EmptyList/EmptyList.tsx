import React from 'react';
import { EmptyListProps } from './EmptyList.interface';

const EmptyList = ({ theme, clickHandler, inputValue }: EmptyListProps) => {
    return (
        <div className=" w-full bg-white rounded-xl">
            <div className={`w-full flex-col flex`}>
                <button
                    onClick={clickHandler}
                    className={`flex gap-2 cursor-pointer rounded-lg px-2 py-[7px] ${
                        theme === 'dark' ? 'text-white hover:bg-zGray-700' : 'text-zGray-800 hover:bg-zDark-12'
                    }`}
                >
                    <span>افزودن</span>
                    <span>"{inputValue}"</span>
                </button>
            </div>
        </div>
    );
};

export default EmptyList;
