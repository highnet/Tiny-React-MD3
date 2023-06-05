import { IComponentProps } from "../../Component/IComponentProps";

export interface IListItemProps extends IComponentProps {
	onLeadingElementChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	title?: string;

	size?: string;

	showDivider?: boolean;

	leadingElement?: string;
	leadingElementId?: string;

	leadingElementSelected?: boolean;

	leadingMonogramInitial?: string;

	leadingIconName?: string;

	leadingImageSrc?: string;

	leadingRadioButtonGroupName?: string;
	leadingRadioButtonValue?: string;

	leadingCheckboxConfiguration?: string;

	trailingElement?: string;
	trailingElementId?: string;
}
