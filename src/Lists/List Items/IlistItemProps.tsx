import { IComponentProps } from "../../Component/IComponentProps";

export interface IListItemProps extends IComponentProps {
	title?: string;

	size?: string;

	showDivider?: boolean;

	leadingElement?: string;
	leadingElementId?: string;

	trailingElement?: string;
	trailingElementId?: string;

	leadingMonogramInitial?: string;

	iconName?: string;

	imageSrc?: string;

	radioButtonGroupName?: string;
	radioButtonValue?: string;

	checkboxConfiguration?: string;

	onElementChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onTrailingIconClick?: (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => void;

	elementSelected?: boolean;

	switchIconNameSelected?: string;
	switchIconNameDeselected?: string;
}
