import { MouseEvent } from "react";
import { IComponentProps } from "../../Component/IComponentProps";

export interface IAssistChipProps extends IComponentProps {
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
	iconType?: string;
	iconName?: string;
	iconSrc?: string;
	elevated?: boolean;
}
