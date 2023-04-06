import { IComponentProps } from "../Component/IComponentProps";
import { MouseEvent } from "react";

// Define an interface for the checkbox props
export interface ICheckboxProps extends IComponentProps {
    onChange?: (event: MouseEvent<HTMLDivElement>) => void; // Function to handle change event of the checkbox
    configuration?: string; // Configuration of the checkbox
    selected?:boolean; // Whether or not the checkbox is selected
}