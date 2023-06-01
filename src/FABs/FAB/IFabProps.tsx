import { MouseEvent } from "react";
import { IComponentProps } from "../../Component/IComponentProps";

export interface IFabProps extends IComponentProps {
	configuration?: string;
	iconName?: string;
	size?: string;
}
