import React from "react";
import { toggleMenuId } from "trmd3components/Modals";
import NavigationRail from "trmd3components/NavigationRail";
import { openLinkInNewTab } from "trmd3components/Redirection";

const TRMD3NavRail: React.FC = () => {
	return (
		<NavigationRail
			id={"nav-rail-0"}
			className={"main-navigation-rail-trmd3"}
			fab={{
				onClick: () => {
					toggleMenuId("menu-0");
				},
				fabIconName: "build",
				label: "Components",
			}}
			icons={[
				{
					name: "bookmark",
					onClick: () => {
						openLinkInNewTab(
							"https://github.com/highnet/Tiny-React-MD3#----trmd3-tiny-react-material-design-3-"
						);
					},
					label: "Read Me",
				},
				{
					name: "menu_book",
					onClick: () => {
						openLinkInNewTab(
							"https://github.com/highnet/Tiny-React-MD3/tree/master/src#-tiny-react-md-3-documentation"
						);
					},
					label: "Docs",
				},
				{
					name: "code",
					onClick: () => {
						openLinkInNewTab("https://github.com/highnet/TRMD3Components");
					},
					label: "Source Code",
				},
			]}
		/>
	);
};

export default TRMD3NavRail;
