import { getPreferredScheme } from "../../Gizmos/Themeing";
import Icon from "../../Icon/Icon";
import Typography from "../../Typography/Typography";

interface IBottomNavProps {
	scrollToTop: () => void;
}

const BottomNavBar: React.FC<IBottomNavProps> = ({ scrollToTop }) => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	return (
		<div className="bottom-nav-bar-trmd3" onClick={scrollToTop}>
			<Typography
				variant="text-title-large"
				className="bottom-nav-bar-text-trmd3 bottom-nav-bar-trmd3-text-trmd3"
			>
				TRMD3
			</Typography>
			<Typography
				variant="text-title-large"
				className="bottom-nav-bar-text-trmd3 bottom-nav-bar-up-text-trmd3"
			>
				<Icon>arrow_upward</Icon> Up
			</Typography>
		</div>
	);
};

export default BottomNavBar;
