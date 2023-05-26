import { IComponentProps } from "../../Component/IComponentProps";

export interface IBottomAppBarProps extends IComponentProps {
	iconNames?: string[];
	icons?: {
		name: string;
		label?: string;
		onClick?: () => void;
	}[];
	fab?: {
		hasFab: boolean;
		onClick?: () => void;
	};
}
