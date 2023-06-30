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
				📖
			</Typography>
			<ComponentFrameTitle link="https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#-menus">
				Menus
			</ComponentFrameTitle>
			<div className="menu-subframe-trmd3">
				<Menu className="menu-parent menu-on-frame-trmd3">
					<MenuItem
						leadingIcon="hive"
						trailingIcon="chevron_right"
						label="A"
						showDivider={true}
					>
						<Menu>
							<MenuItem
								leadingIcon="hive"
								label="AA"
								trailingIcon="chevron_right"
								showDivider={true}
							></MenuItem>
							<MenuItem
								leadingIcon="hive"
								label="AB"
								trailingIcon="shopping_cart"
								onTrailingIconClick={() => {
									alert("Item Purchased");
								}}
								showDivider={true}
							></MenuItem>
							<MenuItem
								leadingIcon="hive"
								label="AC"
								trailingIcon="shopping_cart"
								onTrailingIconClick={() => {
									alert("Item Purchased");
								}}
								showDivider={true}
							></MenuItem>
						</Menu>
					</MenuItem>
					<MenuItem
						leadingIcon="hive"
						label="B"
						trailingIcon="shopping_cart"
						onTrailingIconClick={() => {
							alert("Item Purchased");
						}}
						showDivider={true}
					></MenuItem>
					<MenuItem
						leadingIcon="hive"
						label="C"
						trailingIcon="shopping_cart"
						onTrailingIconClick={() => {
							alert("Item Purchased");
						}}
						showDivider={true}
					></MenuItem>
				</Menu>
			</div>
		</div>
	);
};
export default MenusFrame;
