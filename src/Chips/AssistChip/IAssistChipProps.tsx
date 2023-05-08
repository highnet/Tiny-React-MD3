import { MouseEvent } from "react";
import { IComponentProps } from "../../Component/IComponentProps";

/* 

  TODO: NEEDS DOCUMENTATION

*/

// Define an interface for the button props
export interface IAssistChipProps extends IComponentProps {
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
	selected?: boolean;
	label?: string;
	iconType?: string;
	iconName?: string;
	iconSrc?: string;
	elevated?: boolean;
}
