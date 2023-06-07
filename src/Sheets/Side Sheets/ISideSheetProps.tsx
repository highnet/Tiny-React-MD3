import { IComponentProps } from "../../Component/IComponentProps";

export interface ISideSheetProps extends IComponentProps {
	title?: string;
	trailingIcon?: {
		name?: string;
		onClick?: () => void;
	};
	leadingIcon?: {
		name?: string;
		onClick?: () => void;
	};
	buttons?: {
		label?: string;
		onClick?: () => void;
	}[];
	content?: React.ReactNode;
}
