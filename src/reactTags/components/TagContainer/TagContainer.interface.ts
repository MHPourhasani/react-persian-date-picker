import { ModeType, ThemeType } from '../../interfaces/general';

export interface TagContainerProps {
    mode: ModeType;
    theme?: ThemeType;
    title: string;
    maxTags?: number;
    tagsList?: string[];
    inputPlaceholder?: string;
    inputClassName?: string;
    dropDownContainerClassName?: string;
    tagsContainerClassName?: string;
    tagsClassName?: string;
    selectedTagClassName?: string;
    addToCategoryOnClick?: (a: any) => any;
}
