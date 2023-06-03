import { IComponentProps } from "../Component/IComponentProps";

export interface ITextFieldProps extends IComponentProps {
	configuration?: string;
	textConfiguration?: string;
	leadingIconName?: string;
	trailingIcon?: boolean;
	label?: string;
	placeholder?: string;
	input?: string;
	validRegex?: RegExp;
}
