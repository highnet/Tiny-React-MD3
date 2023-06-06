import { IComponentProps } from "../Component/IComponentProps";

export interface IDIalogProps extends IComponentProps {
	title?: string;
	openDialogTrigger?: () => void;
	buttons?: {
		label?: string;
		onClick?: () => void;
	}[];
	showCloseButton?: boolean;
	closeOnOutsideClick?: boolean;
}
