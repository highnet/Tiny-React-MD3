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

import React from "react";
import Button from "trmd3components/Button";
import { openLinkInNewTab } from "trmd3components/Redirection";
import { StringBuilder } from "trmd3components/StringBuilder";
import { getPreferredScheme } from "trmd3components/Themeing";

const Cookietrail: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	const _computedComponentClassName = new StringBuilder()
		.add("cookietrail-section-trmd3")
		.add("cookietrail-section-" + _theme + "-trmd3")
		.toString();

	return (
		<div className={_computedComponentClassName}>
			<div className={"cookietrail-buttons-trmd3"}>
				<Button
					configuration="tonal"
					iconName={"bookmark"}
					onClick={() =>
						openLinkInNewTab(
							"https://github.com/highnet/Tiny-React-MD3#----trmd3-tiny-react-material-design-3-"
						)
					}
					className="cookietrail-button-trmd3"
				>
					Read Me
				</Button>
				<Button
					configuration="tonal"
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
				<Button
					configuration="tonal"
					iconName={"code"}
					onClick={() =>
						openLinkInNewTab("https://github.com/highnet/TRMD3Components")
					}
					className="cookietrail-button-trmd3"
				>
					Source Code
				</Button>
			</div>
		</div>
	);
};

export default Cookietrail;
