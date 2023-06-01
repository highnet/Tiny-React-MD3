import { useEffect, useState } from "react";
import Button from "../../Button/Button";
import { StringBuilder } from "../../Gizmos/StringBuilder";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import CodeSnippet from "../../TRMD3/CodeSnippet/CodeSnippet";
import ComponentFrameTitle from "../../TRMD3/ComponentFrameTitle/ComponentFrameTitle";
import Typography from "../../Typography/Typography";
import Tooltip from "../Tooltip";

const TooltipsFrame: React.FC = () => {
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
				id="tooltips-section"
				variant="text-title-large"
				className={_computedTrmd3SectionTitlesClassName}
			>
				🛠️
			</Typography>
			<ComponentFrameTitle link="https://www.highnet.xyz">
				Tooltips
			</ComponentFrameTitle>
			<Typography variant={"text-label-small"}>Rich</Typography>
			<Tooltip></Tooltip>
			<CodeSnippet>{`<Tooltip></Tooltip>`}</CodeSnippet>
			<Typography variant={"text-label-small"}>Rich - With Actions</Typography>
			<Tooltip
				buttons={[
					{
						onClick: () => {
							alert("TEST1");
						},
					},
					{
						onClick: () => {
							alert("TEST2");
						},
					},
				]}
			></Tooltip>
			<CodeSnippet>{`			
<Tooltip
	buttons={[
		{
			onClick: () => {
				alert("TEST1");
		},
		},
		{
			onClick: () => {
				alert("TEST2");
		},
			},
	]}
></Tooltip>
			`}</CodeSnippet>
			<Typography variant={"text-label-small"}>Plain - Single Line</Typography>
			<Tooltip configuration="plain-singleline"></Tooltip>
			<CodeSnippet>{`<Component>Component</Component>`}</CodeSnippet>
			<Typography variant={"text-label-small"}>Plain - Multi Line</Typography>
			<Tooltip configuration="plain-multiline"></Tooltip>
			<CodeSnippet>{`<Tooltip configuration="plain-multiline"></Tooltip>`}</CodeSnippet>
			<Tooltip
				title="TRMD3"
				buttons={[
					{
						label: "Readme",
						onClick: undefined,
					},
					{
						label: "Docs",
						onClick: undefined,
					},
				]}
			>
				Quickly transform your design kit prototypes into stunning and modern
				web applications
			</Tooltip>
			<CodeSnippet>{`
<Tooltip
	title="TRMD3"
	buttons={[
			{
				label: "Readme",
				onClick: undefined,
			},
			{
				label: "Docs",
				onClick: undefined,
			},
			}
>
Quickly transform your design kit...
</Tooltip>
			`}</CodeSnippet>
			<Typography variant={"text-label-small"}>x</Typography>
			<Tooltip triggerComponent={<Button>Button</Button>}></Tooltip>
			<CodeSnippet>{`<Tooltip triggerComponent={<Button>Button</Button>}></Tooltip>`}</CodeSnippet>
			<Typography variant={"text-label-small"}>x</Typography>
			<Tooltip triggerComponent={<Button>Button</Button>}></Tooltip>
			<CodeSnippet>{`<Component>Component</Component>`}</CodeSnippet>
			<Typography variant={"text-label-small"}>x</Typography>
			<Tooltip triggerComponent={<Button>Button</Button>}></Tooltip>
			<CodeSnippet>{`<Component>Component</Component>`}</CodeSnippet>
		</div>
	);
};
export default TooltipsFrame;
