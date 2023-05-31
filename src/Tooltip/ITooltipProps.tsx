import { IComponentProps } from "../Component/IComponentProps";

export interface ITooltipProps extends IComponentProps {
	configuration?: string;
	title?: string;
	buttons?: {
		label?: string;
		onClick?: () => void;
	}[];
}
