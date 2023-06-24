import { StringBuilder } from "../../Gizmos/StringBuilder";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import CodeSnippet from "../../TRMD3/CodeSnippet/CodeSnippet";
import ComponentFrameTitle from "../../TRMD3/ComponentFrameTitle/ComponentFrameTitle";
import Typography from "../../Typography/Typography";
import Menu from "../Menu";
import MenuItem from "../MenuItem/MenuItem";

const MenusFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme + "-trmd3")
		.add("menus-frame-trmd3")
		.add("menus-frame-" + _theme + "-trmd3")
		.toString();

	let _computedTrmd3SectionTitlesClassName = new StringBuilder()
		.add("section-title-trmd3")
		.add("section-title-" + _theme + "-trmd3")
		.toString();

	return (
		<div className={_computedFrameClassName}>
			<Typography
				id="menus-section"
				variant="text-title-large"
				className={_computedTrmd3SectionTitlesClassName}
			>
				PH
			</Typography>
			<ComponentFrameTitle link="https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#-lists">
				Menus
			</ComponentFrameTitle>
			<Menu>
				<MenuItem label="A">
					<Menu>
						<MenuItem label="AA">
							<Menu>
								<MenuItem label="AAA"></MenuItem>
								<MenuItem label="AAB"></MenuItem>
								<MenuItem label="AAC"></MenuItem>
							</Menu>
						</MenuItem>
						<MenuItem label="AB"></MenuItem>
						<MenuItem label="AC"></MenuItem>
					</Menu>
				</MenuItem>
				<MenuItem label="B"></MenuItem>
				<MenuItem label="C"></MenuItem>
				<MenuItem label="D"></MenuItem>
				<MenuItem label="E"></MenuItem>
				<MenuItem label="F"></MenuItem>
				<MenuItem label="G">
					<Menu>
						<MenuItem label="GA"></MenuItem>
						<MenuItem label="GB"></MenuItem>
						<MenuItem label="GC"></MenuItem>
					</Menu>
				</MenuItem>
			</Menu>
		</div>
	);
};
export default MenusFrame;
