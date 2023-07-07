import { MouseEvent } from "react";
import { IComponentProps } from "../../Component/IComponentProps";

export interface IChipProps extends IComponentProps {
	selected?: boolean;

	avatarIconNameSelected?: string;
	avatarIconNameDeselected?: string;

	leadingIconName?: string;

	trailingIconName?: string;
}
