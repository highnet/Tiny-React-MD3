import { IComponentProps } from "../Component/IComponentProps";

export interface ISnackBarProps extends IComponentProps {
	configuration?: string;
	message?: string;
	dismissable?: boolean;
	action?: () => void;
	actionLabel?: string;
}
