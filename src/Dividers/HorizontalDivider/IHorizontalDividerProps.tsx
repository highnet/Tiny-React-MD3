/*
  1
  1682423199

  This code defines an interface called IHorizontalDividerProps that extends the interface IComponentProps.
  IHorizontalDividerProps has five optional properties:

  height: a number that represents the height of the component.
  width: a number that represents the width of the component.
  inset: a string that represents the inset configuration of the component.
  insetRightWidth: a number that represents the width of the right inset.
  insetLeftWidth: a number that represents the width of the left inset.
  showInsets: a boolean that represents whether to show the insets or not, for debugging purposes only. 
*/

import { IComponentProps } from "../../Component/IComponentProps";

export interface IHorizontalDividerProps extends IComponentProps {
	height?: number;
	width?: number;
	inset?: string;
	insetRightWidth?: number;
	insetLeftWidth?: number;
	showInsets?: boolean;
}
