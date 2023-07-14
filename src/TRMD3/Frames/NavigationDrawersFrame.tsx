import NavigationDrawer from "trmd3components/NavigationDrawer";
import NavigationDrawerItem from "trmd3components/NavigationDrawerItem";
import { StringBuilder } from "trmd3components/StringBuilder";
import { getPreferredScheme } from "trmd3components/Themeing";
import Typography from "trmd3components/Typography";
import CodeSnippet from "../CodeSnippet/CodeSnippet";
import ComponentFrameTitle from "../ComponentFrameTitle/ComponentFrameTitle";

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

			<NavigationDrawer className="navigation-drawer-on-frame-trmd3">
				<NavigationDrawerItem label="Title" />
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
				/>
			</NavigationDrawer>

			<CodeSnippet>{`
<NavigationDrawer>
	<NavigationDrawerItem label="Title" />
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
			`}</CodeSnippet>
		</div>
	);
};
export default NavigationDrawersFrame;
