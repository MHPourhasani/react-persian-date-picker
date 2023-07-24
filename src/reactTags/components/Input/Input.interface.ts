import { ThemeType } from '../../interfaces/general';

export interface InputProps {
    label?: string;
    placeholder?: string;
    value?: string;
    changeHandler?: (e: any) => void;
    keyDown?: (e: any) => void;
    setShowDropdown?: any;
    theme?: ThemeType;
    inputClassName?: string;
    selectedTags: string[];
}
