import { IComponentProps } from "../Component/IComponentProps";

// Define an interface for the button props
export interface IBadgeProps extends IComponentProps {
    configuration?: string;
    xOffset?: number;
    yOffset?: number;
    label?: string
}