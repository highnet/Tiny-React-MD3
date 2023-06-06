import { IComponentProps } from "../Component/IComponentProps";

export interface IDIalogProps extends IComponentProps {
	title?: string;
	openDialogTrigger?: () => void;
	buttons?: {
		label?: string;
		onClick?: () => void;
		configuration?: string;
	}[];
	showCloseButton?: boolean;
	showDivider?: boolean;	
	configuration?: string;
}
