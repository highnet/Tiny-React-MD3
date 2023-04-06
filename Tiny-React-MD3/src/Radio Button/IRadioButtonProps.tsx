import { IComponentProps } from "../Component/IComponentProps";
import { MouseEvent } from "react";

// Define an interface for the radio button props
export interface IRadioButtonProps extends IComponentProps {
    onClick?: (event: MouseEvent<HTMLDivElement>) => void; // Function to handle click event of the radio button
    name?: string; // Name of the radio button
    value?: string; // Value of the radio button
    defaultChecked?: boolean; // Whether or not the radio button is checked by default
}