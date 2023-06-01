/* 
  1
  1682423199

  This code defines an interface called ICheckboxProps that extends the
  interface IComponentProps. ICheckboxProps has three properties:

  onChange: a function that handles the change event of the checkbox.
  configuration: a string that represents the configuration of the checkbox.
  selected: a boolean that represents whether or not the checkbox is selected 
*/

import { MouseEvent } from "react";
import { IComponentProps } from "../Component/IComponentProps";

export interface ICheckboxProps extends IComponentProps {
	configuration?: string;
	selected?: boolean;
}
