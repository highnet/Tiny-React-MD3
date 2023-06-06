import Button from "../../Button/Button";
import { closeDialogRef, openDialogId } from "../../Gizmos/Modals";
import { StringBuilder } from "../../Gizmos/StringBuilder";
import { getPreferredScheme } from "../../Gizmos/Themeing";
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
			<Dialog id="dialog-1" closeOnOutsideClick={true} showCloseButton={true} buttons={[{ label: "hi", onClick: () => alert("hi") },{ label: "hi", onClick: () => alert("hi") }]} />			<CodeSnippet>{`<Component>Component</Component>`}</CodeSnippet>
		</div>
	);
};
export default DialogsFrame;
