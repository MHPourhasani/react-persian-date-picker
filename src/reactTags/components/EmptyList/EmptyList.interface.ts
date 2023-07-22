import { ModeType, ThemeType } from '../../interfaces/general';

export interface EmptyListProps {
    theme: ThemeType;
    mode: ModeType;
    filteredTags: string[];
    clickHandler: () => void;
    inputValue: string;
}
