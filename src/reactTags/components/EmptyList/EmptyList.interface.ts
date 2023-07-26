import { ModeType, ThemeType } from '../../interfaces/general';

export interface EmptyListProps {
    theme: ThemeType;
    mode: ModeType;
    clickHandler: () => void;
    inputValue: string;
}
