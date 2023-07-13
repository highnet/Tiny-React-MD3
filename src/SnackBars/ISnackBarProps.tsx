import { IComponentProps } from "../Component/IComponentProps";

export interface ISnackBarProps extends IComponentProps {
	message?: string;
	dismissable?: boolean;
	action?: () => void;
	actionLabel?: string;
}
