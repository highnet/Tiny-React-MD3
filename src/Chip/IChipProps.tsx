import { IComponentProps } from "../Component/IComponentProps";
import { MouseEvent } from "react";

/* 

  TODO: NEEDS DOCUMENTATION

*/

// Define an interface for the button props
export interface IChipProps extends IComponentProps {
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void; // Function to execute when button is clicked
	configuration?: string;
	selected?: boolean;
	icon?: boolean;
	iconName?: string;
	iconSrc?: string;
}
