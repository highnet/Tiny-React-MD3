import { IComponentProps } from "../../Component/IComponentProps";

export interface IListItemProps extends IComponentProps {
	title?: string;
	leadingElement?: string;
	leadingElementId?: string;
	trailingElement?: string;
	trailingElementId?: string;
	size?: string;
	showDivider?: boolean;
	leadingMonogramInitial?: string;
	leadingIconName?: string;
	imageSrc?: string;
	onLeadingElementChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	radioButtonGroupName?: string;
	radioButtonValue?: string;
	radioButtonSelected?: boolean;
	checkboxSelected?: boolean;
	checkboxConfiguration?: string;
}
