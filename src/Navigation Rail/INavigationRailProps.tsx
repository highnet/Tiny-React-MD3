import { IComponentProps } from "../Component/IComponentProps";

export interface INavigationRailProps extends IComponentProps {
	icons?: {
		name: string;
		label?: string;
		badge?: {
			badgeType: string;
			badgeValue: number;
		};
		onClick?: () => void;
	}[];
	fab?: {
		onClick?: () => void;
	};
}
