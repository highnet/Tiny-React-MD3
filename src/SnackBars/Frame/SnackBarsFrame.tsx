import React, { useState } from "react";
import Button from "../../Button/Button";
import { StringBuilder } from "../../Gizmos/StringBuilder";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import CodeSnippet from "../../TRMD3/CodeSnippet/CodeSnippet";
import ComponentFrameTitle from "../../TRMD3/ComponentFrameTitle/ComponentFrameTitle";
import Typography from "../../Typography/Typography";
import SnackBar from "../SnackBar";
import { activateSnackBarId } from "../../Gizmos/Modals";

const SnackBarsFrame: React.FC = () => {
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
				id="components-section"
				variant="text-title-large"
				className={_computedTrmd3SectionTitlesClassName}
			>
				⏬
			</Typography>
			<ComponentFrameTitle link="https://www.highnet.xyz">
				SnackBars
			</ComponentFrameTitle>
			<Typography variant={"text-label-small"}>Default</Typography>
			<Button
				onClick={() =>
					activateSnackBarId(
						"snackbar-0",
						3,
						"This Is A Test Message This Is A Test Message This Is A Test Message",
						() => {
							console.log("HI");
						},
						true
					)
				}
			>
				Open SnackBar 1
			</Button>
			<Button
				onClick={() =>
					activateSnackBarId(
						"snackbar-1",
						3,
						"This Is A Test Message With More Text To Fill Space This Is A Test Message With More Text To Fill Space",
						() => {
							console.log("HI");
						},
						true
					)
				}
			>
				Open SnackBar 2
			</Button>
			<Button
				onClick={() =>
					activateSnackBarId(
						"snackbar-2",
						3,
						"This Is A Test Message With Even More Text To Fill Space And Make It Three Lines Long To Test The Three Line Configuration This Is A Test Message With Even More Text To Fill Space And Make It Three Lines Long To Test The Three Line Configuration",
						() => {
							console.log("HI");
						},
						true
					)
				}
			>
				Open SnackBar 3
			</Button>
			<SnackBar id={"snackbar-0"} configuration={"one-line"} />
			<SnackBar id={"snackbar-1"} configuration={"two-line"} />
			<SnackBar id={"snackbar-2"} configuration={"three-line"} />
			<CodeSnippet>{`<Snackbar />`}</CodeSnippet>
		</div>
	);
};
export default SnackBarsFrame;
