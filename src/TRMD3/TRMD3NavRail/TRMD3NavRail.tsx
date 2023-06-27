import { activateMenuId } from "../../Gizmos/Modals";
import { openLinkInNewTab } from "../../Gizmos/Redirection";
import { scrollToSection } from "../../Gizmos/Scrolling";
import NavigationRail from "../../Navigation Rail/NavigationRail";

const TRMD3NavRail: React.FC = () => {
	return (
		<NavigationRail
			id={"nav-rail-0"}
			className={"main-navigation-rail-trmd3"}
			fab={{
				onClick: () => {
					activateMenuId("menu-0");
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
						openLinkInNewTab(
							"https://github.com/highnet/Tiny-React-MD3/tree/master/src"
						);
					},
					label: "Source Code",
				},
			]}
		/>
	);
};

export default TRMD3NavRail;
