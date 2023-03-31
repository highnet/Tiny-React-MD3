import { IComponentProps } from "../Component/IComponentProps";
import { MouseEvent } from "react";

// Define an interface for the button props
export interface ISwitchProps extends IComponentProps {
    selected?: boolean; // Whether or not the switch is selected
    onChange?: (event: MouseEvent<HTMLDivElement>) => void; // Function to handle change event of the switch
    icon?: boolean; // Whether or not to display an icon in the switch
    iconNameSelected?: string; // Name of the icon to display when the switch is selected
    iconNameDeselected?: string; // Name of the icon to display when the switch is deselected
}