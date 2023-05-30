import { IComponentProps } from "../../Component/IComponentProps";

export interface ITopAppBarProps extends IComponentProps {
	configuration?: string;
	title?: string;
	leadingIcon?: { name: string; onClick?: () => void };
	trailingIcons?: { name: string; onClick?: () => void }[];
}
