import { IComponentProps } from "../Component/IComponentProps";

export interface INavigationRailProps extends IComponentProps {
	icons?: {
		name: string;
		label?: string;
		configuration?: string;
		badge?: {
			configuration: string;
			value?: number;
		};
		onClick?: () => void;
	}[];
	fab?: {
		onClick?: () => void;
		fabIconName?: string;
	};
}
