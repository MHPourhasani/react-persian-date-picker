import { ThemeType } from "../../interfaces/general";

export interface SelectedTagsListProps {
    theme: ThemeType;
    selectedTags: string[];
    setSelectedTags: any;
}
