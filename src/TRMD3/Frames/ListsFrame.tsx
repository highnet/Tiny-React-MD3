import { StringBuilder } from "../../Gizmos/StringBuilder";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import CodeSnippet from "../CodeSnippet/CodeSnippet";
import ComponentFrameTitle from "../ComponentFrameTitle/ComponentFrameTitle";
import Typography from "../../Typography/Typography";
import List from "../../Lists/List";
import ListItem from "../../Lists/List Items/ListItem";

const ListsFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme + "-trmd3")
		.add("lists-frame-trmd3")
		.add("lists-frame-" + _theme + "-trmd3")
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

			<List height="20rem">
				<ListItem size="1-line" showDivider={true}>
					Supporting line text lorem ipsum dolor sit amet, consectetur.
				</ListItem>

				<ListItem
					size="3-line"
					showDivider={true}
					leadingElement="monogram"
					leadingMonogramInitial="X"
				>
					Supporting line text lorem ipsum dolor sit amet, consectetur.
				</ListItem>

				<ListItem
					size="3-line"
					showDivider={true}
					leadingElement="image-small"
					imageSrc="1.png"
					trailingElement="checkbox"
					elementSelected={true}
				>
					Supporting line text lorem ipsum dolor sit amet, consectetur.
				</ListItem>

				<ListItem
					size="1-line"
					showDivider={true}
					leadingElement="checkbox"
					elementSelected={true}
				></ListItem>
				<ListItem>Item N</ListItem>
			</List>

			<CodeSnippet>{`
<List
	height="20rem"
>
	<ListItem>Item 1</ListItem>
	<ListItem>Item 2</ListItem>
	<ListItem>Item 3</ListItem>
	<ListItem>Item :</ListItem>
	<ListItem>Item N</ListItem>
 </List>`}</CodeSnippet>
			<div
				className={"lists-subframe-trmd3 lists-subframe-" + _theme + "-trmd3"}
			>
				<List>
					<ListItem size="3-line" showDivider={true}>
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<CodeSnippet>{`
<ListItem size="3-line" showDivider={true}>
	Supporting line text lorem ipsum dolor sit amet, consectetur.
</ListItem>`}</CodeSnippet>
					<ListItem
						size="3-line"
						showDivider={true}
						trailingElement="checkbox"
						elementSelected={true}
					>
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<CodeSnippet>{`
<ListItem
	size="3-line"
	showDivider={true}
	trailingElement="checkbox"
	elementSelected={true}
>
	Supporting line text lorem ipsum dolor sit amet, consectetur.
</ListItem>`}</CodeSnippet>
					<ListItem size="2-line" showDivider={true}>
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<CodeSnippet>{`
<ListItem 
	size="2-line" 
	showDivider={true}
>
</ListItem>`}</CodeSnippet>
					<ListItem
						size="2-line"
						showDivider={true}
						trailingElement="checkbox"
						elementSelected={true}
					>
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<CodeSnippet>{`
<ListItem 
	size="2-line"
	showDivider={true}
	trailingElement="checkbox"
	elementSelected={true}
>
	Supporting line text lorem ipsum dolor sit amet, consectetur.
</ListItem>`}</CodeSnippet>
					<ListItem size="1-line" showDivider={true}>
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<CodeSnippet>{`
<ListItem size="1-line" showDivider={true}>
	Supporting line text lorem ipsum dolor sit amet, consectetur.
</ListItem>`}</CodeSnippet>
					<ListItem
						size="1-line"
						showDivider={true}
						trailingElement="checkbox"
						elementSelected={true}
					>
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<CodeSnippet>{`
<ListItem
	size="1-line"
	showDivider={true}
	trailingElement="checkbox"
	elementSelected={true}
>
	Supporting line text lorem ipsum dolor sit amet, consectetur.
</ListItem>`}</CodeSnippet>
					<ListItem
						size="3-line"
						showDivider={true}
						leadingElement="monogram"
						leadingMonogramInitial="X"
					>
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<CodeSnippet>{`
<ListItem
	size="3-line"
	showDivider={true}
	leadingElement="monogram"
	leadingMonogramInitial="X"
>
	Supporting line text lorem ipsum dolor sit amet, consectetur.
</ListItem>`}</CodeSnippet>
					<ListItem
						size="3-line"
						showDivider={true}
						leadingElement="monogram"
						leadingMonogramInitial="X"
						trailingElement="checkbox"
						elementSelected={true}
					>
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<CodeSnippet>{`
<ListItem
	size="3-line"
	showDivider={true}
	leadingElement="monogram"
	leadingMonogramInitial="X"
	trailingElement="checkbox"
	elementSelected={true}
>
	Supporting line text lorem ipsum dolor sit amet, consectetur.
</ListItem>`}</CodeSnippet>
					<ListItem
						size="2-line"
						showDivider={true}
						leadingElement="monogram"
						leadingMonogramInitial="Y"
					>
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<CodeSnippet>{`
<ListItem
	size="2-line"
	showDivider={true}
	leadingElement="monogram"
	leadingMonogramInitial="Y"
>
	Supporting line text lorem ipsum dolor sit amet, consectetur.
</ListItem>`}</CodeSnippet>
					<ListItem
						size="2-line"
						showDivider={true}
						leadingElement="monogram"
						leadingMonogramInitial="Y"
						trailingElement="checkbox"
						elementSelected={true}
					>
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<CodeSnippet>{`
<ListItem
	size="2-line"
	showDivider={true}
	leadingElement="monogram"
	leadingMonogramInitial="Y"
	trailingElement="checkbox"
	elementSelected={true}
>
	Supporting line text lorem ipsum dolor sit amet, consectetur.
</ListItem>`}</CodeSnippet>
					<ListItem
						size="1-line"
						showDivider={true}
						leadingElement="monogram"
						leadingMonogramInitial="Z"
					></ListItem>
					<CodeSnippet>{`
<ListItem
	size="1-line"
	showDivider={true}
	leadingElement="monogram"
	leadingMonogramInitial="Z"
>
</ListItem>`}</CodeSnippet>
					<ListItem
						size="1-line"
						showDivider={true}
						leadingElement="monogram"
						leadingMonogramInitial="Z"
						trailingElement="checkbox"
						elementSelected={true}
					></ListItem>
					<CodeSnippet>{`
<ListItem
	size="1-line"
	showDivider={true}
	leadingElement="monogram"
	leadingMonogramInitial="Z"
	trailingElement="checkbox"
	elementSelected={true}
>
</ListItem>`}</CodeSnippet>
					<ListItem
						size="3-line"
						showDivider={true}
						leadingElement="icon"
						iconName="account_circle"
					>
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<CodeSnippet>{`
<ListItem
	size="3-line"
	showDivider={true}
	leadingElement="icon"
	iconName="account_circle"
>
	Supporting line text lorem ipsum dolor sit amet, consectetur.
</ListItem>`}</CodeSnippet>
					<ListItem
						size="3-line"
						showDivider={true}
						leadingElement="icon"
						iconName="account_circle"
						trailingElement="checkbox"
						elementSelected={true}
					>
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<CodeSnippet>{`
<ListItem
	size="3-line"
	showDivider={true}
	leadingElement="icon"
	iconName="account_circle"
	trailingElement="checkbox"
	elementSelected={true}
>
	Supporting line text lorem ipsum dolor sit amet, consectetur.
</ListItem>`}</CodeSnippet>
					<ListItem
						size="2-line"
						showDivider={true}
						leadingElement="icon"
						iconName="account_circle"
					>
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<CodeSnippet>{`
<ListItem
	size="2-line"
	showDivider={true}
	leadingElement="icon"
	iconName="account_circle"
>
	Supporting line text lorem ipsum dolor sit amet, consectetur.
</ListItem>`}</CodeSnippet>
					<ListItem
						size="2-line"
						showDivider={true}
						leadingElement="icon"
						iconName="account_circle"
						trailingElement="checkbox"
						elementSelected={true}
					>
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<CodeSnippet>{`
<ListItem
	size="2-line"
	showDivider={true}
	leadingElement="icon"
	iconName="account_circle"
	trailingElement="checkbox"
	elementSelected={true}
>
	Supporting line text lorem ipsum dolor sit amet, consectetur.
</ListItem>`}</CodeSnippet>
					<ListItem
						size="1-line"
						showDivider={true}
						leadingElement="icon"
						iconName="account_circle"
					></ListItem>
					<CodeSnippet>{`
<ListItem
	size="1-line"
	showDivider={true}
	leadingElement="icon"
	iconName="account_circle"
>
</ListItem>`}</CodeSnippet>
					<ListItem
						size="1-line"
						showDivider={true}
						leadingElement="icon"
						iconName="account_circle"
						trailingElement="checkbox"
						elementSelected={true}
					></ListItem>
					<CodeSnippet>{`
<ListItem
	size="1-line"
	showDivider={true}
	leadingElement="icon"
	iconName="account_circle"
	trailingElement="checkbox"
	elementSelected={true}
>
</ListItem>`}</CodeSnippet>
					<ListItem
						size="3-line"
						showDivider={true}
						leadingElement="image-small"
						imageSrc="1.png"
					>
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<CodeSnippet>{`
<ListItem
	size="3-line"
	showDivider={true}
	leadingElement="image-small"
	imageSrc="1.png"
>
	Supporting line text lorem ipsum dolor sit amet, consectetur.
</ListItem>`}</CodeSnippet>
					<ListItem
						size="3-line"
						showDivider={true}
						leadingElement="image-small"
						imageSrc="1.png"
						trailingElement="checkbox"
						elementSelected={true}
					>
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<CodeSnippet>{`
<ListItem
	size="3-line"
	showDivider={true}
	leadingElement="image-small"
	imageSrc="1.png"
	trailingElement="checkbox"
	elementSelected={true}
>
	Supporting line text lorem ipsum dolor sit amet, consectetur.
</ListItem>`}</CodeSnippet>
					<ListItem
						size="2-line"
						showDivider={true}
						leadingElement="image-small"
						imageSrc="2.png"
					>
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<CodeSnippet>{`
<ListItem
	size="2-line"
	showDivider={true}
	leadingElement="image-small"
	imageSrc="2.png"
>
	Supporting line text lorem ipsum dolor sit amet, consectetur.
</ListItem>`}</CodeSnippet>
					<ListItem
						size="2-line"
						showDivider={true}
						leadingElement="image-small"
						imageSrc="2.png"
						trailingElement="checkbox"
						elementSelected={true}
					>
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<CodeSnippet>{`
<ListItem
	size="2-line"
	showDivider={true}
	leadingElement="image-small"
	imageSrc="2.png"
	trailingElement="checkbox"
	elementSelected={true}
>
	Supporting line text lorem ipsum dolor sit amet, consectetur.
</ListItem>`}</CodeSnippet>
					<ListItem
						size="1-line"
						showDivider={true}
						leadingElement="image-small"
						imageSrc="3.png"
					></ListItem>
					<CodeSnippet>{`
<ListItem
	size="1-line"
	showDivider={true}
	leadingElement="image-small"
	imageSrc="3.png"
>
</ListItem>`}</CodeSnippet>
					<ListItem
						size="1-line"
						showDivider={true}
						leadingElement="image-small"
						imageSrc="3.png"
						trailingElement="checkbox"
						elementSelected={true}
					></ListItem>
					<CodeSnippet>{`
<ListItem
	size="1-line"
	showDivider={true}
	leadingElement="image-small"
	imageSrc="3.png"
	trailingElement="checkbox"
	elementSelected={true}
>
</ListItem>`}</CodeSnippet>
					<ListItem
						size="3-line"
						showDivider={true}
						leadingElement="image-big"
						imageSrc="4.png"
					>
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<CodeSnippet>{`
<ListItem
	size="3-line"
	showDivider={true}
	leadingElement="image-big"
	imageSrc="4.png"
>
	Supporting line text lorem ipsum dolor sit amet, consectetur.
</ListItem>`}</CodeSnippet>
					<ListItem
						size="3-line"
						showDivider={true}
						leadingElement="image-big"
						imageSrc="4.png"
						trailingElement="checkbox"
						elementSelected={true}
					>
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<CodeSnippet>{`
<ListItem
	size="3-line"
	showDivider={true}
	leadingElement="image-big"
	imageSrc="4.png"
	trailingElement="checkbox"
	elementSelected={true}
>
	Supporting line text lorem ipsum dolor sit amet, consectetur.
</ListItem>`}</CodeSnippet>
					<ListItem
						size="2-line"
						showDivider={true}
						leadingElement="image-big"
						imageSrc="5.png"
					>
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<CodeSnippet>{`
<ListItem
	size="2-line"
	showDivider={true}
	leadingElement="image-big"
	imageSrc="5.png"
>
	Supporting line text lorem ipsum dolor sit amet, consectetur.
</ListItem>`}</CodeSnippet>
					<ListItem
						size="2-line"
						showDivider={true}
						leadingElement="image-big"
						imageSrc="5.png"
						trailingElement="checkbox"
						elementSelected={true}
					>
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<CodeSnippet>{`
<ListItem
	size="2-line"
	showDivider={true}
	leadingElement="image-big"
	imageSrc="5.png"
	trailingElement="checkbox"
	elementSelected={true}
>
	Supporting line text lorem ipsum dolor sit amet, consectetur.
</ListItem>`}</CodeSnippet>
					<ListItem
						size="1-line"
						showDivider={true}
						leadingElement="image-big"
						imageSrc="6.png"
					></ListItem>
					<CodeSnippet>{`
<ListItem
	size="1-line"
	showDivider={true}
	leadingElement="image-big"
	imageSrc="6.png"
>
</ListItem>`}</CodeSnippet>
					<ListItem
						size="1-line"
						showDivider={true}
						leadingElement="image-big"
						imageSrc="6.png"
						trailingElement="checkbox"
						elementSelected={true}
					></ListItem>
					<CodeSnippet>{`
<ListItem
	size="1-line"
	showDivider={true}
	leadingElement="image-big"
	imageSrc="6.png"
	trailingElement="checkbox"
	elementSelected={true}
>
</ListItem>`}</CodeSnippet>
					<ListItem
						size="3-line"
						showDivider={true}
						leadingElement="checkbox"
						onElementChange={() => {
							alert("hi");
						}}
						elementSelected={true}
						checkboxConfiguration="error"
					>
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<CodeSnippet>{`
<ListItem
	size="3-line"
	showDivider={true}
	leadingElement="checkbox"
	onElementChange={() => {
		alert("hi");
	}}
	elementSelected={true}
	checkboxConfiguration="error"
>
	Supporting line text lorem ipsum dolor sit amet, consectetur.
</ListItem>`}</CodeSnippet>
					<ListItem
						size="3-line"
						showDivider={true}
						leadingElement="checkbox"
						onElementChange={() => {
							alert("hi");
						}}
						elementSelected={true}
						checkboxConfiguration="error"
						trailingElement="icon"
						onTrailingIconClick={() => {
							alert("hi");
						}}
					>
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<CodeSnippet>{`
<ListItem
	size="3-line"
	showDivider={true}
	leadingElement="checkbox"
	onElementChange={() => {
		alert("hi");
	}}
	elementSelected={true}
	checkboxConfiguration="error"
	trailingElement="icon"
	onTrailingIconClick={() => {
		alert("hi");
	}}
>
	Supporting line text lorem ipsum dolor sit amet, consectetur.
</ListItem>`}</CodeSnippet>
					<ListItem
						size="2-line"
						showDivider={true}
						leadingElement="checkbox"
						elementSelected={true}
						onElementChange={() => {
							alert("hi");
						}}
					>
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<CodeSnippet>{`
<ListItem
	size="2-line"
	showDivider={true}
	leadingElement="checkbox"
	elementSelected={true}
	onElementChange={() => {
		alert("hi");
	}}
>
	Supporting line text lorem ipsum dolor sit amet, consectetur.
</ListItem>`}</CodeSnippet>
					<ListItem
						size="2-line"
						showDivider={true}
						leadingElement="checkbox"
						elementSelected={true}
						onElementChange={() => {
							alert("hi");
						}}
						trailingElement="icon"
						onTrailingIconClick={() => {
							alert("hi");
						}}
					>
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<CodeSnippet>{`
<ListItem
	size="2-line"
	showDivider={true}
	leadingElement="checkbox"
	elementSelected={true}
	onElementChange={() => {
		alert("hi");
	}}
	trailingElement="icon"
	onTrailingIconClick={() => {
		alert("hi");
	}}
>
	Supporting line text lorem ipsum dolor sit amet, consectetur.
</ListItem>`}</CodeSnippet>
					<ListItem
						size="1-line"
						showDivider={true}
						leadingElement="checkbox"
						elementSelected={true}
						onElementChange={() => {
							alert("hi");
						}}
					></ListItem>
					<CodeSnippet>{`
<ListItem
	size="1-line"
	showDivider={true}
	leadingElement="checkbox"
	elementSelected={true}
	onElementChange={() => {
		alert("hi");
	}}
>
</ListItem>`}</CodeSnippet>
					<ListItem
						size="1-line"
						showDivider={true}
						leadingElement="checkbox"
						elementSelected={true}
						onElementChange={() => {
							alert("hi");
						}}
						trailingElement="icon"
						onTrailingIconClick={() => {
							alert("hi");
						}}
					></ListItem>
					<CodeSnippet>{`
<ListItem
	size="1-line"
	showDivider={true}
	leadingElement="checkbox"
	elementSelected={true}
	onElementChange={() => {
		alert("hi");
	}}
	trailingElement="icon"
	onTrailingIconClick={() => {
		alert("hi");
	}}
>
</ListItem>`}</CodeSnippet>
					<ListItem
						size="3-line"
						showDivider={true}
						leadingElement="radio"
						onElementChange={() => {
							alert("hi");
						}}
						radioButtonGroupName="list-item-radio-group-1"
						elementSelected={true}
						radioButtonValue="0"
					>
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<CodeSnippet>{`
<ListItem
	size="3-line"
	showDivider={true}
	leadingElement="radio"
	onElementChange={() => {
		alert("hi");
	}}
	radioButtonGroupName="list-item-radio-group-1"
	elementSelected={true}
	radioButtonValue="0"
>
	Supporting line text lorem ipsum dolor sit amet, consectetur.
</ListItem>`}</CodeSnippet>
					<ListItem
						size="3-line"
						showDivider={true}
						leadingElement="radio"
						onElementChange={() => {
							alert("hi");
						}}
						radioButtonGroupName="list-item-radio-group-1"
						radioButtonValue="0"
						trailingElement="icon"
						onTrailingIconClick={() => {
							alert("hi");
						}}
					>
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<CodeSnippet>{`
<ListItem
	size="3-line"
	showDivider={true}
	leadingElement="radio"
	onElementChange={() => {
		alert("hi");
	}}
	radioButtonGroupName="list-item-radio-group-1"
	radioButtonValue="0"
	trailingElement="icon"
	onTrailingIconClick={() => {
		alert("hi");
	}}
>
	Supporting line text lorem ipsum dolor sit amet, consectetur.
</ListItem>`}</CodeSnippet>
					<ListItem
						size="2-line"
						showDivider={true}
						leadingElement="radio"
						onElementChange={() => {
							alert("hi");
						}}
						radioButtonGroupName="list-item-radio-group-1"
						radioButtonValue="1"
					>
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<CodeSnippet>{`
<ListItem
	size="2-line"
	showDivider={true}
	leadingElement="radio"
	onElementChange={() => {
		alert("hi");
	}}
	radioButtonGroupName="list-item-radio-group-1"
	radioButtonValue="1"
>
	Supporting line text lorem ipsum dolor sit amet, consectetur.
</ListItem>`}</CodeSnippet>
					<ListItem
						size="2-line"
						showDivider={true}
						leadingElement="radio"
						onElementChange={() => {
							alert("hi");
						}}
						radioButtonGroupName="list-item-radio-group-1"
						radioButtonValue="1"
						trailingElement="icon"
						onTrailingIconClick={() => {
							alert("hi");
						}}
					>
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<CodeSnippet>{`
<ListItem
	size="2-line"
	showDivider={true}
	leadingElement="radio"
	onElementChange={() => {
		alert("hi");
	}}
	radioButtonGroupName="list-item-radio-group-1"
	radioButtonValue="1"
	trailingElement="icon"
	onTrailingIconClick={() => {
		alert("hi");
	}}
>
	Supporting line text lorem ipsum dolor sit amet, consectetur.
</ListItem>`}</CodeSnippet>
					<ListItem
						size="1-line"
						showDivider={true}
						leadingElement="radio"
						onElementChange={() => {
							alert("hi");
						}}
						radioButtonGroupName="list-item-radio-group-1"
						radioButtonValue="2"
					></ListItem>
					<CodeSnippet>{`
<ListItem
	size="1-line"
	showDivider={true}
	leadingElement="radio"
	onElementChange={() => {
		alert("hi");
	}}
	radioButtonGroupName="list-item-radio-group-1"
	radioButtonValue="2"
>
</ListItem>`}</CodeSnippet>
					<ListItem
						size="1-line"
						showDivider={true}
						leadingElement="radio"
						onElementChange={() => {
							alert("hi");
						}}
						radioButtonGroupName="list-item-radio-group-1"
						radioButtonValue="2"
						trailingElement="icon"
						onTrailingIconClick={() => {
							alert("hi");
						}}
					></ListItem>
					<CodeSnippet>{`
<ListItem
	size="1-line"
	showDivider={true}
	leadingElement="radio"
	onElementChange={() => {
		alert("hi");
	}}
	radioButtonGroupName="list-item-radio-group-1"
	radioButtonValue="2"
	trailingElement="icon"
	onTrailingIconClick={() => {
		alert("hi");
	}}
>
 </ListItem>`}</CodeSnippet>
					<ListItem
						size="3-line"
						showDivider={true}
						leadingElement="switch"
						onElementChange={() => {
							alert("hi");
						}}
						elementSelected={true}
						switchIconNameDeselected="star"
						switchIconNameSelected="flag"
					>
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<CodeSnippet>{`
<ListItem
	size="3-line"
	showDivider={true}
	leadingElement="switch"
	onElementChange={() => {
		alert("hi");
	}}
	elementSelected={true}
	switchIconNameDeselected="star"
	switchIconNameSelected="flag"
>
	Supporting line text lorem ipsum dolor sit amet, consectetur.
</ListItem>`}</CodeSnippet>
					<ListItem
						size="3-line"
						showDivider={true}
						leadingElement="switch"
						onElementChange={() => {
							alert("hi");
						}}
						trailingElement="icon"
						onTrailingIconClick={() => {
							alert("hi");
						}}
						switchIconNameDeselected="star"
						switchIconNameSelected="flag"
					>
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<CodeSnippet>{`
<ListItem
	size="3-line"
	showDivider={true}
	leadingElement="switch"
	onElementChange={() => {
		alert("hi");
	}}
	trailingElement="icon"
	onTrailingIconClick={() => {
		alert("hi");
	}}
	switchIconNameDeselected="star"
	switchIconNameSelected="flag"
>
	Supporting line text lorem ipsum dolor sit amet, consectetur.
</ListItem>`}</CodeSnippet>
					<ListItem
						size="2-line"
						showDivider={true}
						leadingElement="switch"
						elementSelected={true}
					>
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<CodeSnippet>{`
<ListItem
	size="2-line"
	showDivider={true}
	leadingElement="switch"
	elementSelected={true}
>
	Supporting line text lorem ipsum dolor sit amet, consectetur.
</ListItem>`}</CodeSnippet>
					<ListItem
						size="2-line"
						showDivider={true}
						leadingElement="switch"
						trailingElement="icon"
						onTrailingIconClick={() => {
							alert("hi");
						}}
						elementSelected={true}
					>
						Supporting line text lorem ipsum dolor sit amet, consectetur.
					</ListItem>
					<CodeSnippet>{`
<ListItem
	size="2-line"
	showDivider={true}
	leadingElement="switch"
	trailingElement="icon"
	onTrailingIconClick={() => {
		alert("hi");
	}}
	elementSelected={true}
>
	Supporting line text lorem ipsum dolor sit amet, consectetur.
</ListItem>`}</CodeSnippet>
					<ListItem
						size="1-line"
						showDivider={true}
						leadingElement="switch"
						elementSelected={true}
					></ListItem>
					<CodeSnippet>{`
<ListItem
	size="1-line"
	showDivider={true}
	leadingElement="switch"
	elementSelected={true}
>
</ListItem>`}</CodeSnippet>
					<ListItem
						size="1-line"
						showDivider={true}
						leadingElement="switch"
						trailingElement="icon"
						onTrailingIconClick={() => {
							alert("hi");
						}}
						elementSelected={true}
					></ListItem>
					<CodeSnippet>{`
<ListItem
	size="1-line"
	showDivider={true}
	leadingElement="switch"
	trailingElement="icon"
	onTrailingIconClick={() => {
		alert("hi");
	}}
	elementSelected={true}
>
</ListItem>`}</CodeSnippet>
				</List>
			</div>
		</div>
	);
};
export default ListsFrame;
