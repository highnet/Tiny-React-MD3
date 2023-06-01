import { MouseEvent } from "react";
import { IComponentProps } from "../../Component/IComponentProps";

export interface IAssistChipProps extends IComponentProps {
	iconType?: string;
	iconName?: string;
	iconSrc?: string;
	elevated?: boolean;
}
