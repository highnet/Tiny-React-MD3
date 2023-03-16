import { IComponentProps } from "../Component/IComponentProps";
import { MouseEvent } from "react";

// Define an interface for the button props
export interface ISwitchProps extends IComponentProps {
    selected?:boolean;
    onChange?: (value: boolean) => void;
}