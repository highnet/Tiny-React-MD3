import { StringBuilder } from "../../Gizmos/StringBuilder";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import CodeSnippet from "../../TRMD3/CodeSnippet/CodeSnippet";
import ComponentFrameTitle from "../../TRMD3/ComponentFrameTitle/ComponentFrameTitle";
import Typography from "../../Typography/Typography";
import NavigationDrawerItem from "../Navigation Drawer Item/NavigationDrawerItem";
import NavigationDrawer from "../NavigationDrawer";

const NavigationDrawersFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme + "-trmd3")
		.add("component-frame-trmd3")
		.add("component-frame-" + _theme + "-trmd3")
		.toString();

	let _computedTrmd3SectionTitlesClassName = new StringBuilder()
		.add("section-title-trmd3")
		.add("section-title-" + _theme + "-trmd3")
		.toString();

	return (
		<div className={_computedFrameClassName}>
			<Typography
				id="navigation-drawers-section"
				variant="text-title-large"
				className={_computedTrmd3SectionTitlesClassName}
			>
				🗄️
			</Typography>
			<ComponentFrameTitle link="https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#%EF%B8%8F-navigation-drawers">
				Navigation Drawers
			</ComponentFrameTitle>
			<Typography variant={"text-label-small"}>Default</Typography>
			<NavigationDrawer id={"drawer-0"}>
				<NavigationDrawerItem label="Components" />
				<NavigationDrawerItem label="Action" />
				<NavigationDrawerItem
					leadingIcon="circle"
					label="Label"
					trailingText="100+"
				/>
				<NavigationDrawerItem
					leadingIcon="circle"
					label="Label"
					trailingText="100+"
				/>
				<NavigationDrawerItem
					leadingIcon="circle"
					label="Label"
					trailingText="100+"
					showDivider={true}
				/>
				<NavigationDrawerItem label="Section Header" />
				<NavigationDrawerItem
					leadingIcon="circle"
					label="Label"
					trailingText="100+"
				/>
				<NavigationDrawerItem
					leadingIcon="circle"
					label="Label"
					trailingText="100+"
				/>
				<NavigationDrawerItem
					leadingIcon="circle"
					label="Label"
					trailingText="100+"
					showDivider={true}
				/>
			</NavigationDrawer>
			<CodeSnippet>{`<Component>Component</Component>`}</CodeSnippet>
		</div>
	);
};
export default NavigationDrawersFrame;
