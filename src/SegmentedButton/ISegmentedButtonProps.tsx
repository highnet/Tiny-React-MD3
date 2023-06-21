import { IComponentProps } from "../Component/IComponentProps";

export interface ISegmentedButtonProps extends IComponentProps {
	configuration?: string;
	position?: string;
	icon?: string;
	selected?: boolean;
	label?: string;
}
