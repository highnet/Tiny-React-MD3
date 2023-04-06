import { IComponentProps } from "../Component/IComponentProps";

// Define an interface for the divider props
export interface IHorizontalDividerProps extends IComponentProps {
    height?: number; // The height of the component
    width?: number; // The width of the component
    inset?: string; // The inset configuration of the component
    insetRightWidth?: number; // the width of the right inset
    insetLeftWidth?: number; // the width of the left inset
    showInsets?: boolean; // Wether to show the insets or not (for debugging purposes only)
}