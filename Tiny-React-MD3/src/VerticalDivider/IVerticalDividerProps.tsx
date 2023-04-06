import { IComponentProps } from "../Component/IComponentProps";

// Define an interface for the divider props
export interface IVerticalDividerProps extends IComponentProps {
    width?: number; // The width of the component
    height?: number; // The height of the component
    inset?: string; // The inset configuration of the component
    insetTopHeight?: number; // the height of the top inset
    insetBottomHeight?: number; // the height of the bottom inset
    showInsets?: boolean;
}