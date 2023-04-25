import { IComponentProps } from "../Component/IComponentProps";
import { MouseEvent } from "react";

/* 
  1
  1682423199

  This code defines an interface called ICheckboxProps that extends the
  interface IComponentProps. ICheckboxProps has three properties:

  onChange: a function that handles the change event of the checkbox.
  configuration: a string that represents the configuration of the checkbox.
  selected: a boolean that represents whether or not the checkbox is selected 
*/

// Define an interface for the checkbox props
export interface ICheckboxProps extends IComponentProps {
	onChange?: (event: MouseEvent<HTMLDivElement>) => void; // Function to handle change event of the checkbox
	configuration?: string; // Configuration of the checkbox
	selected?: boolean; // Whether or not the checkbox is selected
}
