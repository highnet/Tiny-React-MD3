import { MouseEvent } from "react";
import { IComponentProps } from "../../Component/IComponentProps";

export interface IFabProps extends IComponentProps {
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    configuration?: string;
    iconName?: string;
    size?: string;
}