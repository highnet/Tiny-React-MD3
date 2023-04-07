import { IComponentProps } from "../Component/IComponentProps";
import { MouseEvent } from "react";

/*
    This code is used to define an interface for the props of a radio button component.
    It extends the IComponentProps interface, which contains common props for all components, such as id and className.
    It also adds four specific props for the radio button component: onClick, name, value, and defaultChecked.
    The onClick prop is a function that takes a mouse event as an argument and performs some action when the radio button is clicked.
    The name prop is a string that groups the radio buttons together. The value prop is a string that assigns a value to each radio button.
    The defaultChecked prop is a boolean that determines whether or not the radio button is checked by default. 
*/

// Define an interface for the radio button props
export interface IRadioButtonProps extends IComponentProps {
    onClick?: (event: MouseEvent<HTMLDivElement>) => void; // Function to handle click event of the radio button
    name?: string; // Name of the radio button
    value?: string; // Value of the radio button
    defaultChecked?: boolean; // Whether or not the radio button is checked by default
}