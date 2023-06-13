import { IComponentProps } from "../Component/IComponentProps";

export interface ISnackBarProps extends IComponentProps {
	size?: string;
	buttonOnClick?: () => void;
	buttonLabel?: string;
	closeIcon?: boolean;
	onActivate?: () => void;
}
