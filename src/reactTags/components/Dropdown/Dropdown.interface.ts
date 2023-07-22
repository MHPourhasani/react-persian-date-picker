import { ModeType, SelectedTagsType, ThemeType } from '../../interfaces/general';

export interface DropdownProps {
    theme: ThemeType;
    mode: ModeType;
    filteredTags: string[];
    selectedTags: SelectedTagsType;
    setSelectedTags: any;
    dropDownContainerClassName?: string;
    inputValue: string;
    setInputValue?: (a: string) => void;
}
