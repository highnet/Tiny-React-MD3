import Button from "../../Button/Button";
import { closeDialogRef, openDialogId } from "../../Gizmos/Modals";
import { StringBuilder } from "../../Gizmos/StringBuilder";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import List from "../../Lists/List";
import ListItem from "../../Lists/List Items/ListItem";
import CodeSnippet from "../../TRMD3/CodeSnippet/CodeSnippet";
import ComponentFrameTitle from "../../TRMD3/ComponentFrameTitle/ComponentFrameTitle";
import Typography from "../../Typography/Typography";
import Dialog from "../Dialog";

const DialogsFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme + "-trmd3")
		.add("dialogs-frame-trmd3")
		.add("dialogs-frame-" + _theme + "-trmd3")
		.toString();

	let _computedTrmd3SectionTitlesClassName = new StringBuilder()
		.add("section-title-trmd3")
		.add("section-title-" + _theme + "-trmd3")
		.toString();


	return (
		<div className={_computedFrameClassName}>
			<Typography
				id="components-section"
				variant="text-title-large"
				className={_computedTrmd3SectionTitlesClassName}
			>
				💬
			</Typography>
			<ComponentFrameTitle link="https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#-dialogs">
				Dialogs
			</ComponentFrameTitle>
			<Typography variant={"text-label-small"}>Default</Typography>
			<Button onClick={() => openDialogId("dialog-1")}>Open Dialog</Button>{" "}
			<Dialog iconName="hive" configuration="basic" id="dialog-1" showDivider={false} showCloseButton={true} buttons={[{ onClick: () => alert("hi") },{  onClick: () => alert("hi") }]} >TEST</Dialog>			<CodeSnippet>{`<Component>Component</Component>`}</CodeSnippet>
			<Button onClick={() => openDialogId("dialog-2")}>Open Dialog</Button>{" "}
			<Dialog configuration="basic" id="dialog-2" showDivider={true} showCloseButton={true} buttons={[{ onClick: () => alert("hi") },{  onClick: () => alert("hi") }]} />			<CodeSnippet>{`<Component>Component</Component>`}</CodeSnippet>
			<Button onClick={() => openDialogId("dialog-3")}>Open Dialog</Button>{" "}
			<Dialog listComponent={        <List>
            
            <ListItem
                size="2-line"
                showDivider={true}
                leadingElement="switch"
                elementSelected={true}
            >
                Supporting line text lorem ipsum dolor sit amet, consectetur.
            </ListItem>     
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
         </List>} configuration="list" id="dialog-3" showDivider={true} showCloseButton={true} buttons={[{ onClick: () => alert("hi") },{  onClick: () => alert("hi") }]} />			
		</div>
	);
};
export default DialogsFrame;
