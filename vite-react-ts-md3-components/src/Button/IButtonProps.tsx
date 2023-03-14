import { IComponentProps } from "../Component/IComponentProps";
import { MouseEvent } from "react";

// Define an interface for the button props
export interface IButtonProps extends IComponentProps {
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    configuration?: string;
    icon?: boolean;
    iconName?: string;
}