import { ModeType, ThemeType } from '../../interfaces/general';

export interface TagContainerProps {
    mode: ModeType;
    theme?: ThemeType;
    title: string;
    maxTags?: number;
    selectedTags: string[];
    setSelectedTags: any;
    categoriesTags?: string[];
    inputPlaceholder?: string;
    inputClassName?: string;
    dropDownContainerClassName?: string;
    tagsContainerClassName?: string;
    tagsClassName?: string;
    selectedTagClassName?: string;
    selectedTagCloseIconClass?: string;
    addToCategoryOnClick?: (a: any) => any;
}
