import { IComponentProps } from "../Component/IComponentProps";
import { MouseEvent } from "react";

// Define an interface for the button props
export interface ICheckboxProps extends IComponentProps {
    onChange?: (event: MouseEvent<HTMLDivElement>) => void;
    configuration?: string;
    selected?:boolean;
}