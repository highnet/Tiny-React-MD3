import { IComponentProps } from "../Component/IComponentProps";

/*
    This code is used to define an interface for the props of a horizontal divider component.
    It extends the IComponentProps interface, which contains common props for all components,
    such as id and className. It also adds six specific props for the divider component: height,
    width, inset, insetRightWidth, insetLeftWidth, and showInsets. The height and width props are
    numbers that determine the dimensions of the divider. The inset prop is a string that determines
    the inset configuration of the divider, such as “none”, “right”, “left”, or “center”. The insetRightWidth
    and insetLeftWidth props are numbers that determine the width of the right and left inset spaces respectively.
    The showInsets prop is a boolean that controls whether or not to show the inset spaces with a different color for
    debugging purposes. 
*/

// Define an interface for the divider props
export interface IHorizontalDividerProps extends IComponentProps {
    height?: number; // The height of the component
    width?: number; // The width of the component
    inset?: string; // The inset configuration of the component
    insetRightWidth?: number; // the width of the right inset
    insetLeftWidth?: number; // the width of the left inset
    showInsets?: boolean; // Wether to show the insets or not (for debugging purposes only)
}