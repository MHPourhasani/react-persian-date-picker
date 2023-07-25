import { ModeType, SelectedTagsType, ThemeType } from '../../interfaces/general';

export interface DropdownProps {
    theme: ThemeType;
    mode: ModeType;
    maxTags?: number;
    filteredTags: string[];
    selectedTags: SelectedTagsType;
    setSelectedTags: any;
    dropDownContainerClassName?: string;
    inputValue: string;
    setInputValue: any;
    activeIndex?: number;
}
