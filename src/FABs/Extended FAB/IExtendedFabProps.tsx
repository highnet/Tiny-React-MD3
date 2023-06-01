import { MouseEvent } from "react";
import { IComponentProps } from "../../Component/IComponentProps";

export interface IExtendedFabProps extends IComponentProps {
	configuration?: string;
	iconName?: string;
}
