/*
Props: children: React nodes representing the title's content.
link: Optional URL to open in a new tab when the title is clicked.
This ComponentFrameTitle is used to display a title within a component frame.
It can receive children as the title's content and an optional link prop to
define a URL to open in a new tab when the title is clicked.
The component also dynamically computes its className based on the current theme,
obtained from local storage or the preferred scheme from "trmd3components/Themeing".
When the title is clicked, it invokes the 'openLinkInNewTab' function from 
"trmd3components/Redirection", opening the specified link in a new browser tab.
Within the component frame title, it renders an Icon with the "link" symbol and 
a Typography component with a "text-title-large" variant to style the title's 
content.
*/

import React from "react";
import { useState } from "react";
import Icon from "trmd3components/Icon";
import { openLinkInNewTab } from "trmd3components/Redirection";
import { getPreferredScheme } from "trmd3components/Themeing";
import Typography from "trmd3components/Typography";

interface IComponentFrameTitlesProps {
	children?: React.ReactNode;
	link?: string;
}

const ComponentFrameTitle: React.FC<IComponentFrameTitlesProps> = ({
	children,
	link,
}) => {
	const [_children] = useState(children || "");
	const [_link] = useState(link || "");
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	return (
		<div
			onClick={() => openLinkInNewTab(_link)}
			className={
				"component-frame-title-trmd3 component-frame-title-" + _theme + "-trmd3"
			}
		>
			<Icon className={"icon-on-component-frame-title-trmd3"}>link</Icon>
			<Typography variant={"text-title-large"}>{_children}</Typography>
		</div>
	);
};

export default ComponentFrameTitle;
