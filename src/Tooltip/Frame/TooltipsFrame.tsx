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
	const [isDesktop, setIsDesktop] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsDesktop(window.innerWidth >= 1024); // set isDesktop to true if viewport width is greater than or equal to 1024
		};
		handleResize(); // call handleResize initially to set isDesktop based on current viewport width
		window.addEventListener("resize", handleResize); // add event listener to update isDesktop when viewport width changes
		return () => {
			window.removeEventListener("resize", handleResize); // remove event listener when component unmounts
		};
	}, []);
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
			<CodeSnippet>{`<Component>Component</Component>`}</CodeSnippet>
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
			<CodeSnippet>{`<Component>Component</Component>`}</CodeSnippet>
			<Typography variant={"text-label-small"}>Plain - Single Line</Typography>
			<Tooltip configuration="plain-singleline"></Tooltip>
			<CodeSnippet>{`<Component>Component</Component>`}</CodeSnippet>
			<Typography variant={"text-label-small"}>Plain - Multi Line</Typography>
			<Tooltip configuration="plain-multiline"></Tooltip>
			<CodeSnippet>{`<Component>Component</Component>`}</CodeSnippet>
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
			<CodeSnippet>{`<Component>Component</Component>`}</CodeSnippet>
			<Typography variant={"text-label-small"}>Plain - Single Line</Typography>
			<Tooltip triggerComponent={<Button>Button</Button>}></Tooltip>
			<CodeSnippet>{`<Component>Component</Component>`}</CodeSnippet>
			<Typography variant={"text-label-small"}>Plain - Single Line</Typography>
			<Tooltip triggerComponent={<Button>Button</Button>}></Tooltip>
			<CodeSnippet>{`<Component>Component</Component>`}</CodeSnippet>
			<Typography variant={"text-label-small"}>Plain - Single Line</Typography>
			<Tooltip triggerComponent={<Button>Button</Button>}></Tooltip>
			<CodeSnippet>{`<Component>Component</Component>`}</CodeSnippet>
		</div>
	);
};
export default TooltipsFrame;
