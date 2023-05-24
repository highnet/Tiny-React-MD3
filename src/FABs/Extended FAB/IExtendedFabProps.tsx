import { MouseEvent } from "react";
import { IComponentProps } from "../../Component/IComponentProps";

export interface IExtendedFabProps extends IComponentProps {
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    configuration?: string;
    iconName?: string;
}