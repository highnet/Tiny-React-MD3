/* 
  This code defines an interface for the props of a vertical divider component.
  A vertical divider is a graphical user interface element that separates two sections of content vertically.
  The interface extends from the IComponentProps interface, which defines some common props for all components,
  such as id, className, and style. The interface also defines some specific props for the vertical divider component, such as:
  width: a number value that specifies the width of the divider in pixels
  height: a number value that specifies the height of the divider in pixels
  inset: a string value that specifies the inset configuration of the divider, such as “top”, “bottom”, “both”, or “none”
  insetTopHeight: a number value that specifies the height of the top inset in pixels
  insetBottomHeight: a number value that specifies the height of the bottom inset in pixels
  showInsets: a boolean value that indicates whether to show or hide the insets
  The interface is exported so it can be imported and used in other files. 
*/

import { IComponentProps } from "../../Component/IComponentProps";

export interface IVerticalDividerProps extends IComponentProps {
	width?: number;
	height?: number;
	inset?: string;
	insetTopHeight?: number;
	insetBottomHeight?: number;
	showInsets?: boolean;
}
