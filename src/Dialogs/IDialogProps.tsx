import { IComponentProps } from "../Component/IComponentProps";

export interface IDIalogProps extends IComponentProps {
	title?: string;
	openDialogTrigger?: () => void;
}
