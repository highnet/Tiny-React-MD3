import { IComponentProps } from "../../Component/IComponentProps";

export interface IStackedCardsProps extends IComponentProps {
	configuration?: string;
	initial?: string;
	header?: string;
	subheader?: string;
	iconButtonIconName?: string;
	title?: string;
	subhead?: string;
	text?: string;
	onPrimaryButtonClick?: () => void;
	primaryButtonLabel?: string;
	onSecondaryButtonClick?: () => void;
	secondaryButtonLabel?: string;
}
