import { IComponentProps } from "../Component/IComponentProps";

export interface ISnackBarProps extends IComponentProps {
	configuration?: string;
	buttonOnClick?: () => void;
	buttonLabel?: string;
	closeIcon?: boolean;
	onActivate?: () => void;
}
