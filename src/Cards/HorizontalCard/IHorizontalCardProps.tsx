import { IComponentProps } from "../../Component/IComponentProps";

export interface IHorizontalCardProps extends IComponentProps {
	configuration?: string;
	initial?: string;
	header?: string;
	subhead?: string;
	imageSrc?: string;
}
