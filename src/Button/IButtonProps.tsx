import { IComponentProps } from "../Component/IComponentProps";
import { MouseEvent } from "react";

/* 
  1
  1682423199

  IButtonProps is an interface that extends IComponentProps and includes optional properties such as onClick, configuration, icon, and iconName.
  onClick is a function that executes when the button is clicked.
  configuration determines the visual style of the button.
  icon is a boolean that specifies whether the button has an icon.
  iconName is a string that contains the name of the icon displayed in the button. 
*/

// Define an interface for the button props
export interface IButtonProps extends IComponentProps {
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void; // Function to execute when button is clicked
	configuration?: string; // Configuration of the button
	icon?: boolean; // Whether the button has an icon
	iconName?: string; // Name of the icon
	label?: string; // Label of the button
}
