import { IComponentProps } from "../Component/IComponentProps";
import { MouseEvent } from "react";

// Define an interface for the button props
export interface IRadioButtonProps extends IComponentProps {
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
    name?: string;
    value?: string;
    defaultChecked?: boolean;
}