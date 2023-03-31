import { IComponentProps } from "../Component/IComponentProps";

// Define an interface for the button props
export interface IBadgeProps extends IComponentProps {
    configuration?: string; // Configuration of the badge
    xOffset?: number; // X offset of the badge
    yOffset?: number; // Y offset of the badge
    label?: string // Label of the badge
}