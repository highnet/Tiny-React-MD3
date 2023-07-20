/*
This Cookietrail component represents a section that displays a set of buttons.
The buttons are used as navigation links and include a "Read Me" button, a
"Documentation" button, and a "Source Code" button. Each button has a
corresponding link to external resources, and clicking on any button will
open the link in a new browser tab. The component applies specific CSS
classes based on the current theme obtained from local storage or the preferred
scheme from "trmd3components/Themeing". This helps ensure consistent theming
across the application. The buttons are styled using the "Button" component
from "trmd3components/Button", and each button has a unique icon and label text
associated with it.
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
