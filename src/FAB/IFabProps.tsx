import { IComponentProps } from "../Component/IComponentProps";
import { MouseEvent } from "react";

export interface IFabProps extends IComponentProps {
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    configuration?: string;
    iconName?: string;
}