/* 
  1
  1682423199

  IButtonProps is an interface that extends IComponentProps and includes optional properties such as onClick, configuration, icon, and iconName.
  onClick is a function that executes when the button is clicked.
  configuration determines the visual style of the button.
  icon is a boolean that specifies whether the button has an icon.
  iconName is a string that contains the name of the icon displayed in the button. 
*/

import { IComponentProps } from "../Component/IComponentProps";

export interface IButtonProps extends IComponentProps {
	configuration?: string;
	icon?: boolean;
	iconName?: string;
}
