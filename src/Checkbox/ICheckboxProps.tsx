import { IComponentProps } from "../Component/IComponentProps";
import { MouseEvent } from "react";

/* 
  This code is used to define an interface for the props of a checkbox component. It extends the IComponentProps interface,
  which contains common props for all components, such as id and className. It also adds three specific props for the checkbox
  component: onChange, configuration, and selected. The onChange prop is a function that takes a mouse event as an argument and
  performs some action when the checkbox is changed. The configuration prop is a string that determines the style of the checkbox,
  such as “default” or “error”. The selected prop is a boolean that indicates whether or not the checkbox is selected. 
*/

// Define an interface for the checkbox props
export interface ICheckboxProps extends IComponentProps {
	onChange?: (event: MouseEvent<HTMLDivElement>) => void; // Function to handle change event of the checkbox
	configuration?: string; // Configuration of the checkbox
	selected?: boolean; // Whether or not the checkbox is selected
}
