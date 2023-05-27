import { IComponentProps } from "../../Component/IComponentProps";

export interface IBottomAppBarProps extends IComponentProps {
	icons?: {
		name: string;
		label?: string;
		onClick?: () => void;
	}[];
	fab?: {
		onClick?: () => void;
	};
}
