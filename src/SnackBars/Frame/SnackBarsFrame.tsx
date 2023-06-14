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
		.add("snackbars-frame-trmd3")
		.add("snackbars-frame-" + _theme + "-trmd3")
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
			<Typography variant={"text-label-small"}>One Line</Typography>
			<SnackBar
				className="snackbar-on-frame-trmd3"
				configuration={"one-line"}
				action={() => {
					console.log("HI");
				}}
				message="Lorem ipsum dolor sit amet."
			/>
			<Typography variant={"text-label-small"}>Two Line</Typography>
			<SnackBar
				className="snackbar-on-frame-trmd3"
				configuration={"two-line"}
				action={() => {
					console.log("HI");
				}}
				message="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
			/>
			<Typography variant={"text-label-small"}>Three Line</Typography>
			<SnackBar
				className="snackbar-on-frame-trmd3"
				configuration={"three-line"}
				action={() => {
					console.log("HI");
				}}
				message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sem nisl, vestibulum ultricies faucibus laoreet, hendrerit quis ligula."
			/>
			<Button
				onClick={() =>
					activateSnackBarId(
						"snackbar-0",
						3,
						"Lorem ipsum dolor sit amet.",
						() => {
							console.log("HI");
						},
						"Action",
						true
					)
				}
			>
				One Line
			</Button>
			<Button
				onClick={() =>
					activateSnackBarId(
						"snackbar-1",
						3,
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
						() => {
							console.log("HI");
						},
						"Action",
						true
					)
				}
			>
				Two Line
			</Button>
			<Button
				onClick={() =>
					activateSnackBarId(
						"snackbar-2",
						3,
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sem nisl, vestibulum ultricies faucibus laoreet, hendrerit quis ligula.",
						() => {
							console.log("HI");
						},
						"Action",
						true
					)
				}
			>
				Three Line
			</Button>
			<SnackBar id={"snackbar-0"} configuration={"one-line"} />
			<SnackBar id={"snackbar-1"} configuration={"two-line"} />
			<SnackBar id={"snackbar-2"} configuration={"three-line"} />
			<CodeSnippet>{`<Snackbar />`}</CodeSnippet>
		</div>
	);
};
export default SnackBarsFrame;
