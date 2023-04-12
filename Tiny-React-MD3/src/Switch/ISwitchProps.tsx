import { IComponentProps } from "../Component/IComponentProps";
import { MouseEvent } from "react";

/*
  This code defines an interface for the props of a switch component. A switch is a graphical user interface
  element that allows the user to toggle between two states, such as on and off. The interface extends from the
  IComponentProps interface, which defines some common props for all components, such as id, className, and style.
  The interface also defines some specific props for the switch component, such as:
  selected: a boolean value that indicates whether the switch is selected or not
  onChange: a function that is executed when the switch is changed by the user
  icon: a boolean value that indicates whether to display an icon in the switch or not
  iconNameSelected: a string value that specifies the name of the icon to display when the switch is selected
  iconNameDeselected: a string value that specifies the name of the icon to display when the switch is deselected
  The interface is exported so it can be imported and used in other files.
 */

// Define an interface for the switch props
export interface ISwitchProps extends IComponentProps {
	selected?: boolean; // Whether or not the switch is selected
	onChange?: (event: MouseEvent<HTMLDivElement>) => void; // Function to handle change event of the switch
	icon?: boolean; // Whether or not to display an icon in the switch
	iconNameSelected?: string; // Name of the icon to display when the switch is selected
	iconNameDeselected?: string; // Name of the icon to display when the switch is deselected
}
