import { MouseEvent } from "react";
import { IComponentProps } from "../../Component/IComponentProps";

/* 

  TODO: NEEDS DOCUMENTATION

*/

// Define an interface for the button props
export interface IChipProps extends IComponentProps {
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void; // Function to execute when button is clicked
	selected?: boolean;

	label?: string;

	avatar?: boolean;
	avatarIconNameSelected?: string;
	avatarIconNameDeselected?: string;

	leadingIcon?: boolean;
	leadingIconName?: string;

	trailingIcon?: boolean;
	trailingIconName?: string;
}
