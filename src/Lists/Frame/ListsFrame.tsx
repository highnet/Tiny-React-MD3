import { StringBuilder } from "../../Gizmos/StringBuilder";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import CodeSnippet from "../../TRMD3/CodeSnippet/CodeSnippet";
import ComponentFrameTitle from "../../TRMD3/ComponentFrameTitle/ComponentFrameTitle";
import Typography from "../../Typography/Typography";
import List from "../List";
import ListItem from "../List Items/ListItem";

const ListsFrame: React.FC = () => {
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
				id="lists-section"
				variant="text-title-large"
				className={_computedTrmd3SectionTitlesClassName}
			>
				📝
			</Typography>
			<ComponentFrameTitle link="https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#-lists">
				Lists
			</ComponentFrameTitle>
			<Typography variant={"text-label-small"}>Default</Typography>

			<div className="lists-subframe-trmd3">
				<List>
					<ListItem size="3-line">
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<ListItem size="2-line">
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<ListItem size="1-line">
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<ListItem
						size="3-line"
						leadingElement="monogram"
						leadingMonogramInitial="X"
					>
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<ListItem
						size="2-line"
						leadingElement="monogram"
						leadingMonogramInitial="Y"
					>
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<ListItem
						size="1-line"
						leadingElement="monogram"
						leadingMonogramInitial="Z"
					></ListItem>
					<ListItem
						size="3-line"
						leadingElement="icon"
						leadingIconName="account_circle"
					>
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<ListItem
						size="2-line"
						leadingElement="icon"
						leadingIconName="account_circle"
					>
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<ListItem
						size="1-line"
						leadingElement="icon"
						leadingIconName="account_circle"
					></ListItem>
					<ListItem
						size="3-line"
						leadingElement="image-small"
						leadingImageSrc="1.png"
					>
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<ListItem
						size="2-line"
						leadingElement="image-small"
						leadingImageSrc="2.png"
					>
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<ListItem
						size="1-line"
						leadingElement="image-small"
						leadingImageSrc="3.png"
					></ListItem>
					<ListItem
						size="3-line"
						leadingElement="image-big"
						leadingImageSrc="4.png"
					>
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<ListItem
						size="2-line"
						leadingElement="image-big"
						leadingImageSrc="5.png"
					>
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<ListItem
						size="1-line"
						leadingElement="image-big"
						leadingImageSrc="6.png"
					></ListItem>
					<ListItem
						size="3-line"
						leadingElement="checkbox"
						onLeadingElementChange={() => {
							alert("hi");
						}}
						leadingElementSelected={true}
						leadingCheckboxConfiguration="error"
					>
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<ListItem
						size="2-line"
						leadingElement="checkbox"
						onLeadingElementChange={() => {
							alert("hi");
						}}
					>
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<ListItem
						size="1-line"
						leadingElement="checkbox"
						onLeadingElementChange={() => {
							alert("hi");
						}}
					></ListItem>
					<ListItem
						size="3-line"
						leadingElement="radio"
						onLeadingElementChange={() => {
							alert("hi");
						}}
						leadingRadioButtonGroupName="list-item-radio-group-1"
						leadingElementSelected={true}
						leadingRadioButtonValue="0"
					>
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<ListItem
						size="2-line"
						leadingElement="radio"
						onLeadingElementChange={() => {
							alert("hi");
						}}
						leadingRadioButtonGroupName="list-item-radio-group-1"
						leadingRadioButtonValue="1"
					>
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<ListItem
						size="1-line"
						leadingElement="radio"
						onLeadingElementChange={() => {
							alert("hi");
						}}
						leadingRadioButtonGroupName="list-item-radio-group-1"
						leadingRadioButtonValue="2"
					></ListItem>
					<ListItem
						size="3-line"
						leadingElement="switch"
						onLeadingElementChange={() => {
							alert("hi");
						}}
						leadingElementSelected={true}
					>
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<ListItem size="2-line" leadingElement="switch">
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<ListItem size="1-line" leadingElement="switch"></ListItem>
				</List>
			</div>
		</div>
	);
};
export default ListsFrame;
