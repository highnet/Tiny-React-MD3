import { IComponentProps } from "../Component/IComponentProps";
import { MouseEvent } from "react";

/* 
    This code is used to define an interface for the props of a button component. It extends the IComponentProps interface, 
    which contains common props for all components, such as id and className. It also adds four specific props for the button
    component: onClick, configuration, icon, and iconName. The onClick prop is a function that takes a mouse event as an argument
    and performs some action when the button is clicked. The configuration prop is a string that determines the style of the button,
    such as “filled” or “outlined”. The icon prop is a boolean that indicates whether the button has an icon before the text. The
    iconName prop is a string that specifies the name of the icon to use. 
*/

// Define an interface for the button props
export interface IButtonProps extends IComponentProps {
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void; // Function to execute when button is clicked
    configuration?: string; // Configuration of the button
    icon?: boolean; // Whether the button has an icon
    iconName?: string; // Name of the icon
}