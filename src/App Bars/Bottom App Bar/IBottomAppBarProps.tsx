import { IComponentProps } from "../../Component/IComponentProps";

export interface IBottomAppBarProps extends IComponentProps {
	iconNames?: string[];
	icons?: {
		name: string;
		onClick: () => void;
	}[];
}
