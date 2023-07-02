import { IComponentProps } from "../../Component/IComponentProps";

export interface INavigationDrawerItemProps extends IComponentProps {
	leadingIcon?: string;
	label?: string;
	trailingText?: string;
	interactive?: boolean;
	showDivider?: boolean;
}
