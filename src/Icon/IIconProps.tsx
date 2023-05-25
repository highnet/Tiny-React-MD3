import { IComponentProps } from "../Component/IComponentProps";
import { MouseEvent } from "react";

export interface IIconProps extends IComponentProps {
	onClick?: (event: MouseEvent<HTMLSpanElement>) => void;
}
