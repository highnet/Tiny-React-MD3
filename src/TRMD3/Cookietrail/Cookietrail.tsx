/*
	1
	1682423199

	The code defines a React functional component called Cookietrail, which
	doesn't receive any properties. The component initializes a variable called
	_theme to determine the user's preferred color scheme. The component returns a
	div element with a class name based on the theme. The div includes two child
	elements, each of them being a Button component with different properties such
	as configuration, disabled, icon, iconName, onClick, and className. The Buttons
	have icons and labels, and clicking on them opens a link in a new tab. The
	component is likely used to display links to documentation or additional
	resources for the user.
*/

import Button from "../../Button/Button";
import { getPreferredScheme } from "../../Gizmos/Themeing";

interface ICookietrailProps {}

function openLinkInNewTab(url: string) {
	if (url == undefined || url == "") return;
	window.open(url, "_blank");
}

const Cookietrail: React.FC<ICookietrailProps> = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	return (
		<div
			className={
				"cookietrail-section-trmd3 cookietrail-section-" + _theme + "-trmd3"
			}
		>
			<div className={"flex-trmd3 flex-row-trmd3 cookietrail-buttons-trmd3"}>
				<Button
					configuration="tonal"
					disabled={false}
					icon={true}
					iconName={"bookmark"}
					onClick={() =>
						openLinkInNewTab(
							"https://github.com/highnet/Tiny-React-MD3#-tiny-react-md3----"
						)
					}
					className="cookietrail-button-trmd3"
				>
					Read Me
				</Button>
				<Button
					configuration="tonal"
					disabled={false}
					icon={true}
					iconName={"menu_book"}
					onClick={() =>
						openLinkInNewTab(
							"https://github.com/highnet/Tiny-React-MD3/tree/master/src#-tiny-react-md-3-documentation"
						)
					}
					className="cookietrail-button-trmd3"
				>
					Documentation
				</Button>
			</div>
		</div>
	);
};

export default Cookietrail;
