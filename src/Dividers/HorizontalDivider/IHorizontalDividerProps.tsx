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

// Define an interface for the divider props
export interface IHorizontalDividerProps extends IComponentProps {
	height?: number; // The height of the component
	width?: number; // The width of the component
	inset?: string; // The inset configuration of the component
	insetRightWidth?: number; // the width of the right inset
	insetLeftWidth?: number; // the width of the left inset
	showInsets?: boolean; // Wether to show the insets or not (for debugging purposes only)
}
