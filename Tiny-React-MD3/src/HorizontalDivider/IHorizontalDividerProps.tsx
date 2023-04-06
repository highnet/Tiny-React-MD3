import { IComponentProps } from "../Component/IComponentProps";
import { MouseEvent } from "react";

// Define an interface for the divider props
export interface IDividerProps extends IComponentProps {
    height?: number; // The height of the component
    width?: number; // The width of the component
    inset?: string; // The inset configuration of the component
    insetRightWidth?: number; // the width of the right inset
    insetLeftWidth?: number; // the width of the left inset

}