import { ModeType, ThemeType } from '../../interfaces/general';

export interface SelectedTagsListProps {
    theme: ThemeType;
    mode: ModeType;
    maxTags?: number;
    selectedTags: string[];
    setSelectedTags: any;
    selectedTagClassName?: string;
    selectedTagCloseIconClass?: string;
}
