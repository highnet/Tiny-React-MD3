/*
his React component represents a frame containing different types of dialog
examples. The code showcases various types of dialogs, including basic dialogs,
dialogs with hero icons, and scrollable list dialogs. The code imports required
modules and components from various files to use in the DialogsFrame component.
The component retrieves the preferred theme from local storage or uses a default
theme and creates CSS class names based on the theme and other configurations.
The JSX code renders the component frame, displaying several buttons that trigger
different dialog examples. The first set of buttons and dialogs demonstrate basic
dialogs with the title "Lorem Ipsum" and a supporting text. The dialog may have
action buttons with alerts. The second set of buttons and dialogs showcase
dialogs with hero icons (e.g., "mobile_friendly") along with the title and
supporting text. They also include action buttons with alerts. The third and 
fourth sets of buttons and dialogs demonstrate list dialogs with supporting
line texts and dividers. They also include action buttons with alerts. The last
two sets of buttons and dialogs are similar to the list dialogs, but they have
a scrollable list to accommodate more content.
*/

import React from "react";
import { getPreferredScheme } from "trmd3components/Themeing";
import CodeSnippet from "../CodeSnippet/CodeSnippet";
import ComponentFrameTitle from "../ComponentFrameTitle/ComponentFrameTitle";
import { StringBuilder } from "trmd3components/StringBuilder";
import Typography from "trmd3components/Typography";
import Button from "trmd3components/Button";
import Dialog from "trmd3components/Dialog";
import { openDialogId } from "trmd3components/Modals";
import List from "trmd3components/List";
import ListItem from "trmd3components/ListItem";

const DialogsFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	const _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme + "-trmd3")
		.add("dialogs-frame-trmd3")
		.add("dialogs-frame-" + _theme + "-trmd3")
		.toString();

	const _computedTrmd3SectionTitlesClassName = new StringBuilder()
		.add("section-title-trmd3")
		.add("section-title-" + _theme + "-trmd3")
		.toString();

	return (
		<div className={_computedFrameClassName}>
			<Typography
				id="dialogs-section"
				variant="text-title-large"
				className={_computedTrmd3SectionTitlesClassName}
			>
				💬
			</Typography>
			<ComponentFrameTitle link="https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#-dialogs">
				Dialogs
			</ComponentFrameTitle>
			<Button onClick={() => openDialogId("dialog-1")}>Basic Dialog</Button>
			<Dialog
				configuration="basic"
				id="dialog-1"
				showDivider={true}
				showCloseButton={true}
				buttons={[
					{ onClick: () => alert("hi") },
					{ onClick: () => alert("hi") },
				]}
				title="Lorem Ipsum"
			>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</Dialog>
			<CodeSnippet>{`
<Button onClick={() => openDialogId("dialog-1")}>Basic Dialog</Button>
	<Dialog
	    configuration="basic"
		id="dialog-1"
		showDivider={true}
		showCloseButton={true}
		buttons={[
			{ onClick: () => alert("hi") },
			{ onClick: () => alert("hi") },
		]}
	title="Lorem Ipsum"
>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</Dialog>`}</CodeSnippet>
			<Button onClick={() => openDialogId("dialog-2")}>
				Dialog With Hero Icon
			</Button>
			<Dialog
				configuration="basic"
				id="dialog-2"
				showDivider={true}
				showCloseButton={true}
				iconName="mobile_friendly"
				buttons={[
					{ onClick: () => alert("hi") },
					{ onClick: () => alert("hi") },
				]}
				title="Lorem Ipsum"
			>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</Dialog>
			<CodeSnippet>{`			
<Button onClick={() => openDialogId("dialog-2")}>
	Dialog With Hero Icon
</Button>
<Dialog
	configuration="basic"
	id="dialog-2"
	showDivider={true}
	showCloseButton={true}
	iconName="mobile_friendly"
	buttons={[
		{ onClick: () => alert("hi") },
		{ onClick: () => alert("hi") },
		]}
	title="Lorem Ipsum"
>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</Dialog>
`}</CodeSnippet>
			<Button onClick={() => openDialogId("dialog-3")}>List Dialog</Button>
			<Dialog
				configuration="list"
				id="dialog-3"
				showDivider={true}
				showCloseButton={true}
				buttons={[
					{ onClick: () => alert("hi") },
					{ onClick: () => alert("hi") },
				]}
				title="Lorem Ipsum"
				listComponent={
					<List>
						<ListItem size="1-line" showDivider={true}>
							Supporting line text lorem ipsum dolor sit amet, consectetur.
						</ListItem>
						<ListItem size="1-line" showDivider={true}>
							Supporting line text lorem ipsum dolor sit amet, consectetur.
						</ListItem>
					</List>
				}
			>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</Dialog>
			<CodeSnippet>{`			
<Button onClick={() => openDialogId("dialog-3")}>List Dialog</Button>
<Dialog
	configuration="list"
	id="dialog-3"
	showDivider={true}
	showCloseButton={true}
	buttons={[
		{ onClick: () => alert("hi") },
		{ onClick: () => alert("hi") },
	]}
	title="Lorem Ipsum"
	listComponent={
		<List>
			<ListItem size="1-line" showDivider={true}>
				Supporting line text lorem ipsum dolor sit amet, consectetur.
			</ListItem>
			<ListItem size="1-line" showDivider={true}>
				Supporting line text lorem ipsum dolor sit amet, consectetur.
			</ListItem>
		</List>
				}
>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</Dialog>
            `}</CodeSnippet>
			<Button onClick={() => openDialogId("dialog-4")}>
				List Dialog With Hero Icon
			</Button>
			<Dialog
				configuration="list"
				id="dialog-4"
				showDivider={true}
				showCloseButton={true}
				iconName="mobile_friendly"
				buttons={[
					{ onClick: () => alert("hi") },
					{ onClick: () => alert("hi") },
				]}
				title="Lorem Ipsum"
				listComponent={
					<List>
						<ListItem size="1-line" showDivider={true}>
							Supporting line text lorem ipsum dolor sit amet, consectetur.
						</ListItem>
						<ListItem size="1-line" showDivider={true}>
							Supporting line text lorem ipsum dolor sit amet, consectetur.
						</ListItem>
					</List>
				}
			>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</Dialog>
			<CodeSnippet>{`			
<Button onClick={() => openDialogId("dialog-4")}>
	List Dialog With Hero Icon
</Button>
<Dialog
	configuration="list"
	id="dialog-4"
	showDivider={true}
	showCloseButton={true}
	iconName="mobile_friendly"
	buttons={[
	    { onClick: () => alert("hi") },
		{ onClick: () => alert("hi") },
    ]}
	title="Lorem Ipsum"
	listComponent={
		<List>
			<ListItem size="1-line" showDivider={true}>
				Supporting line text lorem ipsum dolor sit amet, consectetur.
			</ListItem>
			<ListItem size="1-line" showDivider={true}>
				Supporting line text lorem ipsum dolor sit amet, consectetur.
			</ListItem>
		</List>
		}
>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</Dialog>
            `}</CodeSnippet>
			<Button onClick={() => openDialogId("dialog-5")}>
				Scrollable List Dialog
			</Button>
			<Dialog
				configuration="list"
				id="dialog-5"
				showDivider={true}
				showCloseButton={true}
				buttons={[
					{ onClick: () => alert("hi") },
					{ onClick: () => alert("hi") },
				]}
				title="Lorem Ipsum"
				listComponent={
					<List height="10rem">
						<ListItem size="3-line" showDivider={true}>
							Supporting line text lorem ipsum dolor sit amet, consectetur.
						</ListItem>
						<ListItem size="3-line" showDivider={true}>
							Supporting line text lorem ipsum dolor sit amet, consectetur.
						</ListItem>
						<ListItem size="3-line" showDivider={true}>
							Supporting line text lorem ipsum dolor sit amet, consectetur.
						</ListItem>
					</List>
				}
			>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</Dialog>
			<CodeSnippet>{`
<Button onClick={() => openDialogId("dialog-5")}>
	Scrollable List Dialog
</Button>
<Dialog
	configuration="list"
	id="dialog-5"
	showDivider={true}
	showCloseButton={true}
	buttons={[
		{ onClick: () => alert("hi") },
		{ onClick: () => alert("hi") },
	]}
	title="Lorem Ipsum"
	listComponent={
		<List height="10rem">
			<ListItem size="3-line" showDivider={true}>
				Supporting line text lorem ipsum dolor sit amet, consectetur.
			</ListItem>
			<ListItem size="3-line" showDivider={true}>
				upporting line text lorem ipsum dolor sit amet, consectetur.
			</ListItem>
			<ListItem size="3-line" showDivider={true}>
				Supporting line text lorem ipsum dolor sit amet, consectetur.
			</ListItem>
		</List>
		}
>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</Dialog>
            `}</CodeSnippet>
			<Button onClick={() => openDialogId("dialog-6")}>
				Scrollable List Dialog With Hero Icon
			</Button>
			<Dialog
				configuration="list"
				id="dialog-6"
				showDivider={true}
				showCloseButton={true}
				iconName="mobile_friendly"
				buttons={[
					{ onClick: () => alert("hi") },
					{ onClick: () => alert("hi") },
				]}
				title="Lorem Ipsum"
				listComponent={
					<List height="10rem">
						<ListItem size="3-line" showDivider={true}>
							Supporting line text lorem ipsum dolor sit amet, consectetur.
						</ListItem>
						<ListItem size="3-line" showDivider={true}>
							Supporting line text lorem ipsum dolor sit amet, consectetur.
						</ListItem>
						<ListItem size="3-line" showDivider={true}>
							Supporting line text lorem ipsum dolor sit amet, consectetur.
						</ListItem>
					</List>
				}
			>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</Dialog>
			<CodeSnippet>{`
<Button onClick={() => openDialogId("dialog-6")}>
	Scrollable List Dialog With Hero Icon
</Button>
<Dialog
	configuration="list"
	id="dialog-6"
	showDivider={true}
	showCloseButton={true}
    iconName="mobile_friendly"
	buttons={[
	{ onClick: () => alert("hi") },
	{ onClick: () => alert("hi") },
]}
	title="Lorem Ipsum"
	listComponent={
	<List height="10rem">
		<ListItem size="3-line" showDivider={true}>
			Supporting line text lorem ipsum dolor sit amet, consectetur.
		</ListItem>
		<ListItem size="3-line" showDivider={true}>
			Supporting line text lorem ipsum dolor sit amet, consectetur.
		</ListItem>
		<ListItem size="3-line" showDivider={true}>
			Supporting line text lorem ipsum dolor sit amet, consectetur.
		</ListItem>
		</List>
	}
>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</Dialog>`}</CodeSnippet>
		</div>
	);
};
export default DialogsFrame;
