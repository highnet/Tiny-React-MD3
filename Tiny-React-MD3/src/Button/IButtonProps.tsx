import { IComponentProps } from "../Component/IComponentProps";
import { MouseEvent } from "react";

// Define an interface for the button props
export interface IButtonProps extends IComponentProps {
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void; // Function to execute when button is clicked
    configuration?: string; // Configuration of the button
    icon?: boolean; // Whether the button has an icon
    iconName?: string; // Name of the icon
}