import { MouseEvent } from "react";
import { IComponentProps } from "../../Component/IComponentProps";

export interface IChipProps extends IComponentProps {
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
	selected?: boolean;

	avatar?: boolean;
	avatarIconNameSelected?: string;
	avatarIconNameDeselected?: string;

	leadingIcon?: boolean;
	leadingIconName?: string;

	trailingIcon?: boolean;
	trailingIconName?: string;
}
