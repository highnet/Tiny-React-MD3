import { ReactElement } from "react";
import { IComponentProps } from "../Component/IComponentProps";
import { ISegmentedButtonProps } from "./ISegmentedButtonProps";

export interface ISegmentedButtonGroupProps extends IComponentProps {
	children: ReactElement<ISegmentedButtonProps>[];
	defaultSelectedButtonIndex?: number;
	onSelectedValueChange?: (value: string | undefined) => void;
}
