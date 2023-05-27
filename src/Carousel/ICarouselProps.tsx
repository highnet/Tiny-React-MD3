import { IComponentProps } from "../Component/IComponentProps";

export interface ICarouselProps extends IComponentProps {
	images?: {
		imageSource: string;
		label?: string;
		supportingText?: string;
	}[];
	width?: number;
	uniformWidths?: boolean;
}
