import { IComponentProps } from "../../Component/IComponentProps";

export interface IMenuItemProps extends IComponentProps {
	label?: string;

	showDivider?: boolean;

	leadingIcon?: string;

	trailingIcon?: string;
	onTrailingIconClick?: (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => void;
}
