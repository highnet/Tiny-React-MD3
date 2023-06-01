/*
  1
  1682360238 
  
  This code exports an interface called ISwitchProps, which is used to define the properties
  of a switch component. The ISwitchProps interface extends another interface called
  IComponentProps.

  The ISwitchProps interface includes several properties that define the behavior and
  appearance of the switch component. These properties include "selected", which is a boolean
  value that determines whether the switch is selected or not, and "onChange", which is a
  function that handles the change event of the switch.

  The "icon" property is another boolean value that indicates whether an icon should be
  displayed in the switch. The "iconNameSelected" and "iconNameDeselected" properties determine
  the name of the icon to be displayed when the switch is selected or deselected.

  Together, these properties define the behavior and appearance of a switch component, and
  can be used to customize its functionality in an application.
*/
import { IComponentProps } from "../Component/IComponentProps";
import { MouseEvent } from "react";

export interface ISwitchProps extends IComponentProps {
	selected?: boolean;
	icon?: boolean;
	iconNameSelected?: string;
	iconNameDeselected?: string;
}
