import React from 'react';
import CloseIcon from '../../assets/icons/closeIcon';
import { SelectedTagsListProps } from './SelectedTagsList.interface';

const SelectedTagsList = ({ theme, selectedTags, setSelectedTags }: SelectedTagsListProps) => {
    return (
        <div className="w-fit flex flex-wrap gap-2">
            {selectedTags &&
                selectedTags.map((tag: string) => (
                    <span
                        key={tag}
                        className={`w-fit py-[3px] px-2 rounded-[4px] flex items-center gap-2.5 text-[13px] ${
                            theme === 'dark' ? 'bg-zDark-5' : 'bg-zGray-300'
                        }`}
                    >
                        <p className="text-[13px]">{tag}</p>
                        <CloseIcon
                            className="w-3 h-auto stroke-black cursor-pointer hover:scale-125"
                            onClick={() => setSelectedTags(selectedTags.filter((selectTag: string) => selectTag !== tag))}
                        />
                    </span>
                ))}
        </div>
    );
};

export default SelectedTagsList;
