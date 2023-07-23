import React, { useState, useEffect } from 'react';
import CloseIcon from '../../assets/icons/closeIcon';
import { SelectedTagsListProps } from './SelectedTagsList.interface';

const SelectedTagsList = ({ theme, selectedTags, setSelectedTags, selectedTagClassName, selectedTagCloseIconClass }: SelectedTagsListProps) => {
    const [contentEditable, setContentEditable] = useState(false);

    const keyDown = (e: any) => {
        setContentEditable(true);

        if (e.key === 'Enter') {
            setContentEditable(false);
        }
    };

    return (
        <div className="w-fit flex flex-wrap gap-2">
            {selectedTags &&
                selectedTags.map((tag: string) => (
                    <span
                        key={tag}
                        onClick={() => setContentEditable(true)}
                        onChange={(e) => console.log(e)}
                        onKeyDown={keyDown}
                        className={`w-fit py-1.5 px-2 rounded-[4px] flex items-center gap-2.5 text-[13px] cursor-default focus:border-2 focus:border-secondary-400 hover:scale-105 ${
                            theme === 'dark' ? 'bg-zDark-5' : 'bg-zGray-300'
                        } ${selectedTagClassName}`}
                    >
                        <p dir="auto" contentEditable={contentEditable} className="text-[13px] outline-none">
                            {tag.trim() ? tag.trim() : selectedTags.filter((i) => i !== tag)}
                        </p>

                        <CloseIcon
                            className={`w-3 h-auto stroke-black cursor-pointer hover:scale-125 transition-all ease-in-out hover:stroke-red-600 ${selectedTagCloseIconClass}`}
                            onClick={() => setSelectedTags(selectedTags.filter((selectTag: string) => selectTag !== tag))}
                        />
                    </span>
                ))}
        </div>
    );
};

export default SelectedTagsList;
